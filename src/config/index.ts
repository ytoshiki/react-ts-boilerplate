export const API_URL = (import.meta.env.API_URL as string) ?? ''
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string
export const SUPABASE_ANON_KEY = import.meta.env
  .VITE_SUPABASE_ANON_KEY as string
export const PRODUCTION = import.meta.env.PROD
export const APP_TITLE = import.meta.env.VITE_APP_TITLE as string
export const MODE = import.meta.env.MODE
export const ENV = PRODUCTION ? 'production' : 'development'
