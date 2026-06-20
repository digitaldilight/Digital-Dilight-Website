import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Commitments } from './components/Commitments';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Audience } from './components/Audience';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // scroll reveal
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.15 });

      const targets = document.querySelectorAll('.reveal');
      targets.forEach((el) => obs.observe(el));

      const btnTargets = document.querySelectorAll('.btn-animate');
      btnTargets.forEach((el) => obs.observe(el));

      return () => {
        obs.disconnect();
      };
    } else {
      const targets = document.querySelectorAll('.reveal');
      targets.forEach((el) => el.classList.add('in-view'));

      const btnTargets = document.querySelectorAll('.btn-animate');
      btnTargets.forEach((el) => el.classList.add('in-view'));
    }
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Commitments />
      <Services />
      <Process />
      <Audience />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
