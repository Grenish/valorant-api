import { supabase, checkSupabaseConnection } from '../src/lib/supabase';

async function main() {
  console.log('Checking Supabase connection...');
  console.log(`Using Supabase URL: ${process.env.SUPABASE_URL?.substring(0, 20)}...`);
  
  // Test the connection
  const isConnected = await checkSupabaseConnection();
  
  if (isConnected) {
    // Check if the agents table exists and its structure
    try {
      const { data, error } = await supabase
        .from('agents')
        .select('*')
        .limit(1);
      
      if (error) {
        console.error('Error querying agents table:', error);
        console.log('The table might not exist or have wrong structure');
      } else {
        console.log('Successfully queried the agents table');
        console.log('Table structure seems correct');
      }
    } catch (err) {
      console.error('Exception when querying agents table:', err);
    }
  } else {
    console.log('Failed to connect to Supabase. Please check your credentials.');
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
});
