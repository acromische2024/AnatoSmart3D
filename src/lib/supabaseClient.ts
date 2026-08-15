import { createClient } from '@supabase/supabase-js';

let supabaseInstance: any = null;

export const getSupabase = () => {
  if (supabaseInstance) return supabaseInstance;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL atau Key belum terdeteksi oleh sistem. Pastikan nama kunci di Vercel sudah benar (NEXT_PUBLIC_SUPABASE_URL) lalu lakukan Redeploy.');
  }

  let finalUrl = supabaseUrl;
  if (!finalUrl.startsWith('http')) {
    finalUrl = 'https://ltyaaqkrxhvqknrrxzgm.supabase.co';
  }

  supabaseInstance = createClient(finalUrl, supabaseAnonKey);
  return supabaseInstance;
};
