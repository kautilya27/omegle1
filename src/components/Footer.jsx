import React from "react";

function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: '#f3f0ec',
      color: '#888',
      textAlign: 'center',
      fontSize: 15,
      padding: '18px 0 16px 0',
      marginTop: 28,
      borderTop: '1px solid #e8e1da',
    }}>
      © 2025 Omegle.fun &nbsp;
      <a href="#" style={{color:'#92634d',marginLeft:4,marginRight:4}}>Terms of Service</a>·
      <a href="#" style={{color:'#92634d',marginLeft:4,marginRight:4}}>Privacy Policy</a>·
      <a href="#" style={{color:'#92634d',marginLeft:4,marginRight:4}}>Community Guidelines</a>
    </footer>
  );
}

export default Footer;
