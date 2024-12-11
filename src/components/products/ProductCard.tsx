import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { CalculatorContext } from '../../App';

interface ProductCardProps {
  title: string;
  description: string;
  benefits: string[];
  conditions: string[];
  ctaText: string;
  icon: React.ReactNode;
}

export function ProductCard({ title, description, benefits, conditions, ctaText, icon }: ProductCardProps) {
  const { toggleCalculator } = useContext(CalculatorContext);

  return (
    <FadeIn>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 h-full"
      >
        <div className="md:w-1/3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 bg-[#FF5F54]/10 rounded-full flex items-center justify-center mb-6"
          >
            {icon}
          </motion.div>

          <h3 className="text-2xl font-bold text-[#23223F] mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>

          <motion.button
            onClick={toggleCalculator}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#23223F] text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#FF5F54] transition-colors"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="md:w-2/3 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-[#23223F] mb-4 text-lg">Beneficios:</h4>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#FF5F54] mt-1">•</span>
                  <span className="text-gray-600">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#23223F] mb-4 text-lg">Condiciones:</h4>
            <ul className="space-y-3">
              {conditions.map((condition, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#FF5F54] mt-1">•</span>
                  <span className="text-gray-600">{condition}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}