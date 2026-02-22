import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [usn, setUsn] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("CSE");
  const [semester, setSemester] = useState("6");

  function handleSubmit(e) {
    e.preventDefault();
    if (!usn.trim() || !name.trim()) return;

    const user = { usn, name, branch, semester };
    onLogin(user);
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>PrepAI / VTU Smart Companion</h1>
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <label>USN</label>
          <br />
          <input
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
            placeholder="1RV22CS001"
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <label>Name</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Student Name"
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <label>Branch</label>
          <br />
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="CSE">CSE</option>
            <option value="ISE">ISE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
          </select>
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <label>Semester</label>
          <br />
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="1">1rd</option>
            <option value="2">2rd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
          </select>
        </div>
        <button type="submit">Enter Dashboard</button>
      </form>
    </div>
  );
}
