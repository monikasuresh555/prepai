// backend/testSupabase.js
import { supabase } from './supabaseClient.js';

async function main() {
  console.log('Testing Supabase connection...');

  const { data, error } = await supabase.from('documents').select('*').limit(1);

  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Success! Got data:', data);
  }
}

main();
