import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainCard from './components/MainCard';
import InfoSection from './components/InfoSection';
import FeaturesSection from './components/FeaturesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#f9f6f2', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            {/* Main page */}
            <Route
              path="/"
              element={
                <div>
                  <MainCard />
                  <InfoSection />
                  <FeaturesSection />
                  <FaqSection />
                </div>
              }
            />

            {/* Terms of Service Page */}
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
