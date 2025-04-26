import React from "react";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        padding: "6px 0", // Reduced the padding to make the header smaller
        boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
        borderBottom: "1px solid #f0f0f0",
        flexWrap: "wrap",
        height: "60px", // Set a fixed height for the header
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
            style={{ height: 36 }} // Slightly reduced logo size
          />
          <span
            style={{
              fontWeight: 600,
              fontSize: 9, // Reduced font size
              color: "#d2874f",
              letterSpacing: 1,
            }}
          >
            Online
          </span>
        </div>
        <span
          style={{
            fontSize: 18, // Reduced font size
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
          flexDirection: "column", // Stacking the login button and text vertically
          alignItems: "flex-end", // Align everything to the right
        }}
      >
        <button
          style={{
            background: "#f9f6f2",
            color: "#92634d",
            fontWeight: 500,
            border: "1px solid #dbc9b8",
            padding: "6px 18px", // Reduced padding for a smaller button
            borderRadius: 5,
            fontSize: 14, // Reduced font size
            cursor: "pointer",
            boxShadow: "0 2px 9px -7px #444",
            marginBottom: 6, // Reduced margin for closer alignment
          }}
        >
          Log in
        </button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontWeight: 700, // Added heavier weight for emphasis
              fontSize: 22, // Reduced font size for "10,000+" part
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
              fontSize: 14, // Reduced font size
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
