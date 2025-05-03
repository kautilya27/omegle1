import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import MainCard from './components/MainCard';
import InfoSection from './components/InfoSection';
import FeaturesSection from './components/FeaturesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';

// Layout component to handle conditional rendering based on route
function Layout() {
  const location = useLocation();
  const isTermsPage = location.pathname === '/terms-of-service';

  return (
    <div style={{ backgroundColor: '#f9f6f2', minHeight: '100vh' }}>
      {!isTermsPage && <Header />}
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
        </Routes>
      </main>
      {!isTermsPage && <Footer />}
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
