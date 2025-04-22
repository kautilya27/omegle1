import React from 'react';

function FeatureTile({ title, desc, iconUrl }) {
  return (
    <article style={{
      background: '#fff',
      borderRadius: 14,
      padding: '22px 13px 19px',
      minWidth: 220,
      maxWidth: 325,
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
      textAlign:'center',
      margin: '0 8px'
    }}>
      <div style={{height:48,marginBottom:10}}>{iconUrl && <img src={iconUrl} alt={title+" icon"} style={{height:42}} />}</div>
      <h2 style={{fontWeight:700,fontSize:19,marginBottom:6}}>{title}</h2>
      <span style={{color:'#464b5a',fontSize:15}}>{desc}</span>
    </article>
  );
}

function FeaturesSection() {
  return (
    <section style={{
      display:'flex',justifyContent:'center',alignItems:'stretch',gap:'18px',margin:'36px auto 34px',maxWidth:1010
    }}>
      <FeatureTile
        iconUrl="https://ext.same-assets.com/2180202029/2457888870.png"
        title="Secured Environment"
        desc="Experience a meticulously designed environment where your security is our top priority. We use advanced screening measures to ensure smooth, worry-free interactions, giving you peace of mind as you connect."
      />
      <FeatureTile
        iconUrl="https://ext.same-assets.com/2180202029/3444975469.png"
        title="Fast Connections"
        desc="Jump into exciting conversations with our ultra-efficient matching system. Designed to minimize wait times and enhance your chat experience, our system is known for its speed and ease, setting us apart from other platforms."
      />
      <FeatureTile
        iconUrl="https://ext.same-assets.com/2180202029/837165702.png"
        title="Global Reach"
        desc="Connect with a diverse, international community on our platform. Embrace a global perspective as you interact with users from around the world, expanding your network and enriching your experience beyond borders."
      />
    </section>
  );
}

export default FeaturesSection;
