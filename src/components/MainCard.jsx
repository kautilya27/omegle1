import React from "react";

function MainCard() {
  return (
    <section
      style={{
        maxWidth: 700,
        margin: "32px auto 24px auto",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.06)",
        padding: "32px 30px 20px 30px",
        fontSize: 16,
        color: "#000", // All text color is set to black
      }}
    >
      {/* Text shifted above the image */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 14,
          color: "#000", // Black color for text
          fontWeight: 700, // Bold text
          fontSize: "14px", // Reduced font size to fit in one line
          whiteSpace: "nowrap", // Ensures the text stays in one line
          overflow: "hidden", // Prevents text overflow
          textOverflow: "ellipsis", // Adds ellipsis if text overflows
        }}
      >
        You don't need an app to use Omegle Online on your phone or tablet! The website works great on mobile.
      </div>

      {/* Image */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <img
          src="/people%20video%20calling.webp"
          alt="People Video Calling"
          style={{ maxWidth: "100%", height: "200px", borderRadius: 8 }}
        />
      </div>

      {/* Main content */}
      <div style={{ color: "#000", textAlign: "left", marginBottom: 18 }}>
        Omegle (oh-meg-ull) Online is a great way to meet new friends. When you use Omegle Online, we pick someone else at random and let you talk one-on-one. To help you stay safe, chats are anonymous unless you tell someone who you are (not suggested!), and you can stop a chat at any time. Predators have been known to use Omegle Online, so please be careful.
      </div>

      {/* New line */}
      <div style={{ color: "#000", textAlign: "center", marginTop: 18, fontSize: "12px" }}>
        By using Omegle Online, you accept the terms at the bottom. You must be 18+ to use this website.
      </div>

      {/* Warning box */}
      <div
        style={{
          backgroundColor: '#d9ebff',
          borderRadius: 8,
          padding: '10px 16px',
          fontSize: 16,
          color: '#222',
          marginBottom: 20,
          textAlign: 'center',
          boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <strong>Video is monitored. Keep it clean <span style={{ color: 'orange' }}>❗</span></strong>
      </div>

      {/* Text above buttons */}
      <div style={{ textAlign: "center", marginTop: 10, fontSize: "18px", fontWeight: 600 }}>
        Start chatting:
      </div>

      {/* Buttons with "or" text in between */}
      <div style={{ textAlign: "center", marginTop: 14 }}>
        <button
          style={{
            background: "linear-gradient(90deg, #68a8f5 80%, #94b0d5 100%)",
            color: "#fff",
            fontSize: 19,
            fontWeight: 700,
            border: 0,
            borderRadius: 6,
            padding: "11px 55px",
            boxShadow: "0 8px 24px #cdf1ff50",
            cursor: "pointer",
            marginRight: "15px",
          }}
        >
          Video
        </button>
        <span
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#000",
            marginTop: "10px",
            verticalAlign: "middle",
          }}
        >
          or
        </span>
        <button
          style={{
            background: "linear-gradient(90deg, #68a8f5 80%, #94b0d5 100%)",
            color: "#fff",
            fontSize: 19,
            fontWeight: 700,
            border: 0,
            borderRadius: 6,
            padding: "11px 55px",
            boxShadow: "0 8px 24px #cdf1ff50",
            cursor: "pointer",
            marginLeft: "15px",
          }}
        >
          Text
        </button>
      </div>

      {/* Footer */}
      <footer
        style={{
          color: "#aaa",
          fontSize: 14,
          textAlign: "center",
          marginTop: 14,
        }}
      >
        © 2025 Omegle Online ·{" "}
        <a href="#" style={{ color: "#aaa" }}>
          Terms of Service
        </a>{" "}
        ·{" "}
        <a href="#" style={{ color: "#aaa" }}>
          Privacy Policy
        </a>{" "}
        ·{" "}
        <a href="#" style={{ color: "#aaa" }}>
          Community Guidelines
        </a>
      </footer>
    </section>
  );
}

export default MainCard;
