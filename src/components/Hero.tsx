import React, { useState, useEffect } from 'react';
import { PhoneCall, Star, Flame, UtensilsCrossed, Instagram, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/menuData';
import { photoStore } from '../utils/photoStore';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  const [heroImage, setHeroImage] = useState(() =>
    photoStore.getPhoto(
      'xbacon-farto',
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=85&w=1200&auto=format&fit=crop'
    )
  );

  useEffect(() => {
    const unsub = photoStore.subscribe(() => {
      setHeroImage(
        photoStore.getPhoto(
          'xbacon-farto',
          'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=85&w=1200&auto=format&fit=crop'
        )
      );
    });
    return unsub;
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-[#0b0c0e] bg-noise"
    >
      {/* Background Ambience / Warm Ember Radial */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#e03a14] rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.09, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#f59e0b] rounded-full blur-[120px] pointer-events-none" 
      />

      {/* Decorative vertical editorial line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-[#e03a14]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Provocative Headline, Copy, Social Proof & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Local Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#181a1f] border border-[#2d313b] text-xs font-semibold text-[#f4efe6] shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e03a14] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e03a14]" />
              </span>
              <span className="text-[#ea580c] uppercase tracking-widest text-[11px] font-bold">
                Três Coroas · RS
              </span>
              <span className="text-[#645e54]">|</span>
              <span className="text-[#a39e93]">Lanches & Porções Artesanais</span>
            </motion.div>

            {/* Powerful Display Headline with animated entrance */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="space-y-1"
            >
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[0.94] tracking-tight text-white uppercase break-words">
                DEU FOME. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#f59e0b]">
                  A GENTE RESOLVE.
                </span>
              </h1>
            </motion.div>

            {/* Direct, Honest Brand Statement */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="font-body text-sm sm:text-base lg:text-lg text-[#c7c1b5] max-w-xl leading-relaxed"
            >
              Lanche de verdade, daquele que chega na mesa e chama atenção. Na <strong className="text-white font-semibold">Max’s Lanches</strong>, é pão fresco, chapa quente, porção generosa e <span className="text-[#f59e0b] font-medium">zero miséria</span>.
            </motion.p>

            {/* Action Buttons with spring hover effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full"
            >
              {/* WhatsApp Direct Order Button */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id="hero-cta-whatsapp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#e03a14] hover:bg-[#c9320f] text-white font-heading font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-[#e03a14]/30 hover:shadow-[#e03a14]/50 transition-all min-h-[48px]"
              >
                <PhoneCall className="w-5 h-5 flex-shrink-0" />
                PEDIR AGORA
              </motion.a>

              {/* View Menu Button */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#cardapio"
                id="hero-cta-cardapio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#181a1f] hover:bg-[#20242c] text-[#f4efe6] border border-[#2b303c] font-heading font-bold text-sm sm:text-base tracking-wide transition-colors min-h-[48px]"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#ea580c] flex-shrink-0" />
                VER CARDÁPIO
              </motion.a>

              {/* Real Photos Anchor Button */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#fotos-reais"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-xl bg-[#13151b] hover:bg-[#1a1d25] text-[#b8b1a3] hover:text-white border border-[#242833] font-heading font-bold text-xs sm:text-sm tracking-wide transition-colors min-h-[48px]"
              >
                <span>FOTOS REAIS</span>
              </motion.a>
            </motion.div>

            {/* Social Trust Indicator: 4.9 on Google */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-3 border-t border-[#1f222a] flex flex-wrap items-center gap-4 text-xs text-[#a39e93]"
            >
              <div className="flex items-center gap-1.5 text-amber-400">
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

          {/* Right Column: Hero Visual with Gentle Float and Glow */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative mx-auto max-w-[480px] lg:max-w-none"
            >
              
              {/* Floating ambient motion on the main card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden border border-[#2d313c] bg-[#14161b] shadow-2xl shadow-black/80 group"
              >
                
                {/* Image Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-black/30 z-10 pointer-events-none" />

                {/* Hero Food Photography */}
                <img
                  src={heroImage}
                  alt="Xis e lanche artesanal Max’s Lanches com queijo derretendo e carne suculenta"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] xs:h-[380px] sm:h-[440px] lg:h-[520px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Badge Overlay on Image: Authentic House Favorite */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                  <motion.span 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-[#e03a14]/40 text-[11px] sm:text-xs font-heading font-bold text-white uppercase tracking-wider shadow-lg"
                  >
                    <Flame className="w-3.5 h-3.5 text-[#e03a14]" />
                    Chapa Quente
                  </motion.span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 z-20 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#121316]/95 backdrop-blur-md border border-[#2b303c] flex items-center justify-between">
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#ea580c] block">
                      Foto Real da Casa
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-white truncate">
                      X-Bacon Especial
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#a39e93] truncate">
                      Bacon crocante em cubos, ovo caipira e queijo derretido
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[9px] sm:text-[10px] text-[#868074] block uppercase">A partir de</span>
                    <span className="font-heading font-black text-base sm:text-lg text-white">
                      R$ 28<span className="text-[10px] sm:text-xs text-[#a39e93]">,00</span>
                    </span>
                  </div>
                </div>

              </motion.div>

              {/* Instagram Direct Link on the First Image (Awwwards Gastropub Style) */}
              <motion.a 
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex absolute -bottom-4 left-4 z-30 px-3.5 py-2.5 rounded-2xl bg-[#14161c]/95 backdrop-blur-md border border-white/15 shadow-2xl items-center gap-3 text-white group hover:border-[#ea580c]/60 transition-all cursor-pointer"
                id="hero-instagram-badge"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#f59e0b] via-[#ea580c] to-[#e11d48] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-white font-heading tracking-wide">@maxslanches</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#ea580c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-[10px] text-[#a39e93]">
                    Siga no Instagram · Fotos reais
                  </p>
                </div>
              </motion.a>

              {/* Floating Quick Order Pill */}
              <motion.div 
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:flex absolute -top-3 right-4 z-30 px-3 py-1.5 rounded-xl bg-[#22c55e]/15 border border-[#22c55e]/30 backdrop-blur-md text-[#22c55e] text-xs font-semibold items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
                <span>Delivery & Retirada</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Animated bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#1a1c22] bg-[#0e0f13]/85 backdrop-blur-sm py-2.5 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold text-[#868074] whitespace-nowrap overflow-hidden">
          <span>✦ PÃO FRESQUINHO</span>
          <span className="hidden xs:inline">✦ QUEIJO DERRETENDO</span>
          <span>✦ CARNE SUCULENTA</span>
          <span className="hidden sm:inline">✦ PORÇÃO BEM SERVIDA</span>
          <span>✦ TRÊS COROAS - RS</span>
        </div>
      </div>
    </section>
  );
};
