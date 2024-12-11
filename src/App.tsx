import React, { createContext, useState } from 'react';
import { Header } from './components/Header';
import { ProductInfo } from './components/ProductInfo';
import { Products } from './components/products/Products';
import { Benefits } from './components/Benefits';
import { Calculator } from './components/Calculator';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { AnimatedBackground } from './components/AnimatedBackground';

// Crear el contexto para la calculadora
export const CalculatorContext = createContext({
  isCalculatorOpen: false,
  toggleCalculator: () => {},
});

function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const toggleCalculator = () => {
    setIsCalculatorOpen(!isCalculatorOpen);
  };

  return (
    <CalculatorContext.Provider value={{ isCalculatorOpen, toggleCalculator }}>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <Header />
        <Benefits />
        <ProductInfo />
        <Products />
        <FAQ />
        <Contact />
        {isCalculatorOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-xl max-h-[90vh] flex flex-col">
              <div className="p-4 border-b border-gray-200 flex justify-end">
                <button 
                  onClick={toggleCalculator}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="overflow-y-auto flex-1 p-4">
                <Calculator />
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;