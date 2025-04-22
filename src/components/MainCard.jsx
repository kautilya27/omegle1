import React from "react";

function MainCard() {
  return (
    <section style={{
      maxWidth: 520,
      margin: "32px auto 24px auto",
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 2px 12px 0 rgba(0,0,0,0.06)",
      padding: "32px 30px 20px 30px",
      fontSize: 16,
      color: "#222"
    }}>
      <div style={{ textAlign: "center", marginBottom: 10, color: "#464b5a" }}>
        You don't need an app to use Omegle on your phone or tablet! The web site works great on mobile.
      </div>
      <h2 style={{ fontWeight: 700, fontSize: 21, margin: "12px 0 8px", textAlign: "center", color: "#222" }}>
        Meet strangers with your interests!
      </h2>
      <div style={{ color: "#464b5a", textAlign: "left", marginBottom: 18 }}>
        Omegle (oh<sup>`</sup>meg<sup>`</sup>ull) is a great way to meet new friends. When you use Omegle, you are paired randomly with another person to talk one-on-one. If you prefer, you can add your interests and you'll be randomly paired with someone who selected some of the same interests.  To help you stay safe, chats are anonymous unless you tell someone who you are (not recommended!), and you can stop a chat at any time. See our <a href="#" style={{ color: "#68a8f5", textDecoration: "underline" }}>Terms of Service</a> and <a href="#" style={{ color: "#68a8f5", textDecoration: "underline" }}>Community Guidelines</a>.
      </div>
      <div style={{ textAlign: "center", margin: "24px 0 12px" }}>
        <button style={{
          background: "linear-gradient(90deg, #68a8f5 80%, #94b0d5 100%)",
          color: "#fff",
          fontSize: 19,
          fontWeight: 700,
          border: 0,
          borderRadius: 6,
          padding: "11px 55px",
          boxShadow: "0 8px 24px #cdf1ff50",
          cursor: "pointer"
        }}>Video</button>
      </div>
      <div style={{ background: "#eaf3fc", padding: '10px 10px 8px 10px', borderRadius: 8, marginTop: 20, textAlign: "center", border: "1px solid #dde8f2" }}>
        <img src="https://ext.same-assets.com/2180202029/3907936530.png" alt="Omegle logo mini" style={{ height: 18, verticalAlign:'middle', marginRight:7 }} />
        <span style={{ color: "#68a8f5", fontWeight: 600 }}>Enjoy with Omegle Plus</span>
        <span style={{ color: "#464b5a", marginLeft: 8, fontSize: 14 }}>Select your preference to meet people you like</span>
        <img src="https://ext.same-assets.com/2180202029/1150549390.png" alt="Omegle Plus promo" style={{ height: 18, verticalAlign:'middle', marginLeft:7 }} />
      </div>
      <footer style={{ color: '#aaa', fontSize: 14, textAlign: 'center', marginTop: 14 }}>
        © 2024 Omegle.fun · <a href="#" style={{ color: '#aaa' }}>Terms of Service</a> · <a href="#" style={{ color: '#aaa' }}>Privacy Policy</a> · <a href="#" style={{ color: '#aaa' }}>Community Guidelines</a>
      </footer>
    </section>
  );
}

export default MainCard;
