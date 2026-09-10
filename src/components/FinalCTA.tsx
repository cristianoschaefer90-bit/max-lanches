import React from 'react';
import { MessageCircle, Clock, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/menuData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-gradient-to-b from-[#0b0c0e] via-[#12141a] to-[#0a0b0d] border-t border-[#1a1c22] overflow-hidden">
      {/* Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#e03a14] rounded-full blur-[160px] pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e03a14]/15 border border-[#e03a14]/30 text-[#ea580c] text-xs font-heading font-bold uppercase tracking-widest"
        >
          <Flame className="w-3.5 h-3.5" />
          <span>Fome não espera</span>
        </motion.div>

        {/* Big Bold Provocation Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.95] break-words">
            LANCHE DE VERDADE NÃO ESPERA. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#f59e0b]">
              PEÇA O SEU AGORA.
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#c7c1b5] max-w-2xl mx-auto leading-relaxed pt-2">
            Pão tostadinho, queijo derretendo e porções generosas preparadas com capricho em Três Coroas. É só mandar mensagem no WhatsApp!
          </p>
        </motion.div>

        {/* Big CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4 w-full"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            id="final-cta-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-heading font-black text-base sm:text-lg tracking-wider uppercase shadow-2xl shadow-[#22c55e]/25 transition-all min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span>PEDIR NO WHATSAPP</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="#cardapio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-[#181a20] hover:bg-[#20232a] text-[#f4efe6] border border-[#2b303c] font-heading font-bold text-sm sm:text-base tracking-wide transition-colors min-h-[48px]"
          >
            VER CARDÁPIO
          </motion.a>
        </motion.div>

        {/* Fast Delivery & Care details */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#868074]">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#ea580c]" />
            Preparado na hora na chapa quente
          </span>
          <span className="w-1 h-1 rounded-full bg-[#46413a]" />
          <span>Entrega rápida em Três Coroas</span>
          <span className="w-1 h-1 rounded-full bg-[#46413a]" />
          <span>Retirada no balcão sem demora</span>
        </div>

      </div>
    </section>
  );
};
