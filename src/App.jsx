import Header from './components/Header';
import MainCard from './components/MainCard';
import InfoSection from './components/InfoSection';
import FeaturesSection from './components/FeaturesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#f9f6f2', minHeight: '100vh' }}>
        <Header />
        <main>
          <Routes>
            {/* Main page */}
            <Route
              path="/"
              element={
                <>
                  <MainCard />
                  <InfoSection />
                  <FeaturesSection />
                  <FaqSection />
                </>
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
