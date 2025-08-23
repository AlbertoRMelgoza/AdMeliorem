import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// If envs are missing at build time, export null and let callers fall back to mock.
export const supabase: SupabaseClient | null = url && anon ? createClient(url, anon) : null;
