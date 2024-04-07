import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";

const supabaseUrl = "https://mfatkioddvuuwrwplxgp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mYXRraW9kZHZ1dXdyd3BseGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MDg1MjAsImV4cCI6MjAyNzk4NDUyMH0.mytKQuWAhHkPTvuractPsvk0KORouTOffeH7YNOgguI";

const supabase = createClient<Database>(supabaseUrl, supabaseKey);
export default supabase;
