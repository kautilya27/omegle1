import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainCard from './components/MainCard';
import InfoSection from './components/InfoSection';
import FeaturesSection from './components/FeaturesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#f9f6f2', minHeight: '100vh' }}>
        <Header />
        <main>
          <Routes>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
