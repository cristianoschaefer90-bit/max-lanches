import React from 'react';
import { PhoneCall, ArrowDown, Star, Flame, Sparkles, UtensilsCrossed } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuData';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-[#0b0c0e] bg-noise"
    >
      {/* Background Ambience / Warm Ember Radial */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#e03a14]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative vertical editorial line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-[#e03a14]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Provocative Headline, Copy, Social Proof & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Local Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#181a1f] border border-[#2d313b] text-xs font-semibold text-[#f4efe6]">
              <span className="w-2 h-2 rounded-full bg-[#e03a14] animate-ping" />
              <span className="text-[#ea580c] uppercase tracking-widest text-[11px] font-bold">
                Três Coroas · RS
              </span>
              <span className="text-[#645e54]">|</span>
              <span className="text-[#a39e93]">Lanches & Porções Artesanais</span>
            </div>

            {/* Powerful Display Headline */}
            <div className="space-y-1">
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[0.92] tracking-tight text-white uppercase">
                DEU FOME. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#f59e0b]">
                  A GENTE RESOLVE.
                </span>
              </h1>
            </div>

            {/* Direct, Honest Brand Statement */}
            <p className="font-body text-base sm:text-lg text-[#c7c1b5] max-w-xl leading-relaxed">
              Lanche de verdade, daquele que chega na mesa e chama atenção. Na <strong className="text-white font-semibold">Max’s Lanches</strong>, é pão fresco, chapa quente, porção generosa e <span className="text-[#f59e0b] font-medium">zero miséria</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* WhatsApp Direct Order Button */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id="hero-cta-whatsapp"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#e03a14] hover:bg-[#c9320f] text-white font-heading font-extrabold text-base tracking-wider uppercase shadow-xl shadow-[#e03a14]/30 hover:shadow-[#e03a14]/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="w-5 h-5" />
                PEDIR AGORA
              </a>

              {/* View Menu Button */}
              <a
                href="#cardapio"
                id="hero-cta-cardapio"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#181a1f] hover:bg-[#20242c] text-[#f4efe6] border border-[#2b303c] font-heading font-bold text-base tracking-wide transition-colors"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#ea580c]" />
                VER CARDÁPIO COMPLETO
              </a>
            </div>

            {/* Social Trust Indicator: 4.9 on Google */}
            <div className="pt-3 border-t border-[#1f222a] flex flex-wrap items-center gap-4 text-xs text-[#a39e93]">
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
            </div>

          </div>

          {/* Right Column: Hero Visual - Food Photography Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              
              {/* Outer Decorative Frame & Shadow */}
              <div className="relative rounded-3xl overflow-hidden border border-[#2d313c] bg-[#14161b] shadow-2xl shadow-black/80 group">
                
                {/* Image Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-black/30 z-10 pointer-events-none" />

                {/* Hero Food Photography (Artisanal Gaucho Xis / Burger with melting cheese) */}
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=85&w=1200&auto=format&fit=crop"
                  alt="Xis e lanche artesanal Max’s Lanches com queijo derretendo e carne suculenta"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[480px] lg:h-[520px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Badge Overlay on Image: Authentic House Favorite */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs font-heading font-bold text-white uppercase tracking-wider">
                    <Flame className="w-3.5 h-3.5 text-[#e03a14]" />
                    Chapa Quente
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-2xl bg-[#121316]/90 backdrop-blur-md border border-[#2b303c] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ea580c] block">
                      Favorito da Galera
                    </span>
                    <h3 className="font-heading font-bold text-base text-white">
                      X-Tudo & X-Bacon
                    </h3>
                    <p className="text-xs text-[#a39e93]">
                      Queijo derretido, bacon farto e bife suculento
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#868074] block uppercase">A partir de</span>
                    <span className="font-heading font-black text-lg text-white">
                      R$ 28<span className="text-xs text-[#a39e93]">,00</span>
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Floating Accent Badge: Generosidade Gaúcha */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 z-30 p-3.5 rounded-2xl bg-[#16181e] border border-[#2b303c] shadow-xl items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-heading uppercase tracking-wide">
                    Porção Generosa
                  </h4>
                  <p className="text-[11px] text-[#a39e93]">
                    Sem miséria no prato
                  </p>
                </div>
              </div>

              {/* Floating Quick Order Pill */}
              <div className="hidden sm:flex absolute -top-4 -right-4 z-30 px-3.5 py-2 rounded-xl bg-[#22c55e]/15 border border-[#22c55e]/30 backdrop-blur-md text-[#22c55e] text-xs font-semibold items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
                <span>Delivery & Retirada</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle bottom ticker for immediate appetite stimulation */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#1a1c22] bg-[#0e0f13]/80 backdrop-blur-sm py-2.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-[11px] uppercase tracking-widest font-semibold text-[#868074]">
          <span>✦ PÃO FRESQUINHO</span>
          <span className="hidden sm:inline">✦ QUEIJO DERRETENDO</span>
          <span>✦ CARNE SUCULENTA</span>
          <span className="hidden md:inline">✦ PORÇÃO BEM SERVIDA</span>
          <span>✦ TRÊS COROAS - RS</span>
        </div>
      </div>
    </section>
  );
};
