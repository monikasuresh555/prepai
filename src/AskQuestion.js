import React, { useState } from "react";

const SUBJECT_OPTIONS = [
  { code: "21CS51", name: "TOC / ATCD" },
  { code: "21CS52", name: "Computer Networks" },
  { code: "21CS53", name: "Software Engineering" },
  // add more if you like
];

export default function AskQuestion({ user }) {
  const [question, setQuestion] = useState("");
  const [subjectCode, setSubjectCode] = useState("21CS52");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAsk(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const res = await fetch("http://localhost:5000/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          subjectCode,
          branch: user?.branch,
          semester: user?.semester,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Server error: ${res.status} - ${errText}`);
      }

      const data = await res.json();
      setAnswer(data.answer || "No answer returned");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Ask Syllabus Question</h2>

      <div style={{ marginBottom: "0.5rem" }}>
        <label>
          Subject:&nbsp;
          <select
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
          >
            {SUBJECT_OPTIONS.map((s) => (
              <option key={s.code} value={s.code}>
                {s.code} – {s.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <form onSubmit={handleAsk}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Explain congestion control in CN (10 marks)..."
          style={{ width: "60%" }}
        />
        <button type="submit" disabled={loading || !question.trim()}>
          {loading ? "Thinking..." : "Ask"}
        </button>
      </form>

      {error && <p style={{ color: "red", whiteSpace: "pre-wrap" }}>{error}</p>}

      {answer && (
        <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>
          <h3>Answer</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
