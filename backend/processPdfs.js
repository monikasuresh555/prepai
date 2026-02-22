import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import pdfParse from "pdf-parse";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function getEmbedding(text) {
  const res = await fetch("https://openrouter.ai/api/v1/embeddings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/text-embedding-3-small",
      input: text,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    console.error("Embedding error:", data);
    throw new Error(data.error?.message || "Embedding error");
  }
  return data.data[0].embedding;
}

function chunkText(text, chunkSize = 800, overlap = 200) {
  const words = text.split(/\s+/);
  const chunks = [];
  let i = 0;
  while (i < words.length) {
    const chunk = words.slice(i, i + chunkSize).join(" ");
    chunks.push(chunk);
    i += chunkSize - overlap;
  }
  return chunks;
}

async function processOneFile(fileRow) {
  console.log("Processing file:", fileRow.file_name);

  const { data: fileData, error: downloadError } = await supabase.storage
    .from("user-files")
    .download(fileRow.storage_path);

  if (downloadError) {
    console.error("Download error:", downloadError.message);
    return;
  }

  const buffer = Buffer.from(await fileData.arrayBuffer());
  const pdfData = await pdfParse(buffer);
  const text = pdfData.text;

  if (!text || !text.trim()) {
    console.log("No text in PDF, skipping");
    return;
  }

  const chunks = chunkText(text);
  console.log(`Got ${chunks.length} chunks`);

  for (let index = 0; index < chunks.length; index++) {
    const chunk = chunks[index];
    if (!chunk.trim()) continue;

    try {
      const embedding = await getEmbedding(chunk);

      const { error: insertError } = await supabase
        .from("file_chunks")
        .insert({
          user_id: fileRow.user_id,
          file_id: fileRow.id,
          chunk_index: index,
          content: chunk,
          embedding,
        });

      if (insertError) {
        console.error("Insert error:", insertError.message);
      } else {
        console.log(`Inserted chunk ${index}`);
      }
    } catch (err) {
      console.error("Error embedding chunk:", err.message);
      break;
    }
  }
}

async function main() {
  const { data: files, error } = await supabase
    .from("user_files")
    .select("id, user_id, file_name, storage_path");

  if (error) {
    console.error("Error fetching user_files:", error.message);
    return;
  }

  for (const file of files) {
    await processOneFile(file);
  }

  console.log("Done processing all PDFs");
}

main().catch(err => console.error(err));
