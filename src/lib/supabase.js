import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// ─── Episodes ────────────────────────────────────────────────
export async function getEpisodes() {
  const { data, error } = await supabase
    .from('episodes')
    .select('*')
    .order('temporada', { ascending: true })
    .order('numero', { ascending: true })
  if (error) console.error('Supabase getEpisodes:', error)
  return data ?? []
}

// ─── Newsletter ───────────────────────────────────────────────
export async function subscribeNewsletter(email, idioma = 'pt') {
  const { error } = await supabase
    .from('subscribers')
    .insert({ email, idioma })
  if (error) {
    if (error.code === '23505') return { ok: false, duplicate: true }
    return { ok: false, error }
  }
  return { ok: true }
}
