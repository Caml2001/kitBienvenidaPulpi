import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';
import { BenefitCard } from './benefits/BenefitCard';
import { 
  PiggyBank, 
  QrCode, 
  Smartphone, 
  CreditCard, 
  Wallet,
  TrendingUp,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

const mainBenefits = [
  {
    title: 'Haz que tu dinero crezca',
    icon: <PiggyBank className="w-8 h-8 text-[#FF5F54]" />,
    features: [
      {
        title: 'Inversiones a largo plazo',
        description: 'Obtén una tasa del 15.01% anual al invertir a 2 años. ¡Empieza desde solo $100 MXN!',
        icon: <TrendingUp className="w-6 h-6" />
      },
      {
        title: 'Ahorros con Finsus+',
        description: 'Tu dinero siempre disponible con una tasa del 10.06% anual y disponibilidad 24/7.',
        icon: <PiggyBank className="w-6 h-6" />
      }
    ]
  },
  {
    title: 'Olvídate del efectivo',
    icon: <QrCode className="w-8 h-8 text-[#FF5F54]" />,
    features: [
      {
        title: 'Paga con QR',
        description: 'Escanea, paga y listo. Realiza tus pagos en comercios sin complicaciones.',
        icon: <QrCode className="w-6 h-6" />
      },
      {
        title: 'Finshop',
        description: 'Compra y paga más de 200 servicios sin comisiones. Desde luz, recargas telefónicas, hasta servicios básicos.',
        icon: <ShoppingBag className="w-6 h-6" />
      }
    ]
  }
];

const additionalBenefits = [
  {
    title: 'Control total desde tu app',
    icon: <Smartphone className="w-8 h-8 text-[#FF5F54]" />,
    description: 'Consulta tus saldos, realiza transferencias y gestiona tus apartados de manera sencilla y segura.'
  },
  {
    title: 'Tarjeta de débito para el día a día',
    icon: <CreditCard className="w-8 h-8 text-[#FF5F54]" />,
    description: 'Solicítala desde la app y úsala en cualquier momento. Respaldada por Mastercard con aceptación internacional.'
  },
  {
    title: 'Créditos a tu alcance',
    icon: <Wallet className="w-8 h-8 text-[#FF5F54]" />,
    description: 'Resuelve tus imprevistos con créditos rápidos y accesibles desde la app.'
  }
];

export function Benefits() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <FadeIn>
          <h2 className="text-4xl font-bold text-[#23223F] text-center mb-4">
            Descubre por qué elegir Finsus
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-20">
            Más allá de la nómina, en Finsus te ofrecemos un mundo de beneficios diseñados para ti
          </p>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {/* Main benefits with features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {mainBenefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </motion.div>

          {/* Additional benefits in a row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {additionalBenefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} isCompact />
            ))}
          </motion.div>
        </div>

        <FadeIn delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-16 bg-[#23223F] rounded-2xl shadow-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Descarga la app Finsus y descubre un mundo de posibilidades financieras al alcance de tu mano.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF5F54] text-white py-4 px-8 rounded-xl font-semibold inline-flex items-center gap-2"
            >
              Descarga la app y comienza hoy
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}