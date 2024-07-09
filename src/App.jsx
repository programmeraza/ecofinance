import React, { useState } from 'react';
import './App.scss';
import { ZIndexProvider } from './components/ZIndexContext/ZIndexContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Registr from './components/Registr/Registr';
import Telegram from './components/Telegram/Telegram';
import Footer from './components/Footer/Footer';
import Logo from './components/Logos/Logo';

function App() {
  return (
    <>
      <ZIndexProvider>
        <Header />
        <Hero />
        <About />
        <Services />
        <Registr />
        <Logo/>
        <Telegram />
        <Footer />

      </ZIndexProvider>
    </>
  );
}

export default App;
