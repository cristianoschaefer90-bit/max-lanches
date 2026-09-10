import React, { useState, useEffect } from 'react';
import { Flame, Plus, Award, Camera } from 'lucide-react';
import { motion } from 'motion/react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { photoStore } from '../utils/photoStore';

interface FeaturedDishesProps {
  onSelectItem: (item: MenuItem) => void;
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({ onSelectItem }) => {
  const [, setTick] = useState(0);

  useEffect(() => {
    const unsub = photoStore.subscribe(() => setTick((t) => t + 1));
    return unsub;
  }, []);

  // Select authentic highlights from the menu
  const banquete = MENU_ITEMS.find((i) => i.id === 'banquete-dourado')!;
  const xTudo = MENU_ITEMS.find((i) => i.id === 'x-tudo')!;
  const xBacon = MENU_ITEMS.find((i) => i.id === 'x-bacon')!;
  const batataCheddar = MENU_ITEMS.find((i) => i.id === 'batata-cheddar-bacon')!;

  // Dynamic photos from store or fallbacks
  const banqueteImg = photoStore.getPhoto('banquete-dourado-travessa', banquete?.image || '');
  const xBaconImg = photoStore.getPhoto('xbacon-farto', xBacon?.image || '');
  const xTudoImg = photoStore.getPhoto('xis-prensado-recheado', xTudo?.image || '');

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  return (
    <section id="destaques" className="py-20 lg:py-28 relative bg-[#0b0c0e] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#ea580c]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Editorial Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1f222a]"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#ea580c]">
              <Flame className="w-3.5 h-3.5" />
              <span>Destaques da Casa</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              OS QUERIDINHOS DA MAX’S
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#a39e93] max-w-md leading-relaxed">
            Os lanches e porções que mais saem na chapa. Testados, aprovados e repetidos pelos clientes de Três Coroas.
          </p>
        </motion.div>

        {/* Feature 1: The Massive House Highlight - BANQUETE DOURADO */}
        {banquete && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden border border-[#f59e0b]/30 bg-gradient-to-br from-[#181a22] to-[#0e1015] p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/80"
          >
            {/* Animated Golden Rim Glow */}
            <motion.div 
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#ea580c]/20 via-[#f59e0b]/30 to-[#ea580c]/20 pointer-events-none -z-10"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <motion.div 
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/40 text-[#f59e0b] text-xs font-heading font-bold uppercase tracking-wider"
                >
                  <Award className="w-4 h-4 text-[#f59e0b]" />
                  <span>{banquete.badge}</span>
                </motion.div>

                <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
                  {banquete.name}
                </h3>

                <p className="text-base text-[#c7c1b5] leading-relaxed">
                  {banquete.description}
                </p>

                {/* What comes in the Banquete Dourado based on the actual authentic recipe */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Batata Frita', 'Peixe Violinha', 'Polenta Frita Palito', 'Anéis de Cebola', 'Ovos de Codorna'].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-lg bg-[#1a1d25] border border-[#292d37] text-xs font-medium text-[#e6e1d8]"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>

                <div className="pt-3 flex flex-col xs:flex-row items-start xs:items-center gap-4 sm:gap-5 w-full">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#868074] block font-semibold">
                      Valor Especial
                    </span>
                    <span className="font-heading font-black text-3xl sm:text-4xl text-white">
                      {formatCurrency(banquete.price)}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onSelectItem(banquete)}
                    className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#e03a14] hover:bg-[#c9320f] text-white font-heading font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#e03a14]/25 transition-all min-h-[48px]"
                  >
                    <Plus className="w-4 h-4 flex-shrink-0" />
                    PEDIR O BANQUETE
                  </motion.button>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="rounded-2xl overflow-hidden border border-[#2d313c] aspect-[16/10] relative group shadow-2xl bg-[#0a0b0d]">
                  <motion.img
                    src={banqueteImg}
                    alt={banquete.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 right-4 text-xs font-semibold px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-[#f59e0b] border border-white/15 shadow-md flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-[#f59e0b]" />
                    Foto Real da Travessa · Serve a mesa inteira
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* Feature Grid: Other Standouts (X-Tudo, X-Bacon, Batata Cheddar & Bacon) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: X-TUDO */}
          {xTudo && (
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-[#14161b] border border-[#252830] overflow-hidden flex flex-col justify-between group hover:border-[#ea580c]/50 transition-all duration-300 shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1c1f27]">
                <img
                  src={xTudoImg}
                  alt={xTudo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#e03a14] text-white shadow-md">
                  {xTudo.badge}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-heading font-black text-xl text-white group-hover:text-[#f59e0b] transition-colors">
                      {xTudo.name}
                    </h4>
                    <span className="font-heading font-extrabold text-lg text-[#ea580c]">
                      {formatCurrency(xTudo.price)}
                    </span>
                  </div>
                  <p className="text-xs text-[#a39e93] line-clamp-3 leading-relaxed">
                    {xTudo.description}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectItem(xTudo)}
                  className="w-full py-2.5 rounded-lg bg-[#1e222b] hover:bg-[#e03a14] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Plus className="w-3.5 h-3.5" />
                  ADICIONAR AO PEDIDO
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Card 2: X-BACON */}
          {xBacon && (
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-[#14161b] border border-[#252830] overflow-hidden flex flex-col justify-between group hover:border-[#ea580c]/50 transition-all duration-300 shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1c1f27]">
                <img
                  src={xBaconImg}
                  alt={xBacon.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#ea580c] text-white shadow-md">
                  {xBacon.badge}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-heading font-black text-xl text-white group-hover:text-[#f59e0b] transition-colors">
                      {xBacon.name}
                    </h4>
                    <span className="font-heading font-extrabold text-lg text-[#ea580c]">
                      {formatCurrency(xBacon.price)}
                    </span>
                  </div>
                  <p className="text-xs text-[#a39e93] line-clamp-3 leading-relaxed">
                    {xBacon.description}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectItem(xBacon)}
                  className="w-full py-2.5 rounded-lg bg-[#1e222b] hover:bg-[#e03a14] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Plus className="w-3.5 h-3.5" />
                  ADICIONAR AO PEDIDO
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Card 3: BATATA CHEDDAR & BACON */}
          {batataCheddar && (
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-[#14161b] border border-[#252830] overflow-hidden flex flex-col justify-between group hover:border-[#ea580c]/50 transition-all duration-300 shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1c1f27]">
                <img
                  src={batataCheddar.image}
                  alt={batataCheddar.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#f59e0b] text-black shadow-md">
                  {batataCheddar.badge}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-heading font-black text-xl text-white group-hover:text-[#f59e0b] transition-colors">
                      {batataCheddar.name}
                    </h4>
                    <span className="font-heading font-extrabold text-lg text-[#ea580c]">
                      {formatCurrency(batataCheddar.price)}
                    </span>
                  </div>
                  <p className="text-xs text-[#a39e93] line-clamp-3 leading-relaxed">
                    {batataCheddar.description}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectItem(batataCheddar)}
                  className="w-full py-2.5 rounded-lg bg-[#1e222b] hover:bg-[#e03a14] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Plus className="w-3.5 h-3.5" />
                  ADICIONAR AO PEDIDO
                </motion.button>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
