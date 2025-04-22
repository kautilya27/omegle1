import React, { useState } from 'react';

const faqs = [
  {
    q: "Is this platform appropriate for minors?",
    a: "This platform is designed for users who are 18 years and older. We value the safety and well-being of our users. It is strongly advised that minors should use age-appropriate platforms for online communications."
  },
  {
    q: "How does the platform maintain user safety?",
    a: "A 24/7 moderation system is dedicated to ensure user safety and create a secure environment for interactions."
  },
  {
    q: "Can I use Omegle on a global scale?",
    a: "Definitely, this platform allow users to make new friends around the world, experience different cultures and meet people from different walks of life."
  },
  {
    q: "How fast is the matching process on this platform?",
    a: "The matching process on this platform is fast and easy! User can match someone seamlessly with a stable internet connection."
  },
  {
    q: "Is Omegle free to use?",
    a: "Yes, users can use Omegle free of charge. Dive into random video chats, talk to strangers, and enjoy fun experience with cool people without any subscription fees!"
  }
];

function FaqSection() {
  const [open, setOpen] = useState(-1);
  return (
    <section style={{ maxWidth:700, margin: '0 auto 30px auto', background:'#fff', borderRadius:12, boxShadow:'0 2px 12px 0 rgba(0,0,0,0.06)', padding:'26px 18px' }}>
      <h2 style={{ fontSize:23, fontWeight:700, marginBottom:20, textAlign:'center' }}>FAQs</h2>
      {faqs.map((item, idx) => (
        <div key={item.q} style={{ marginBottom:10, borderBottom: '1px solid #eee' }}>
          <div onClick={() => setOpen(open === idx ? -1 : idx)} style={{ cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:17, padding:'10px 0', fontWeight:600, color:'#464b5a' }}>
            {item.q}
            <span>{open === idx ? '-' : '+'}</span>
          </div>
          {open === idx && (<div style={{ fontSize:15, color:'#222', margin:'2px 0 8px 4px', textAlign:'left' }}>{item.a}</div>)}
        </div>
      ))}
    </section>
  );
}

export default FaqSection;
