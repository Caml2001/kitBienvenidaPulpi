import React, { useState } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

export function Calculator() {
  const [amount, setAmount] = useState(10000);
  const [months, setMonths] = useState(12);
  const interestRate = 0.16;

  const calculatePayment = () => {
    const r = interestRate / 24; // Tasa quincenal
    const n = months * 2; // Número de quincenas
    const payment = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(payment);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF5F54]/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <CalculatorIcon className="w-10 h-10 text-[#FF5F54]" />
              </motion.div>
              <h2 className="text-4xl font-bold text-[#23223F]">
                Calcula tu crédito
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[#23223F] font-semibold mb-2">
                    Monto del préstamo
                  </label>
                  <input
                    type="range"
                    min="3000"
                    max="100000"
                    step="1000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF5F54]"
                  />
                  <div className="mt-2 text-2xl font-bold text-[#FF5F54]">
                    ${amount.toLocaleString()}
                  </div>
                </div>

                <div>
                  <label className="block text-[#23223F] font-semibold mb-2">
                    Plazo en meses
                  </label>
                  <input
                    type="range"
                    min="6"
                    max="18"
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF5F54]"
                  />
                  <div className="mt-2 text-2xl font-bold text-[#FF5F54]">
                    {months} meses
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-[#23223F] rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-4">Tu pago quincenal sería:</h3>
                <div className="text-4xl font-bold text-[#FF5F54]">
                  ${calculatePayment().toLocaleString()}
                </div>

              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-[#FF5F54] text-white py-4 rounded-xl font-semibold hover:bg-[#23223F] transition-colors"
              >
                Solicitar este monto
              </motion.button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}