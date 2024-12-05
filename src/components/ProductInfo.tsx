import React from 'react';
import { Wallet, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

const benefits = [
  {
    icon: <Wallet className="w-6 h-6 md:w-8 md:h-8 text-[#FF5F54]" />,
    title: 'Fácil acceso',
    description: 'En tu app finsus disponible 24/7.'
  },
  {
    icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#FF5F54]" />,
    title: 'Pagos automáticos',
    description: 'Olvídate de fechas de pago, se hacen en automático.'
  },
  {
    icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#FF5F54]" />,
    title: 'Flexibilidad',
    description: 'Tú tienes el control decidiendo el plazo que deseas.'
  }
];

export function ProductInfo() {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#23223F] text-center mb-4">
            ¿Qué es el crédito de nómina?
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12 md:mb-20">
            El crédito de nómina de finsus es una solución rápida y accesible que se descuenta automáticamente de tu nómina, con tasas justas y sin trámites complicados. Lo que mereces.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={0.2 * (index + 1)} direction="up">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  className="mb-6 w-12 h-12 md:w-16 md:h-16 bg-[#FF5F54]/10 rounded-full flex items-center justify-center"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#23223F] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}