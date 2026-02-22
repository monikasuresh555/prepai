import React, { useState } from "react";

export default function UploadPdf() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  async function handleUpload(e) {
    e.preventDefault();
    if (!file) return;

    // DEMO: just pretend success
    setStatus("Upload successful (demo mode, storage disabled for now)");
    setFile(null);
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Upload PDF</h3>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button type="submit" disabled={!file}>
          Upload
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
