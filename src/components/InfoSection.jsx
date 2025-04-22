import React from "react";

function InfoSection() {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto 32px auto', background: '#fff', borderRadius: 15, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)', padding: '30px 20px', textAlign:'center' }}>
      {/* Hero Illustration / Branding Art */}
      <div style={{ display:'flex', justifyContent:'center', alignItems: 'center', margin: '0 auto 24px', minHeight:110 }}>
        <img src="https://ext.same-assets.com/2180202029/3907936530.png" alt="Omegle word art" style={{ height:56 }} />
      </div>
      <h1 style={{ fontSize: 26, fontWeight: "700", marginBottom: 10 }}>Omegle Video Chat With Strangers</h1>
      <h2 style={{ fontSize: 18, color: '#222', fontWeight: 600, margin:0 }}>Omegle: Talk to Strangers!</h2>
      <p style={{ fontSize: 15, color:'#464b5a', margin:'17px 0', textAlign:'left', maxWidth: 650, marginLeft:'auto', marginRight:'auto' }}>
        Concluding a remarkable 14-year journey marked by the compelling motto <span style={{ color: '#68a8f5'}}>Talk to strangers!</span>, the widely embraced video chat platform, Omegle, gracefully ends its chapter, as formally announced by its visionary founder.<br/><br/>
        As Omegle bows out, a new era inspired by its essence confidently takes center stage. This evolution isn't just a successor; it's a deliberate progression. Addressing past oversights, this new approach places a paramount focus on fortified content moderation, ensuring a secure haven for spontaneous video chat adventures. Brace yourself for an upgraded experience that not only matches but surpasses its predecessor, offering lightning-fast connections and unrivaled security.
      </p>
      <h3 style={{fontSize:19, fontWeight:600, marginTop:24}}>Meet Strangers Now</h3>
      <div style={{width:'100%', textAlign:'center', fontSize:15, color:'#68a8f5', paddingTop:8}}>
        Welcome to Omegle, the latest addition to the world of video chat! Jump in, chat, and meet friends right now.
      </div>
    </section>
  );
}

export default InfoSection;
