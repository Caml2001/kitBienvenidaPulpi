import React from 'react';
import { Header } from './components/Header';
import { ProductInfo } from './components/ProductInfo';
import { Products } from './components/products/Products';
import { Benefits } from './components/Benefits';
import { Calculator } from './components/Calculator';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { AnimatedBackground } from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <Benefits />
      <ProductInfo />
      <Products />
      <Calculator />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;