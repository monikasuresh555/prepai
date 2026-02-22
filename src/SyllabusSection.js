import React from "react";

const data = {
  CSE: {
    "1": [
      {
        code: "21MAT11",
        name: "Calculus and Linear Algebra",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21MAT11-syllabus.pdf",
        notesUrl: "https://example.com/21MAT11-notes.pdf",
        pyqUrl: "https://example.com/21MAT11-pyqs.pdf",
      },
      {
        code: "21PHY12",
        name: "Engineering Physics",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21PHY12-syllabus.pdf",
        notesUrl: "https://example.com/21PHY12-notes.pdf",
        pyqUrl: "https://example.com/21PHY12-pyqs.pdf",
      },
      {
        code: "21ELE13",
        name: "Basic Electrical Engineering",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21ELE13-syllabus.pdf",
        notesUrl: "https://example.com/21ELE13-notes.pdf",
        pyqUrl: "https://example.com/21ELE13-pyqs.pdf",
      },
    ],
    "2": [
      {
        code: "21MAT21",
        name: "Advanced Calculus and Numerical Methods",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21MAT21-syllabus.pdf",
        notesUrl: "https://example.com/21MAT21-notes.pdf",
        pyqUrl: "https://example.com/21MAT21-pyqs.pdf",
      },
      {
        code: "21CHE22",
        name: "Engineering Chemistry",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CHE22-syllabus.pdf",
        notesUrl: "https://example.com/21CHE22-notes.pdf",
        pyqUrl: "https://example.com/21CHE22-pyqs.pdf",
      },
      {
        code: "21CPS23",
        name: "C Programming for Problem Solving",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CPS23-syllabus.pdf",
        notesUrl: "https://example.com/21CPS23-notes.pdf",
        pyqUrl: "https://example.com/21CPS23-pyqs.pdf",
      },
    ],
    "3": [
      {
        code: "21CS31",
        name: "Discrete Mathematics and Applications",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS31-syllabus.pdf",
        notesUrl: "https://example.com/21CS31-notes.pdf",
        pyqUrl: "https://example.com/21CS31-pyqs.pdf",
      },
      {
        code: "21CS32",
        name: "Digital Design and Computer Organization",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS32-syllabus.pdf",
        notesUrl: "https://example.com/21CS32-notes.pdf",
        pyqUrl: "https://example.com/21CS32-pyqs.pdf",
      },
      {
        code: "21CS33",
        name: "Data Structures and Applications",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS33-syllabus.pdf",
        notesUrl: "https://example.com/21CS33-notes.pdf",
        pyqUrl: "https://example.com/21CS33-pyqs.pdf",
      },
    ],
    "4": [
      {
        code: "21CS41",
        name: "Design and Analysis of Algorithms",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS41-syllabus.pdf",
        notesUrl: "https://example.com/21CS41-notes.pdf",
        pyqUrl: "https://example.com/21CS41-pyqs.pdf",
      },
      {
        code: "21CS42",
        name: "Operating Systems",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS42-syllabus.pdf",
        notesUrl: "https://example.com/21CS42-notes.pdf",
        pyqUrl: "https://example.com/21CS42-pyqs.pdf",
      },
      {
        code: "21CS43",
        name: "Microcontroller and Embedded Systems",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS43-syllabus.pdf",
        notesUrl: "https://example.com/21CS43-notes.pdf",
        pyqUrl: "https://example.com/21CS43-pyqs.pdf",
      },
    ],
    "5": [
      {
        code: "21CS51",
        name: "Automata Theory and Compiler Design (TOC)",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://www.vturesource.com/vtu-syllabus/CS/2021/5/21CS51",
        notesUrl:
          "https://pbowqzujvauvtwgvolox.supabase.co/storage/v1/object/sign/materials/TOC%20Notes%20(1).pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MDQwZTU1ZS00ZTA2LTQ3NjAtOTU0NC1jZGFlYmM1OTdjZTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYXRlcmlhbHMvVE9DIE5vdGVzICgxKS5wZGYiLCJpYXQiOjE3NjQ5NTY4NTYsImV4cCI6MzM0MTc1Njg1Nn0.zNg0CldeSRFXCBeFlQCx1-j6E1_NByBggRREjK5zzOU",
        pyqUrl: "https://example.com/21CS51-pyqs.pdf",
      },
      {
        code: "21CS52",
        name: "Computer Networks (CN)",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://www.vturesource.com/vtu-syllabus/CS/2021/5/21CS52",
        notesUrl:
          "https://pbowqzujvauvtwgvolox.supabase.co/storage/v1/object/sign/materials/CN_Complete_Notes.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MDQwZTU1ZS00ZTA2LTQ3NjAtOTU0NC1jZGFlYmM1OTdjZTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYXRlcmlhbHMvQ05fQ29tcGxldGVfTm90ZXMucGRmIiwiaWF0IjoxNzY0OTU2ODAzLCJleHAiOjMzNDE3NTY4MDN9.HogKOuxJgkdxUp7P7bkESoIV2qvBru0YGC6_yA7W8JA",
        pyqUrl: "https://example.com/21CS52-pyqs.pdf",
      },
      {
        code: "21CS53",
        name: "Software Engineering (SE)",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://www.vturesource.com/vtu-syllabus/CS/2021/5/21CS53",
        notesUrl:
          "https://pbowqzujvauvtwgvolox.supabase.co/storage/v1/object/sign/materials/SE-%20ALL%20modules%20notes%20.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MDQwZTU1ZS00ZTA2LTQ3NjAtOTU0NC1jZGFlYmM1OTdjZTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYXRlcmlhbHMvU0UtIEFMTCBtb2R1bGVzIG5vdGVzIC5wZGYiLCJpYXQiOjE3NjQ5NTY3NzAsImV4cCI6MzM0MTc1Njc3MH0.RGGybv9c67pUQoZLt-iKwUcMvrayJbRk2ldzUNL3S20",
        pyqUrl: "https://example.com/21CS53-pyqs.pdf",
      },
    ],
    "6": [
      {
        code: "21CS61",
        name: "Software Engineering & Project Management",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS61-syllabus.pdf",
        notesUrl: "https://example.com/21CS61-notes.pdf",
        pyqUrl: "https://example.com/21CS61-pyqs.pdf",
      },
      {
        code: "21CS62",
        name: "Web Technology",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS62-syllabus.pdf",
        notesUrl: "https://example.com/21CS62-notes.pdf",
        pyqUrl: "https://example.com/21CS62-pyqs.pdf",
      },
      {
        code: "21CS63",
        name: "Machine Learning",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS63-syllabus.pdf",
        notesUrl: "https://example.com/21CS63-notes.pdf",
        pyqUrl: "https://example.com/21CS63-pyqs.pdf",
      },
    ],
    "7": [
      {
        code: "21CS71",
        name: "Cloud Computing and Big Data",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS71-syllabus.pdf",
        notesUrl: "https://example.com/21CS71-notes.pdf",
        pyqUrl: "https://example.com/21CS71-pyqs.pdf",
      },
      {
        code: "21CS72",
        name: "Cyber Security",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS72-syllabus.pdf",
        notesUrl: "https://example.com/21CS72-notes.pdf",
        pyqUrl: "https://example.com/21CS72-pyqs.pdf",
      },
      {
        code: "21CS73",
        name: "Professional Elective – I",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS73-syllabus.pdf",
        notesUrl: "https://example.com/21CS73-notes.pdf",
        pyqUrl: "https://example.com/21CS73-pyqs.pdf",
      },
    ],
    "8": [
      {
        code: "21CS81",
        name: "Project Work",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS81-syllabus.pdf",
        notesUrl: "https://example.com/21CS81-notes.pdf",
        pyqUrl: "https://example.com/21CS81-pyqs.pdf",
      },
      {
        code: "21CS82",
        name: "Technical Seminar",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS82-syllabus.pdf",
        notesUrl: "https://example.com/21CS82-notes.pdf",
        pyqUrl: "https://example.com/21CS82-pyqs.pdf",
      },
      {
        code: "21CS83",
        name: "Internship / Professional Practice",
        type: "Syllabus + Notes + PYQs",
        syllabusUrl: "https://example.com/21CS83-syllabus.pdf",
        notesUrl: "https://example.com/21CS83-notes.pdf",
        pyqUrl: "https://example.com/21CS83-pyqs.pdf",
      },
    ],
  },
};

export default function SyllabusSection({ user }) {
  const subjects = data[user.branch]?.[user.semester] || [];

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>
        Syllabus & Materials – {user.branch}, Sem {user.semester}
      </h2>
      {subjects.length === 0 ? (
        <p>Content coming soon for this branch/semester.</p>
      ) : (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {subjects.map((subj) => (
            <div
              key={subj.code}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "0.75rem",
                width: "260px",
              }}
            >
              <h3>
                {subj.code} – {subj.name}
              </h3>
              <p>{subj.type}</p>
              <button onClick={() => window.open(subj.syllabusUrl, "_blank")}>
                View Syllabus
              </button>{" "}
              <button onClick={() => window.open(subj.notesUrl, "_blank")}>
                View Notes
              </button>{" "}
              <button onClick={() => window.open(subj.pyqUrl, "_blank")}>
                View PYQs
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
