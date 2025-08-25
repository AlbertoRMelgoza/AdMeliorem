import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Neon requires SSL
});

export async function db<T = any>(text: string, params?: any[]) {
  const res = await pool.query<T>(text, params);
  return res;
}
