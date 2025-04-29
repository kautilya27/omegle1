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
        color: "#000",
      }}
    >
      {/* Top Text */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 14,
          color: "#000",
          fontWeight: 700,
          fontSize: "14px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
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

      {/* Terms Notice */}
      <div style={{ color: "#000", textAlign: "center", marginTop: 18, fontSize: "12px" }}>
        By using Omegle Online, you accept the terms at the bottom. You must be 18+ to use this website.
      </div>

      {/* Warning */}
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

      {/* Under Construction */}
      <div
        style={{
          textAlign: "center",
          color: "red",
          fontSize: "22px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        This website is under construction and will be fully working by June.
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
