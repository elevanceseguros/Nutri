import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sooelbypnpuocoydpqcz.supabase.co';
const supabaseAnonKey = 'sb_publishable_EWWlln0YGGc_4EVdwOdoOg_zLhhYtkr';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
