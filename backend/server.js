import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PrepAI backend running (Groq)");
});

app.post("/api/ask", async (req, res) => {
  try {
    const { question, branch, semester, subjectCode } = req.body || {};

    if (!question || !question.trim()) {
      return res.status(400).json({ error: "Question is required" });
    }

    if (!GROQ_API_KEY) {
      return res.status(500).json({ error: "GROQ_API_KEY missing" });
    }

    const contextLine = `You are helping a VTU student (${branch || "CSE"}, semester ${
      semester || "5"
    }, subject ${subjectCode || "21CS52"}). Answer in line with VTU 2021 scheme, like a 10-mark exam answer.`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content:
                "You are a VTU exam assistant. Give structured, point-wise answers suitable for 10-mark questions.",
            },
            { role: "system", content: contextLine },
            { role: "user", content: question },
          ],
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("Groq error raw:", response.status, text);
      return res
        .status(500)
        .json({ error: "Groq error", status: response.status, text });
    }

    const data = await response.json();
    const answer =
      data.choices?.[0]?.message?.content || "No answer from model";
    res.json({ answer });
  } catch (err) {
    console.error("AI error:", err);
    res
      .status(500)
      .json({ error: "AI error", details: err.message ?? String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`PrepAI backend (Groq) listening on port ${PORT}`);
});
