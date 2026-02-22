import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { createEmbedding } from "./embedding.js";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function generateEmbeddingsForNotes() {
  const { data, error } = await supabase
    .from("notes")                 // your table name
    .select("id, content")         // adjust column names
    .is("embedding", null);        // only ones without embeddings

  if (error) {
    console.error("Fetch error:", error);
    return;
  }

  for (const row of data) {
    const embedding = await createEmbedding(row.content);

    const { error: upsertError } = await supabase
      .from("notes")
      .update({ embedding })
      .eq("id", row.id);

    if (upsertError) {
      console.error("Update error for id", row.id, upsertError);
    } else {
      console.log("Updated embedding for id", row.id);
    }
  }
}

generateEmbeddingsForNotes().then(() => {
  console.log("Done");
});
