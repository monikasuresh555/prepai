import React, { useState } from "react";
import UploadPdf from "./UploadPdf";
import AskQuestion from "./AskQuestion";
import Login from "./Login";
import SyllabusSection from "./SyllabusSection";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>PrepAI / VTU Smart Companion</h1>
      <p>
        Logged in as {user.name} ({user.usn}) – {user.branch}, Sem{" "}
        {user.semester}
      </p>

      <SyllabusSection user={user} />

      <h2>Upload Area</h2>
      <UploadPdf />

      <AskQuestion user={user} />
    </div>
  );
}

export default App;
