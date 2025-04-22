import Header from './components/Header';
import MainCard from './components/MainCard';
import InfoSection from './components/InfoSection';
import FeaturesSection from './components/FeaturesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
