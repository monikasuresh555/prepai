// backend/testSearch.js
import { supabase } from './supabaseClient.js';

async function testSearch() {
  console.log('Testing search function...');
  
  const { data, error } = await supabase.rpc('match_documents', {
    query_embedding: new Array(1536).fill(0),  // dummy embedding
    match_count: 3
  });

  if (error) {
    console.error('Search error:', error.message);
  } else {
    console.log('Search result:', data);
  }
}

testSearch();
