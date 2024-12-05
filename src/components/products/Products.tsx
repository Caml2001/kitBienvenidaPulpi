import React from 'react';
import { Wallet, Clock, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { ProductCard } from './ProductCard';
import { ComparisonTable } from './ComparisonTable';

const products = [
  {
    title: 'Retiro Inmediato',
    description: 'Retira hasta el 35% de tu sueldo del periodo, sin complicaciones.',
    benefits: [
      'Acceso 25/7.',
      'Sin largos procesos de aprobación'
    ],
    conditions: [
      '2 meses recibiendo tu nómina en finsus'
    ],
    ctaText: 'Solicitar mi retiro ahora',
    icon: <Wallet className="w-8 h-8 text-[#FF5F54]" />
  },
  {
    title: 'Adelanto de nómina',
    description: 'Recibe un adelanto desde hasta de un mes de sueldo para cubrir tus necesidades inmediatas.',
    benefits: [
      'Plazos flexibles de hasta 4 meses',
      'Descuento directo vía nómina'
    ],
    conditions: [
      '6 meses de antigüedad',
      'Comisión del 20% del monto solicitado'
    ],
    ctaText: 'Solicitar adelanto',
    icon: <Clock className="w-8 h-8 text-[#FF5F54]" />
  },
  {
    title: 'Préstamo de nómina',
    description: 'Accede a un préstamo de hasta tres meses de sueldo, con plazos hasta de 18 meses.',
    benefits: [
      'Financiamiento a largo plazo',
      'Comisiones competitivas y tasa de interés transparente'
    ],
    conditions: [
      '1 año de antigüedad en tu empleo',
      'Comisión del 5% del monto solicitado + tasa de interés'
    ],
    ctaText: 'Solicitar mi préstamo',
    icon: <CreditCard className="w-8 h-8 text-[#FF5F54]" />
  }
];

export function Products() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-[#23223F] text-center mb-4">
            Explora todas tus opciones en finsus
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-20">
            Nuestros productos están diseñados para ofrecerte soluciones financieras flexibles y accesibles. Explora cada opción y elige la que mejor se ajuste a tus necesidades.
          </p>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </motion.div>

        <div className="mt-32">
          <FadeIn>
            <h3 className="text-3xl font-bold text-[#23223F] text-center mb-12">
              Compara nuestros productos
            </h3>
          </FadeIn>
          <ComparisonTable />
        </div>
      </div>
    </section>
  );
}