import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  // Create refs for each section to track when they're in view
  const [headerRef, headerInView] = useInView({ threshold: 0.5 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.3 });
  const [productsRef, productsInView] = useInView({ threshold: 0.3 });
  const [calculatorRef, calculatorInView] = useInView({ threshold: 0.3 });
  const [faqRef, faqInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
    [
      'rgb(255, 255, 255)', // Header start (white)
      'rgb(255, 255, 255)', // Header end (white)
      'rgb(255, 95, 84, 0.02)', // Benefits start (very subtle red)
      'rgb(255, 95, 84, 0.05)', // Products (light red)
      'rgb(255, 95, 84, 0.08)', // Calculator (slightly stronger red)
      'rgb(244, 245, 249)', // FAQ start (light gray)
      'rgb(35, 34, 63, 0.7)', // FAQ to Contact transition
      'rgb(35, 34, 63)' // Contact (dark blue)
    ]
  );

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 -z-10"
        style={{ backgroundColor }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Animated gradient overlays */}
      <motion.div
        className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent to-white/50 opacity-50"
        style={{
          backgroundSize: '200% 200%',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Decorative elements */}
      <motion.div
        className="fixed top-1/4 right-0 w-96 h-96 rounded-full filter blur-[120px] opacity-20 bg-[#FF5F54] -z-10"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="fixed bottom-1/4 left-0 w-96 h-96 rounded-full filter blur-[120px] opacity-20 bg-[#23223F] -z-10"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 10
        }}
      />
      
      {/* Invisible markers for section detection */}
      <div ref={headerRef} className="absolute top-0" />
      <div ref={benefitsRef} className="absolute top-[30vh]" />
      <div ref={productsRef} className="absolute top-[60vh]" />
      <div ref={calculatorRef} className="absolute top-[90vh]" />
      <div ref={faqRef} className="absolute top-[120vh]" />
      <div ref={contactRef} className="absolute bottom-0" />
    </>
  );
}