import { createClient } from '@supabase/supabase-js';

// Load environment variables for Supabase
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

// Validate environment variables
if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in environment variables!');
  console.error('Please make sure SUPABASE_URL and SUPABASE_ANON_KEY are set in .env file');
}

// Create Supabase client with additional options
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  },
  db: {
    schema: 'public'
  }
});

// Export function to check connection
export async function checkSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('agents').select('count(*)');
    if (error) throw error;
    console.log('Successfully connected to Supabase!');
    return true;
  } catch (err) {
    console.error('Failed to connect to Supabase:', err);
    return false;
  }
}
