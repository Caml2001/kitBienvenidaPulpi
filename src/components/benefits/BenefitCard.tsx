import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

interface BenefitFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface BenefitCardProps {
  title: string;
  icon: React.ReactNode;
  features?: BenefitFeature[];
  description?: string;
  isCompact?: boolean;
}

export function BenefitCard({ title, icon, features, description, isCompact = false }: BenefitCardProps) {
  if (isCompact) {
    return (
      <FadeIn>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 bg-[#FF5F54]/10 rounded-full flex items-center justify-center mb-6"
          >
            {icon}
          </motion.div>

          <h3 className="text-2xl font-bold text-[#23223F] mb-4">{title}</h3>
          
          <p className="text-gray-600 mb-8 flex-grow">{description}</p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#23223F] text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#FF5F54] transition-colors mt-auto"
          >
            Conoce más
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </FadeIn>
    );
  }

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

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#23223F] text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#FF5F54] transition-colors"
          >
            Conoce más
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="md:w-2/3">
          {features ? (
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 bg-[#23223F]/5 rounded-full flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#23223F] mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center h-full">
              <p className="text-gray-600">{description}</p>
            </div>
          )}
        </div>
      </motion.div>
    </FadeIn>
  );
}