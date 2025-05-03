import Header from './components/Header';
import MainCard from './components/MainCard';
import InfoSection from './components/InfoSection';
import FeaturesSection from './components/FeaturesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
//import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  const isTermsPage = location.pathname === '/terms-of-service';

  return (
    <div style={{ backgroundColor: '#f9f6f2', minHeight: '100vh' }}>
      {!isTermsPage && <Header />}
      <main>
        {!isTermsPage && (
          <>
            <MainCard />
            <InfoSection />
            <FeaturesSection />
            <FaqSection />
          </>
        )}
        <Routes>
          {/* Other routes */}
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      {!isTermsPage && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
