import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';
import faqData from '../data/faqs.json';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#FF5F54]/5 to-[#23223F]/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="container mx-auto px-4 relative">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#23223F] text-center mb-8 md:mb-16">
            Preguntas Frecuentes
          </h2>
        </FadeIn>
        
        <div className="max-w-3xl mx-auto">
          {faqData.faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                className="mb-4"
                initial={false}
              >
                <motion.button
                  className="w-full flex items-center justify-between p-6 bg-white rounded-xl text-left hover:shadow-md transition-shadow"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  whileHover={{ scale: 1.01 }}
                >
                  <span className="text-lg font-semibold text-[#23223F]">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#FF5F54]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#FF5F54]" />
                  )}
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white/50 rounded-b-xl">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}