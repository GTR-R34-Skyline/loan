import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Demo from './components/Demo';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-stone-50 to-neutral-100">
      <Hero />
      <About />
      <Features />
      <UseCases />
      <Demo />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
