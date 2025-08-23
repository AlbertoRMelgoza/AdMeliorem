import { supabase } from "./supabase-client";
import type { Aggregate } from "./types";

export async function getAggregate(instanceId: string) {
  if (!supabase) return null; // fallback to mock when envs not available

  try {
    const { data, error } = await supabase
      .from("survey_aggregates")
      .select("payload, computed_at")
      .eq("instance_id", instanceId)
      .single();

    if (error || !data) return null;

    const payload = data.payload as Aggregate;
    return { ...payload, computedAt: data.computed_at || payload.computedAt } as Aggregate;
  } catch {
    return null;
  }
}
