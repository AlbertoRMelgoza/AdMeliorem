// app/lib/cart.ts
// Tiny client-side cart stored in localStorage (accepts string SKUs, filters to valid ones)

import { PRODUCTS } from "./products";

export type Sku = keyof typeof PRODUCTS;

// cart allows any string, we filter to valid SKUs when we read/use it
type Cart = Record<string, number>;

const KEY = "cart_v1";

function read(): Cart {
  if (typeof window === "undefined") return {} as Cart;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {} as Cart;
    const obj = JSON.parse(raw) as Record<string, number>;
    const out: Cart = {};
    for (const [k, v] of Object.entries(obj)) {
      if (typeof v === "number" && v > 0) out[k] = Math.floor(v);
    }
    return out;
  } catch {
    return {} as Cart;
  }
}

function write(c: Cart) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(c));
  try { window.dispatchEvent(new Event("cart:updated")); } catch {}
}

/** Get the whole cart (raw; string keys) */
export function getCart(): Cart {
  return read();
}

/** Set an absolute quantity (0 removes the line). Accepts string SKU. */
export function setQty(sku: string, qty: number) {
  const c = read();
  if (!qty || qty <= 0) delete c[sku];
  else c[sku] = Math.floor(qty);
  write(c);
}

/** Increment/decrement a line (string SKU). */
export function addQty(sku: string, delta: number) {
  const c = read();
  const next = (c[sku] || 0) + delta;
  setQty(sku, next);
}

/** Remove everything */
export function clearCart() {
  write({} as Cart);
}

/** Lines filtered to valid SKUs present in PRODUCTS */
export function lines() {
  const c = read();
  return Object.keys(c)
    .filter((k) => Object.prototype.hasOwnProperty.call(PRODUCTS, k))
    .map((k) => ({ sku: k as Sku, qty: c[k]! }));
}

/** Sum total in cents (AUD) using only valid SKUs with numeric unit_amount */
export function totalCents(): number {
  return lines().reduce((sum, ln) => {
    const p: any = PRODUCTS[ln.sku];
    if (p && typeof p.unit_amount === "number") {
      return sum + p.unit_amount * ln.qty;
    }
    return sum;
  }, 0);
}
