import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);

// Test connection
const testConnection = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error('Supabase connection error:', error);
    } else {
      console.log('Supabase connection successful');
    }
  } catch (err) {
    console.error('Failed to test Supabase connection:', err);
  }
};

testConnection(); 