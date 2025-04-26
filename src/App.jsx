import Header from './components/Header';
import MainCard from './components/MainCard';
import InfoSection from './components/InfoSection';
import FeaturesSection from './components/FeaturesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import TermsOfService from './pages/TermsOfService';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div style={{backgroundColor:'#f9f6f2', minHeight:'100vh'}}>
      <Header />
      <main>
        <MainCard />
        <InfoSection />
        <FeaturesSection />
        <FaqSection />
      </main>
      <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
      <Footer />
    </div>
  );
}

export default App;
