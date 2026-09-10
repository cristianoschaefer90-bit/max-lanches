import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { REAL_REVIEWS, COMPANY_INFO } from '../data/menuData';

export const SocialProof: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28 relative bg-[#0b0c0e] border-t border-[#1a1c22] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e03a14]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1f222a]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#ea580c]">
              <ShieldCheck className="w-4 h-4" />
              <span>Prova Social Real</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              QUEM PROVOU, APROVOU.
            </h2>
          </div>

          {/* Rating Badge */}
          <div className="p-4 rounded-2xl bg-[#14161c] border border-[#252832] flex items-center gap-4">
            <div className="text-center pr-3 border-r border-[#252832]">
              <span className="font-heading font-black text-3xl text-white block">
                {COMPANY_INFO.rating}
              </span>
              <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-white block">
                Google Avaliações
              </span>
              <span className="text-xs text-[#a39e93] block">
                {COMPANY_INFO.reviewsCount} clientes avaliaram em Três Coroas
              </span>
            </div>
          </div>
        </div>

        {/* Real Reviews Cards (strictly using only provided authentic reviews) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {REAL_REVIEWS.map((review, index) => (
            <div
              key={review.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between border transition-all ${
                index === 0
                  ? 'bg-gradient-to-b from-[#181a22] to-[#121318] border-[#313644] md:scale-[1.03] shadow-xl'
                  : 'bg-[#13151b] border-[#22252e] hover:border-[#2f333f]'
              }`}
            >
              <div className="space-y-4">
                {/* Stars and quote symbol */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#2d3240]" />
                </div>

                {/* Exact authentic comment */}
                <p className="text-base sm:text-lg text-white font-medium italic leading-relaxed">
                  “{review.comment}”
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1f222a] flex items-center justify-between text-xs text-[#868074]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#1e222c] border border-[#2b303c] flex items-center justify-center font-bold text-white text-[10px]">
                    TC
                  </div>
                  <span className="text-white font-semibold">{review.author}</span>
                </div>
                <span>{review.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Community Note */}
        <div className="text-center pt-2">
          <p className="text-xs text-[#736c61]">
            Avaliações públicas verificadas no perfil oficial do Google da Max’s Lanches em Três Coroas — RS.
          </p>
        </div>

      </div>
    </section>
  );
};
