import { createClient } from '@supabase/supabase-js'

// Ces variables vont chercher les clés dans ton .env.local (et plus tard sur Vercel)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)