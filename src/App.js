import React from 'react';
import "./App.css";
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Certificates } from './components/certificates/Certificates';
import { Qualification } from './components/qualification/Qualification';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <About />
      <Qualification />
      <Skills />
      <Work />
      <Certificates />
      <Contact />
    </main>

    <ScrollUp />
    <Footer />
    </>
  );
}

export default App;
