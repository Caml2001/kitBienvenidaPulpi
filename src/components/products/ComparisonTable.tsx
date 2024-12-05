import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';

const tableData = [
  {
    feature: 'Monto disponible',
    retiroSod: 'Hasta 35% del sueldo',
    adelanto: '$3,000 - 1 mes de sueldo',
    prestamo: 'Hasta 3 meses de sueldo'
  },
  {
    feature: 'Comisión',
    retiroSod: '10% del monto',
    adelanto: '20% del monto',
    prestamo: '5% + tasa de interés'
  },
  {
    feature: 'Plazos',
    retiroSod: 'Inmediato',
    adelanto: 'Hasta 4 meses',
    prestamo: '6 a 18 meses'
  },
  {
    feature: 'Antigüedad requerida',
    retiroSod: '2 meses',
    adelanto: '6 meses',
    prestamo: '1 año'
  }
];

export function ComparisonTable() {
  return (
    <FadeIn>
      <div className="overflow-x-auto">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="min-w-full bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#23223F] text-white">
                <th className="py-4 px-6 text-left">Característica</th>
                <th className="py-4 px-6 text-left">Retiro SoD</th>
                <th className="py-4 px-6 text-left">Adelanto de nómina</th>
                <th className="py-4 px-6 text-left">Préstamo de nómina</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <motion.tr
                  key={index}
                  whileHover={{ backgroundColor: '#F4F5F9' }}
                  className="border-b border-gray-200"
                >
                  <td className="py-4 px-6 font-semibold text-[#23223F]">{row.feature}</td>
                  <td className="py-4 px-6 text-gray-600">{row.retiroSod}</td>
                  <td className="py-4 px-6 text-gray-600">{row.adelanto}</td>
                  <td className="py-4 px-6 text-gray-600">{row.prestamo}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </FadeIn>
  );
}