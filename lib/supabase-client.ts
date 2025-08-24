// lib/supabase-client.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/** Create lazily so build doesn't crash if envs aren't present at build time. */
export function getSupabaseClient(): SupabaseClient {
  const url  = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anon) {
    console.warn("Supabase env vars not set at build; using placeholder. They must be set at runtime.");
    // harmless placeholder for build-time. Real envs are injected at runtime.
    return createClient("https://example.supabase.co", "ey.fake.token");
  }

  return createClient(url, anon, {
    auth: { persistSession: false },
    db: { schema: "public" },
  });
}

/** Backwards-compatible named export for existing imports */
export const supabase = getSupabaseClient();
