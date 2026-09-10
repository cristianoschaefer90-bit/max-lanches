import React from 'react';
import { Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuData';

export const AboutConcept: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 relative bg-[#0d0e12] overflow-hidden border-t border-[#1a1d24]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#e03a14]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with asymmetric images */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              {/* Primary Large Image: Xis sendo prensado e preparado */}
              <div className="relative rounded-3xl overflow-hidden border border-[#272b35] bg-[#14161b] shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=85&w=900&auto=format&fit=crop"
                  alt="Lanche artesanal caprichado na chapa quente"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#ea580c] block">
                    Direto da Chapa
                  </span>
                  <p className="font-heading font-bold text-base sm:text-lg text-white">
                    Pão prensado no capricho com queijo derretido
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Image: Local vibe & generous portion */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 rounded-2xl overflow-hidden border-2 border-[#1f2229] shadow-2xl aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1576107232684-1279f3908594?q=85&w=800&auto=format&fit=crop"
                  alt="Porção farta de petiscos da Max’s Lanches"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-bold text-[#fbbf24] uppercase tracking-wider block">
                    Porções da Casa
                  </span>
                  <p className="text-xs font-semibold text-white">
                    Para dividir com os amigos
                  </p>
                </div>
              </div>

              {/* Authentic Neon Quote Accent - From their actual Instagram display */}
              <div className="absolute -top-5 -left-3 sm:-left-6 px-4 py-3 rounded-2xl bg-[#15171d]/95 backdrop-blur-md border border-[#2b303c] shadow-xl max-w-[240px]">
                <div className="flex items-center gap-1.5 text-[#ea580c] text-xs font-bold font-heading uppercase tracking-wider">
                  <Flame className="w-4 h-4" />
                  <span>Filosofia Max’s</span>
                </div>
                <p className="text-xs text-[#e6e1d8] font-medium mt-1 leading-snug">
                  “Boas ideias nascem de grandes lanches!”
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] font-heading">
                A proposta da Max’s
              </span>
              
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-[1.05] tracking-tight">
                QUANDO A FOME É DE VERDADE, O LANCHE TAMBÉM TEM QUE SER.
              </h2>
            </div>

            <p className="text-base text-[#c7c1b5] leading-relaxed">
              Aqui em Três Coroas, a gente não brinca em serviço. Quando você pede um lanche na Max’s, você recebe um xis que preenche a chapa, ingrediente de primeira, queijo que puxa e carne suculenta.
            </p>

            <p className="text-base text-[#c7c1b5] leading-relaxed">
              Não tem economia, não tem miséria. Seja para matar a fome no balcão depois do trabalho, reunir a família no final de semana ou pedir um delivery quentinho no conforto de casa.
            </p>

            {/* Core Values / Authentic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-[#14161b] border border-[#232731] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Chapa quente e pão fresco</h4>
                  <p className="text-xs text-[#9c9589] mt-0.5">Preparado na hora, bem tostadinho e crocante.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#14161b] border border-[#232731] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Porções fartas de verdade</h4>
                  <p className="text-xs text-[#9c9589] mt-0.5">Dois tamanhos reais para você e sua galera.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#14161b] border border-[#232731] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Atendimento próximo</h4>
                  <p className="text-xs text-[#9c9589] mt-0.5">Sem mensagens robotizadas. Fala direto com a gente.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#14161b] border border-[#232731] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Preço justo e honesto</h4>
                  <p className="text-xs text-[#9c9589] mt-0.5">De R$ 14 no cachorro-quente ao X-Tudo completo.</p>
                </div>
              </div>
            </div>

            {/* Quick action button */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-heading font-bold text-white hover:text-[#ea580c] transition-colors group"
              >
                <span>Fazer um pedido agora mesmo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#ea580c]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
