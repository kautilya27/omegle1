import React from "react";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        padding: "10px 0",
        boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
        borderBottom: "1px solid #f0f0f0",
        flexWrap: "wrap"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginLeft: 20,
          flexWrap: "wrap"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src="https://ext.same-assets.com/2180202029/3907936530.png"
            alt="Omegle Online Logo"
            style={{ height: 42 }} // Increased logo size
          />
          <span style={{ fontWeight: 600, fontSize: 10, color: "#d2874f", letterSpacing: 1 }}>
            Online
          </span>
        </div>
        <span
          style={{
            fontSize: 16,
            color: "#464b5a",
            fontWeight: 700,
            transform: "rotate(-10deg)",
            display: "inline-block",
            lineHeight: 1.2,
            maxWidth: 150
          }}
        >
          Talk to strangers!
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: 20,
          marginTop: 8,
          flexWrap: "wrap"
        }}
      >
        <span style={{ color: "#68a8f5", fontWeight: 500, fontSize: 16, marginRight: 18 }}>
          69071 Online Now
        </span>
        <button
          style={{
            background: "#f9f6f2",
            color: "#92634d",
            fontWeight: 500,
            border: "1px solid #dbc9b8",
            padding: "7px 20px",
            borderRadius: 5,
            fontSize: 15,
            cursor: "pointer",
            boxShadow: "0 2px 9px -7px #444",
          }}
        >
          Log in
        </button>
      </div>
    </header>
  );
}

export default Header;
