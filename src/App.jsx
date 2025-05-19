import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import MainCard from './components/MainCard';
import InfoSection from './components/InfoSection';
import FeaturesSection from './components/FeaturesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import CommunityGuidelines from './components/CommunityGuidelines';

function Layout() {
  const location = useLocation();
  const isSpecialPage = [
    '/terms-of-service',
    '/privacy-policy',
    '/community-guidelines',
  ].includes(location.pathname);

  return (
    <div style={{ backgroundColor: '#f9f6f2', minHeight: '100vh' }}>
      {!isSpecialPage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <MainCard />
              <InfoSection />
              <FeaturesSection />
              <FaqSection />
            </>
          } />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        </Routes>
      </main>
      {!isSpecialPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
