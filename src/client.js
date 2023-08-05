import { createClient } from "@supabase/supabase-js";

const URL = "https://llvzbgupgldmmcyvppsv.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsdnpiZ3VwZ2xkbW1jeXZwcHN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1NDU3NTYsImV4cCI6MjAwNTEyMTc1Nn0.5GJG8VKBFF8MEQNXE0rhqV_fFzO2WKqcPYL_UZirYmc";

export const supabase = createClient(URL, API_KEY);
