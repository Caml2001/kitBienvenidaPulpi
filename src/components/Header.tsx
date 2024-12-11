import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

export function Header() {
  return (
    <header className="min-h-screen flex items-center py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#23223F] rounded-[3rem] md:rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden min-h-[80vh] md:min-h-0 flex items-center"
          >
            {/* Decorative elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-[#FF5F54] rounded-full filter blur-3xl"
              style={{ transform: 'translate(30%, -30%)' }}
            />
            
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
              className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-[#FF5F54] rounded-full filter blur-3xl"
              style={{ transform: 'translate(-30%, 30%)' }}
            />

            <div className="relative z-10 max-w-3xl">
              <FadeIn delay={0.5}>
                <h1 className="text-5xl md:text-6xl font-bold text-[#FF5F54] mb-6 md:mb-8 leading-tight">
                  Descubre tus Beneficios por Tener tu Nómina en Finsus
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.7}>
                <p className="text-2xl md:text-2xl text-white/90 mb-8 md:mb-10">
                  Estamos emocionados y contentos de tenerte en finsus y ofrecerte el servicio que mereces.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.9}>
              <p className="text-1xl md:text-1xl font-bold text-white mb-8 md:mb-10">
                  ¡Desliza y te resolveremos todas tus dudas!
                </p>
              </FadeIn>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}