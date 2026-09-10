import React from 'react';
import { PhoneCall, Star, Flame, UtensilsCrossed, Instagram, ArrowUpRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/menuData';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#0a0b0d] text-white"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#e03a14]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#f59e0b]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status & Delivery Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#16181f] border border-[#272b36] shadow-inner"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ea580c] font-heading">
                Chapa Quente em Três Coroas
              </span>
              <span className="text-[#49443c]">·</span>
              <span className="text-xs text-[#a39e93] font-medium">
                Local, Retirada & Delivery
              </span>
            </motion.div>

            {/* Main Punchy Typography */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="font-display font-black text-4xl xs:text-5xl sm:text-6xl xl:text-7xl uppercase tracking-tight text-white leading-[1.05]">
                O VERDADEIRO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#f97316]">
                  XIS GAÚCHO
                </span> <br />
                SEM MISÉRIA.
              </h1>
              <p className="text-base sm:text-lg text-[#b8b2a5] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed pt-2">
                Pão prensado na chapa estalando, carne de primeira e porções fartas feitas com a generosidade que Três Coroas conhece e respeita.
              </p>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4"
            >
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id="hero-whatsapp-main-btn"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#e03a14] hover:bg-[#c9320f] text-white font-heading font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-[#e03a14]/30 hover:shadow-[#e03a14]/50 transition-all active:scale-[0.98] min-h-[52px]"
              >
                <PhoneCall className="w-5 h-5 flex-shrink-0" />
                <span>PEDIR PELO WHATSAPP</span>
              </a>

              <a
                href="#cardapio"
                id="hero-menu-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#14161d] hover:bg-[#1e222b] text-white font-heading font-bold text-sm uppercase tracking-wider border border-[#272c38] hover:border-[#ea580c]/50 transition-all min-h-[52px]"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#ea580c]" />
                <span>VER CARDÁPIO COMPLETO</span>
              </a>
            </motion.div>

            {/* Google Rating Social Proof Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#a39e93]"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-sm text-white">4,9</span>
                <span>no Google</span>
                <span className="w-1 h-1 rounded-full bg-[#46413a]" />
                <span className="text-[#f4efe6] font-medium">{COMPANY_INFO.reviewsCount} avaliações</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[#868074]">
                <span className="w-1 h-1 rounded-full bg-[#46413a]" />
                <span>R. dos Caigangues, 515</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: High-End Gastropub Brand Showcase (Zero Food Photos) */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative mx-auto max-w-[460px] lg:max-w-none"
            >
              
              {/* Brand Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden border border-[#232732] bg-[#111318] p-8 sm:p-10 shadow-2xl shadow-black/80 space-y-7">
                
                {/* Top Glowing Brand Avatar */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-[#f59e0b] via-[#ea580c] to-[#e11d48] shadow-[0_0_35px_rgba(234,88,12,0.4)] flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-[#0d0e12] flex items-center justify-center p-3">
                        <BrandLogo size="lg" showText={false} />
                      </div>
                    </div>
                    <span className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#22c55e] border-4 border-[#111318] flex items-center justify-center text-white text-xs">
                      ✓
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                      MAX’S LANCHES
                    </h3>
                    <p className="text-xs sm:text-sm text-[#ea580c] font-bold tracking-wider uppercase mt-0.5">
                      Tradição Gaúcha & Chapa Quente
                    </p>
                  </div>
                </div>

                {/* 3 Value Pillars */}
                <div className="grid grid-cols-3 gap-2.5 text-center pt-2 border-t border-[#1d212a]">
                  <div className="p-3 rounded-xl bg-[#161820] border border-[#212530]">
                    <span className="text-base font-black text-white font-heading block">4,9 ★</span>
                    <span className="text-[10px] text-[#8e887b] uppercase font-medium">Google</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#161820] border border-[#212530]">
                    <span className="text-base font-black text-white font-heading block">903+</span>
                    <span className="text-[10px] text-[#8e887b] uppercase font-medium">Seguidores</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#161820] border border-[#212530]">
                    <span className="text-base font-black text-white font-heading block">TC</span>
                    <span className="text-[10px] text-[#8e887b] uppercase font-medium">Três Coroas</span>
                  </div>
                </div>

                {/* Info Block */}
                <div className="space-y-2 text-xs text-[#a39e93] bg-[#161820] p-4 rounded-xl border border-[#212530]">
                  <div className="flex items-center gap-2 text-[#cfcac2]">
                    <Clock className="w-4 h-4 text-[#ea580c] flex-shrink-0" />
                    <span>Seg-Sáb: 18h às 23h · Domingo com horário especial</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#cfcac2]">
                    <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>R. dos Caigangues, 515 - Sander, Três Coroas</span>
                  </div>
                </div>

                {/* Action Links */}
                <div className="space-y-2.5 pt-1">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    id="hero-card-whatsapp-btn"
                    className="w-full py-3 px-4 rounded-xl bg-[#e03a14] hover:bg-[#c9320f] text-white text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>CHAMAR NO WHATSAPP</span>
                  </a>

                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    id="hero-card-instagram-btn"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#1a1c24] hover:bg-[#222530] text-[#a39e93] hover:text-white text-xs font-medium flex items-center justify-center gap-2 border border-[#282d38] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#ea580c]" />
                    <span>@maxslanches no Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Animated bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#1a1c22] bg-[#0e0f13]/85 backdrop-blur-sm py-2.5 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold text-[#868074] whitespace-nowrap overflow-hidden">
          <span>✦ PÃO PRENSADO NA HORA</span>
          <span className="hidden xs:inline">✦ QUEIJO DERRETENDO</span>
          <span>✦ CARNE SELECIONADA</span>
          <span className="hidden sm:inline">✦ PORÇÃO SEM MISÉRIA</span>
          <span>✦ TRÊS COROAS - RS</span>
        </div>
      </div>
    </section>
  );
};
