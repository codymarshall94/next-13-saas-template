import { createClient, SupabaseClient } from "@supabase/supabase-js";

declare const process: {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
  };
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;

// If the application has a lot of users, it is recommended to use the auth feature

// #1.Profiles Table
// Head to the Supabase dashboard and create a new table called profiles. You may use the sql editor to create the table or use the GUI.
