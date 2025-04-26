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
        flexWrap: "wrap",
        maxHeight: "80px", // Set max height to prevent the header from becoming too big
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginLeft: 20,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
            }}
          >
            Online
          </span>
        </div>
        <span
          style={{
            fontSize: 20,
            color: "#464b5a",
            fontWeight: 700,
            transform: "rotate(-5deg)",
            display: "inline-block",
            lineHeight: 1.2,
            marginTop: 6,
            marginLeft: 20,
            whiteSpace: "nowrap", // forces it to stay in one line
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
          flexDirection: "column", // Stacks the button above the text
          alignItems: "flex-end", // Align everything to the right
        }}
      >
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
            marginBottom: 8, // Spacing between button and text
          }}
        >
          Log in
        </button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontWeight: 700, // Heavier weight for emphasis
              fontSize: 26, // Increased font size for "10,000+" part
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
        </div>
      </div>
    </header>
  );
}

export default Header;
