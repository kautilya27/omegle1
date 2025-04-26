import React from 'react';

function FeatureTile({ title, desc, iconUrl }) {
  return (
    <article style={{
      background: '#fff',
      borderRadius: '50%', // This makes the box circular
      padding: '22px', // Adjusted padding to create a circular layout
      minWidth: 220,
      maxWidth: 220, // Adjusted to ensure the box is round
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
      textAlign: 'center',
      margin: '0 8px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center content vertically
      alignItems: 'center', // Center content horizontally
      position: 'relative',
    }}>
      {/* Icon section */}
      <div style={{ height: 48, marginBottom: 6 }}>
        {iconUrl && <img src={iconUrl} alt={title + " icon"} style={{ height: 42, width: 42, display: 'block', margin: 0, borderRadius: '50%' }} />}
      </div>

      {/* Title with no margin or padding above */}
      <h2 style={{
        color: '#000',
        fontWeight: 700,
        fontSize: 22,
        marginTop: 0,
        marginBottom: '6px',
        paddingTop: 0,
        lineHeight: '1',
        textAlign: 'center', // Ensure title is centered
      }}>
        {title}
      </h2>

      {/* Description */}
      <span style={{
        color: '#464b5a',
        fontSize: 15,
        textAlign: 'center', // Center description text
        marginTop: 10,
      }}>
        {desc}
      </span>
    </article>
  );
}

function FeaturesSection() {
  return (
    <section style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',
      gap: '18px',
      margin: '36px auto 34px',
      maxWidth: 1010,
    }}>
      {/* Feature 1 */}
      <FeatureTile
        title="Secured Environment"
        desc="Your safety is paramount. At Omegle Online, we provide a secure platform with advanced screening processes. Chat with peace of mind, knowing we've taken measures to ensure a smooth and worry-free experience."
      />
      
      {/* Feature 2 */}
      <FeatureTile
        title="Fast Connections"
        desc="Dive straight into exciting conversations! Our ultra-efficient matching system minimizes wait times and maximizes your chat experience. Discover why our speed and ease of use set us apart as the leading Omegle alternative."
      />
      
      {/* Feature 3 */}
      <FeatureTile
        title="Global Reach"
        desc="Connect with a diverse international community. Expand your horizons as you interact with users from around the world, enriching your social experience on Omegle Online. Enjoy engaging in online chat random and stranger video call online."
      />
    </section>
  );
}

export default FeaturesSection;
