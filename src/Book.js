import React from "react";

function Book({ image, title, description, characters, onButtonClick }) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "400px",
        margin: "16px auto",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "8px",
        }}
      />
      <h2 style={{ color: "#333", margin: "16px 0 8px" }}>{title}</h2>
      <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
        {description}
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", color: "#444" }}>
        {characters.map((character, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {character}
          </li>
        ))}
      </ul>
      <button
        onClick={() => onButtonClick(title, characters)}
        style={{
          marginTop: "16px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Show Details
      </button>
    </div>
  );
}

export default Book;
