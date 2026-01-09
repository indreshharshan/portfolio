import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="bg-light dark:bg-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300 font-sans">
        <Helmet>
          <title>Indresh Harshan J P</title>
          <meta name="description" content="Portfolio of Indresh Harshan J P, a third-year B.E. Computer Science and Engineering student and aspiring Full Stack Web Developer, specializing in building scalable, responsive web applications using modern technologies." />
          <meta name="keywords" content="Indresh Harshan, Full Stack Developer, MERN Stack, React, Node.js, MongoDB, Web Development, Portfolio" />
          <html lang="en" />
        </Helmet>

        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
