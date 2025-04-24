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
        You don't need an app to use Omegle Online on your phone or tablet! The web site works great on mobile.
      </div>
      <div style={{ color: "#464b5a", textAlign: "left", marginBottom: 18 }}>
      Omegle (oh-meg-ull) is a great way to meet new friends. When you use Omegle, we pick someone else at random and let you talk one-on-one. To help you stay safe, chats are anonymous unless you tell someone who you are (not suggested!), and you can stop a chat at any time. Predators have been known to use Omegle, so please be careful.
      </div>

      </div> 
      If you prefer, you can add your interests, and Omegle will look for someone who's into some of the same things as you instead of someone completely random.
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
      </div>
      <footer style={{ color: '#aaa', fontSize: 14, textAlign: 'center', marginTop: 14 }}>
        © 2025 Omegle Online · <a href="#" style={{ color: '#aaa' }}>Terms of Service</a> · <a href="#" style={{ color: '#aaa' }}>Privacy Policy</a> · <a href="#" style={{ color: '#aaa' }}>Community Guidelines</a>
      </footer>
    </section>
  );
}

export default MainCard;
