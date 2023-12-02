import './App.css';
import { CallToAction } from './components/CallToAction';
import { Navbar } from './components/Navbar';
import { Features } from './components/Features';
import { Explore } from './components/Explore';
import Integration from './components/Integration/Integration.js'
import { Pricing } from './components/Pricing/index.js';
import { Testimonials } from './components/Testimonials/index.js';
import { MissOut } from './components/MissOut/MissOut.js';
import { Footer } from './components/Footer/index.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CallToAction />
      <Features />
      <Explore />
      <Integration />
      <Pricing />
      <Testimonials />
      <MissOut />
      <Footer />
    </div>
  );
}

export default App;
