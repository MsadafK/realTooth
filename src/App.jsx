import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BookingModal from './components/layout/BookingModal';
import Hero from './components/sections/Hero';
import TrustStrip from './components/sections/TrustStrip';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import About from './components/sections/About';
import Treatments from './components/sections/Treatments';
import Locations from './components/sections/Locations';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import CTABanner from './components/sections/CTABanner';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setModalOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const openBook = () => setModalOpen(true);

  return (
    <>
      <Navbar onBook={openBook} />
      <main>
        <Hero onBook={openBook} />
        <TrustStrip />
        <Services />
        <Process />
        <About />
        <Treatments />
        <Locations />
        <Testimonials />
        <FAQ />
        <CTABanner onBook={openBook} />
      </main>
      <Footer />
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
