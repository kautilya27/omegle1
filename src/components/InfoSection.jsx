import React from "react";

function InfoSection() {
  return (
    <section style={{
      maxWidth: 900,
      margin: '0 auto 32px auto',
      background: '#fff',
      borderRadius: 15,
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
      padding: '30px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: 26, fontWeight: "700", marginBottom: 10 }}>
        Omegle Video Chat With Strangers
      </h1>
      <h2 style={{ fontSize: 18, color: '#222', fontWeight: 600, margin: 0 }}>
        Omegle Online: Talk to Strangers!
      </h2>
      <p style={{
        fontSize: 15,
        color: '#464b5a',
        margin: '17px 0',
        textAlign: 'left',
        maxWidth: 650,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Concluding a remarkable 14-year journey marked by the compelling motto <span style={{ color: '#68a8f5' }}>Talk to strangers!</span>, the widely embraced video chat platform, Omegle, gracefully ends its chapter, as formally announced by its visionary founder.<br /><br />
        As Omegle bows out, a new era inspired by its essence confidently takes center stage. This evolution isn't just a successor; it's a deliberate progression. Addressing past oversights, this new approach places a paramount focus on fortified content moderation, ensuring a secure haven for spontaneous video chat adventures. Brace yourself for an upgraded experience that not only matches but surpasses its predecessor, offering lightning-fast connections and unrivaled security.
      </p>

      {/* NEW CONTENT STARTS HERE */}
      <h3 style={{ fontSize: 22, fontWeight: 700, margin: '30px 0 10px' }}>
        Connect with the World: Experience Random Video Chat on Omegle Online
      </h3>
      <p style={{
        fontSize: 15,
        color: '#464b5a',
        textAlign: 'left',
        maxWidth: 650,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
      }}>
        Looking for a fun and exciting way to meet new people? Omegle Online offers you a platform for live video call interactions with strangers from around the globe. Just like the original Omegle, we randomly pair you with someone for a one-on-one chat. Enjoy online chat random encounters and forge connections through spontaneous conversations.
      </p>
      <p style={{
        fontSize: 15,
        color: '#464b5a',
        textAlign: 'left',
        maxWidth: 650,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
      }}>
        If you're seeking an Omegle alternative, our platform provides a seamless experience for Omegle chat with strangers. Engage in random video call sessions and experience the thrill of meeting someone new. It’s simple: start a live video call online and talk to strangers instantly.
      </p>
      <p style={{
        fontSize: 15,
        color: '#464b5a',
        textAlign: 'left',
        maxWidth: 650,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Our platform is designed for those seeking a stranger video call online without the hassle of registration. Enjoy an online video call free of charge and discover new friends through Omegle online.
      </p>
      {/* NEW CONTENT ENDS HERE */}

      <h3 style={{ fontSize: 19, fontWeight: 600, marginTop: 32 }}>
        Meet Strangers Now
      </h3>
      <div style={{
        width: '100%',
        textAlign: 'center',
        fontSize: 15,
        color: '#68a8f5',
        paddingTop: 8
      }}>
        Welcome to Omegle Online, the latest addition to the world of video chat! Jump in, chat, and meet friends right now.
      </div>
    </section>
  );
}

export default InfoSection;
