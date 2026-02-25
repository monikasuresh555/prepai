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
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 12s ease infinite',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Animated gradient style */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div style={{ 
        background: 'rgba(255,255,255,0.95)',
        padding: '3rem 2.5rem',
        borderRadius: '25px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(20px)',
        width: '100%',
        maxWidth: '450px',
        animation: 'float 6s ease-in-out infinite'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ 
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '3rem',
            margin: '0 0 0.5rem 0',
            fontWeight: 'bold'
          }}>
            🚀 PrepAI
          </h1>
          <h2 style={{ 
            color: '#64748b', 
            margin: 0, 
            fontSize: '1.5rem',
            fontWeight: '500'
          }}>
            VTU Smart Companion
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.75rem', 
              fontWeight: 'bold', 
              color: '#374151',
              fontSize: '1.1rem'
            }}>
              🆔 USN
            </label>
            <input
              type="text"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              placeholder="1RV22CS001"
              style={{
                width: '100%',
                padding: '1.2rem 1.5rem',
                border: '2px solid #e5e7eb',
                borderRadius: '15px',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#4F46E5';
                e.target.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.05)';
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.75rem', 
              fontWeight: 'bold', 
              color: '#374151',
              fontSize: '1.1rem'
            }}>
              👤 Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={{
                width: '100%',
                padding: '1.2rem 1.5rem',
                border: '2px solid #e5e7eb',
                borderRadius: '15px',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#10B981';
                e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.05)';
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.75rem', 
              fontWeight: 'bold', 
              color: '#374151',
              fontSize: '1.1rem'
            }}>
              🏛️ Branch
            </label>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              style={{
                width: '100%',
                padding: '1.2rem 1.5rem',
                border: '2px solid #e5e7eb',
                borderRadius: '15px',
                fontSize: '1.1rem',
                background: 'white',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#F59E0B';
                e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
              }}
            >
              <option value="CSE">CSE</option>
              <option value="ISE">ISE</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
            </select>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.75rem', 
              fontWeight: 'bold', 
              color: '#374151',
              fontSize: '1.1rem'
            }}>
              📚 Semester
            </label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              style={{
                width: '100%',
                padding: '1.2rem 1.5rem',
                border: '2px solid #e5e7eb',
                borderRadius: '15px',
                fontSize: '1.1rem',
                background: 'white',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#8B5CF6';
                e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
              }}
            >
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
            </select>
          </div>

          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '1.3rem',
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1)',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 15px 35px rgba(255,107,107,0.4)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 20px 45px rgba(255,107,107,0.5)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 15px 35px rgba(255,107,107,0.4)';
            }}
          >
            🚀 Enter Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
