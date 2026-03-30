import "server-only";

import { createClient } from "@supabase/supabase-js";

import { getServerEnv, publicEnv } from "@/lib/env";

const supabaseClientOptions = {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
};

function getSupabasePublicConfig() {
  const { NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL } = publicEnv;

  if (!NEXT_PUBLIC_SUPABASE_URL || !NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required before using Supabase.",
    );
  }

  return {
    anonKey: NEXT_PUBLIC_SUPABASE_ANON_KEY,
    url: NEXT_PUBLIC_SUPABASE_URL,
  };
}

export function createSupabaseServerClient() {
  const { anonKey, url } = getSupabasePublicConfig();

  return createClient(url, anonKey, supabaseClientOptions);
}

export function createSupabaseAdminClient() {
  const { url } = getSupabasePublicConfig();
  const { SUPABASE_SERVICE_ROLE_KEY } = getServerEnv();

  if (!SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is required before using the admin Supabase client.",
    );
  }

  return createClient(url, SUPABASE_SERVICE_ROLE_KEY, supabaseClientOptions);
}
