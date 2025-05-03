import React from "react";

function PrivacyPolicy() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Privacy Policy</h1>
      <p>Effective Date: May 3, 2025</p>

      <p>
        Welcome to omegleonline.com. We are committed to protecting your privacy and ensuring a safe experience while using our platform.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>IP Address:</strong> Collected to prevent abuse and ensure safety.</li>
        <li><strong>Chat Logs:</strong> Not stored by default. However, reports of abuse may result in logs being temporarily saved for investigation.</li>
        <li><strong>Device Info:</strong> Browser type, OS, and general usage data may be collected for analytics.</li>
        <li><strong>Webcam & Microphone Access:</strong> Only used during live video chat sessions. Not recorded or stored.</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To operate and maintain the platform securely</li>
        <li>To analyze trends and improve user experience</li>
        <li>To detect, prevent, and respond to potential abuse or illegal activity</li>
      </ul>

      <h2>3. Cookies</h2>
      <p>
        We use cookies to maintain session data, remember preferences, and enable certain features. You can control cookie settings in your browser.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        We may use third-party services for analytics or content moderation. These parties are required to follow strict privacy standards.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We do not retain identifiable chat data unless reported for violation of terms. Any temporary logs are deleted after 30 days.
      </p>

      <h2>6. User Rights</h2>
      <p>
        You have the right to request data deletion or inquire about any data collected. Contact us at <a href="mailto:support@omegleonline.com">support@omegleonline.com</a>.
      </p>

      <h2>7. Policy Updates</h2>
      <p>
        We may revise this Privacy Policy from time to time. We encourage you to review it regularly.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
