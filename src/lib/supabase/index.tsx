import { createClient } from '@supabase/supabase-js'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/config'

// supabaseの初期化を行う
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
