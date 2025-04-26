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
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #f0f0f0",
        flexWrap: "wrap",
      }}
    >
      {/* Logo and Online Text */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <img
            src="https://ext.same-assets.com/2180202029/3907936530.png"
            alt="Omegle Online Logo"
            style={{ height: 42 }}
          />
          <span
            style={{
              fontWeight: 600,
              fontSize: 10,
              color: "#d2874f",
              letterSpacing: 1,
              position: "relative",
              top: 13, // 👉 move "Online" slightly lower
            }}
          >
            Online
          </span>
        </div>

        {/* Talk to strangers! */}
        <span
          style={{
            fontSize: 20,
            color: "#464b5a",
            fontWeight: 700,
            transform: "rotate(-5deg)",
            display: "inline-block",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
            marginLeft: 30,
            marginTop: 6,
          }}
        >
          Talk to strangers!
        </span>
      </div>

      {/* Online Now and Log In */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: 20,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: 26,
            color: "#68a8f5",
            marginRight: 5,
          }}
        >
          10,000+
        </span>
        <span
          style={{
            color: "#68a8f5",
            fontWeight: 500,
            fontSize: 16,
          }}
        >
          online now
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
            marginLeft: 12,
          }}
        >
          Log in
        </button>
      </div>
    </header>
  );
}

export default Header;
