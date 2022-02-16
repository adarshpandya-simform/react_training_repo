import { createClient } from "@supabase/supabase-js";

// accessing supabase url and key through env vars
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

// configured and exported supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
