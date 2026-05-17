import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Data representing the stellar layers from outside to inside
const stellarLayers = [
  { id: 'h', name: 'Hydrogen Shell', fusion: '4H → He', color: 'bg-blue-600', scale: 1.0, temp: '15 Million K' },
  { id: 'he', name: 'Helium Shell', fusion: '3He → C', color: 'bg-green-600', scale: 0.85, temp: '100 Million K' },
  { id: 'c', name: 'Carbon Shell', fusion: 'C + He → O', color: 'bg-yellow-600', scale: 0.7, temp: '600 Million K' },
  { id: 'ne', name: 'Neon Shell', fusion: 'Ne → O + He', color: 'bg-orange-500', scale: 0.55, temp: '1.2 Billion K' },
  { id: 'o', name: 'Oxygen Shell', fusion: 'O + O → Si + He', color: 'bg-red-500', scale: 0.4, temp: '1.5 Billion K' },
  { id: 'si', name: 'Silicon Shell', fusion: 'Si → Fe', color: 'bg-purple-600', scale: 0.25, temp: '2.7 Billion K' },
  { id: 'fe', name: 'Iron Core', fusion: 'Endothermic (Dead End)', color: 'bg-neutral-800 border border-red-500', scale: 0.12, temp: 'Greater than 3 Billion K' },
];

export default function OnionStarPresentation() {
  const [activeLayer, setActiveLayer] = useState(null);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-slate-950 text-white p-6 gap-8">
      
      {/* LEFT SIDE: Animated Interactive Graphic Container */}
      <div className="relative w-96 h-96 flex items-center justify-center bg-slate-900 rounded-full shadow-2xl overflow-hidden border border-slate-800">
        
        {/* Render shells backwards so smaller inner layers sit on top of larger outer layers */}
        {[...stellarLayers].reverse().map((layer) => (
          <motion.button
            key={layer.id}
            onClick={() => setActiveLayer(layer)}
            className={`absolute rounded-full cursor-pointer flex items-center justify-center transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] ${layer.color}`}
            style={{
              width: `${layer.scale * 100}%`,
              height: `${layer.scale * 100}%`,
              zIndex: Math.round(10 - layer.scale * 10),
            }}
            // Framer motion properties for introductory animation
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: (1 - layer.scale) * 0.5, type: 'spring', stiffness: 60 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Display labels on larger rings if space allows */}
            {layer.scale > 0.4 && (
              <span className="absolute bottom-2 text-[10px] font-bold tracking-wider opacity-70">
                {layer.id.toUpperCase()}
              </span>
            )}
          </motion.button>
        ))}
      </div>

      {/* RIGHT SIDE: Dynamic Info Panel explaining the physics */}
      <div className="w-full md:w-96 min-h-[300px] flex flex-col justify-center bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <AnimatePresence mode="wait">
          {activeLayer ? (
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-pink-400 mb-1">{activeLayer.name}</h3>
              <p className="text-sm text-slate-400 mb-4">Core Temperature: {activeLayer.temp}</p>
              
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-400 block mb-1">Active Fusion:</span>
                <code className="text-lg font-mono text-white">{activeLayer.fusion}</code>
              </div>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeLayer.id === 'fe' 
                  ? "Iron cannot support fusion reactions without stealing stellar energy. The star is seconds away from core collapse!"
                  : `As gravitational compression intensifies, temperatures spike to ignite the ${activeLayer.name} cycle.`}
              </p>
            </motion.div>
          ) : (
            <motion.div className="text-center text-slate-500">
              <p className="text-lg font-medium">The Onion Skin Core</p>
              <p className="text-sm mt-1">Click on any stellar layer to examine its interior nucleosynthesis profile.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}