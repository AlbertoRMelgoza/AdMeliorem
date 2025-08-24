// lib/supabase-client.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Create the client only when called (at runtime in the browser or server),
 * and never throw during module import. This avoids Vercel build crashes.
 */
export function getSupabaseClient(): SupabaseClient {
  const url  = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // If envs are missing during build, return a placeholder that will be
  // replaced at runtime in the browser (NEXT_PUBLIC_* gets inlined there).
  if (!url || !anon) {
    console.warn("Supabase env vars not set at build; will rely on runtime.");
    // Create a harmless dummy that won’t be used until runtime anyway.
    return createClient("https://example.supabase.co", "ey.fake.token");
  }

  return createClient(url, anon, {
    auth: { persistSession: false },
    db: { schema: "public" },
  });
}
