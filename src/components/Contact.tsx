import React from 'react';
import { MessageSquare, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

export function Contact() {
  return (
    <section className="py-32 text-white relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#FF5F54] rounded-full filter blur-3xl"
        style={{ transform: 'translate(30%, -30%)' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">
            ¿Necesitas ayuda?
          </h2>
          <p className="text-xl text-white/80 text-center mb-16">
            Estamos aquí para ayudarte en lo que necesites
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <MessageSquare className="w-8 h-8" />,
              title: "Chat en vivo",
              description: "Respuestas inmediatas a tus dudas",
              href: "#chat"
            },
            {
              icon: <Mail className="w-8 h-8" />,
              title: "Correo electrónico",
              description: "contacto@finsus.com",
              href: "mailto:contacto@finsus.com"
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: "Guía completa",
              description: "Descarga nuestra guía en PDF",
              href: "#download"
            }
          ].map((item, index) => (
            <FadeIn key={index} delay={0.2 * index} direction="up">
              <motion.a
                href={item.href}
                whileHover={{ y: -10, scale: 1.02 }}
                className="flex flex-col items-center p-8 bg-white/10 rounded-xl backdrop-blur-lg hover:bg-white/20 transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-[#FF5F54] rounded-full flex items-center justify-center mb-6"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-center text-white/80">
                  {item.description}
                </p>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}