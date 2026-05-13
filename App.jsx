import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './components/Hero';
import Couple from './components/Couple';
import Details from './components/Details';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import Family from './components/Family';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import FloatingMusic from './components/FloatingMusic';
import Particles from './components/Particles';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-ivory text-gray-800 font-body selection:bg-champagne selection:text-gray-900">
      <ScrollProgress />
      <Navigation />
      <Particles />
      <div id="hero"><Hero /></div>
      <div id="couple"><Couple /></div>
      <div id="details"><Details /></div>
      <Countdown />
      <div id="timeline"><Timeline /></div>
      <Family />
      <Venue />
      <div id="gallery"><Gallery /></div>
      <div id="rsvp"><RSVP /></div>
      <Footer />
      <FloatingMusic />
    </div>
  );
}

export default App;
