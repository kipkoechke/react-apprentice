import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://feupzfoeulkrimngctol.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZldXB6Zm9ldWxrcmltbmdjdG9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MTc5NTgsImV4cCI6MjA1NTk5Mzk1OH0.APAqNiK2XIj1O6xE6FAAQpZ8lpenidNvLRReKs-z5uM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
