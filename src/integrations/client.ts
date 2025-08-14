import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// 这些值应该通过环境变量提供，这里仅作为模板示例
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);