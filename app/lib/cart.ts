// app/lib/cart.ts
// Tiny client-side cart stored in localStorage (no external helpers)

import { PRODUCTS } from "./products";

// Derive the SKU type from the PRODUCTS map
export type Sku = keyof typeof PRODUCTS;

type Cart = Record<Sku, number>;

const KEY = "cart_v1";

function read(): Cart {
  if (typeof window === "undefined") return {} as Cart;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {} as Cart;
    const obj = JSON.parse(raw) as Record<string, number>;
    const out = {} as Cart;
    for (const [k, v] of Object.entries(obj)) {
      if (typeof v === "number" && v > 0 && (k as Sku) in PRODUCTS) {
        out[k as Sku] = Math.floor(v);
      }
    }
    return out;
  } catch {
    return {} as Cart;
  }
}

function write(c: Cart) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(c));
  try {
    window.dispatchEvent(new Event("cart:updated"));
  } catch {}
}

/** Get the whole cart (sku -> qty) */
export function getCart(): Cart {
  return read();
}

/** Set an absolute quantity (0 removes the line) */
export function setQty(sku: Sku, qty: number) {
  const c = read();
  if (!qty || qty <= 0) delete c[sku];
  else c[sku] = Math.floor(qty);
  write(c);
}

/** Increment/decrement a line */
export function addQty(sku: Sku, delta: number) {
  const c = read();
  const next = (c[sku] || 0) + delta;
  setQty(sku, next);
}

/** Remove everything */
export function clearCart() {
  write({} as Cart);
}

/** Lines as an array (useful for iterating) */
export function lines() {
  const c = read();
  return Object.keys(c).map((k) => ({ sku: k as Sku, qty: c[k as Sku]! }));
}

/** Sum total in cents (AUD) based on PRODUCTS price table */
export function totalCents(): number {
  return lines().reduce((sum, ln) => {
    const p: any = PRODUCTS[ln.sku];
    // treat entries with a numeric unit_amount as purchasable leaf products
    if (p && typeof p.unit_amount === "number") {
      return sum + p.unit_amount * ln.qty;
    }
    return sum;
  }, 0);
}
