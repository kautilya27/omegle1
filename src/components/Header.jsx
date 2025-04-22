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
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: 20 }}>
        <img
          src="https://ext.same-assets.com/2180202029/3907936530.png"
          alt="Omegle Logo"
          style={{ height: 32 }}
        />
        <span style={{ fontWeight: 600, fontSize: 20, color: "#d2874f", letterSpacing: 1 }}>
          Omegle
        </span>
        <span style={{ marginLeft: 10, fontSize: 17, color: "#464b5a", fontWeight: 400 }}>
          Talk to strangers!
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginRight: 20 }}>
        <span style={{ color: "#68a8f5", fontWeight: 500, fontSize: 16, marginRight: 18 }}>
          36341 Online Now
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
