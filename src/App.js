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
    <div style={{ 
      padding: "1rem", 
      maxWidth: "1200px", 
      margin: "0 auto",
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh'
    }}>
      {/* RAINBOW HERO */}
      <div style={{ 
        textAlign: 'center', 
        padding: '3rem 1rem', 
        background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4, #FECA57)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
        color: 'white',
        borderRadius: '30px',
        marginBottom: '2rem',
        boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
      }}>
        <h1 style={{ 
          fontSize: '4rem', 
          margin: '0', 
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          🚀 PrepAI
        </h1>
        <h2 style={{ fontSize: '2rem', margin: '.5rem 0' }}>
          VTU CSE {user.semester}th Sem
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          marginTop: '1rem'
        }}>
          <span style={{ 
            background: 'rgba(255,255,255,0.3)', 
            padding: '0.8rem 1.5rem', 
            borderRadius: '50px',
            fontWeight: 'bold'
          }}>
            👋 {user.name}
          </span>
          <span style={{ 
            background: 'rgba(255,255,255,0.3)', 
            padding: '0.8rem 1.5rem', 
            borderRadius: '50px'
          }}>
            🆔 {user.usn}
          </span>
          <span style={{ 
            background: 'rgba(255,255,255,0.3)', 
            padding: '0.8rem 1.5rem', 
            borderRadius: '50px'
          }}>
            📚 {user.branch}
          </span>
        </div>
      </div>

      {/* COLORFUL CARDS */}
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '2rem', 
          borderRadius: '20px',
          color: 'white'
        }}>
          <h2>📚 Syllabus</h2>
          <SyllabusSection user={user} />
        </div>

        <div style={{ 
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          padding: '2rem', 
          borderRadius: '20px',
          color: 'white'
        }}>
          <h2>📤 Upload</h2>
          <UploadPdf />
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        padding: '2.5rem', 
        borderRadius: '25px',
        marginTop: '2rem',
        color: 'white',
        boxShadow: '0 20px 40px rgba(79,172,254,0.3)'
      }}>
        <AskQuestion user={user} />
      </div>
    </div>
  );
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(style);

export default App;
