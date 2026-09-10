import React, { useState, useEffect } from 'react';
import { Flame, CheckCircle2, ArrowRight, Instagram, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/menuData';
import { photoStore } from '../utils/photoStore';

export const AboutConcept: React.FC = () => {
  const [, setTick] = useState(0);

  useEffect(() => {
    const unsub = photoStore.subscribe(() => setTick((t) => t + 1));
    return unsub;
  }, []);

  const xisImg = photoStore.getPhoto(
    'xis-prensado-recheado',
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=85&w=900&auto=format&fit=crop'
  );

  const porcaoImg = photoStore.getPhoto(
    'batata-frita-artesanal',
    'https://images.unsplash.com/photo-1576107232684-1279f3908594?q=85&w=800&auto=format&fit=crop'
  );

  return (
    <section id="sobre" className="py-20 lg:py-28 relative bg-[#0d0e12] overflow-hidden border-t border-[#1a1d24]">
      {/* Subtle background glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#e03a14] rounded-full blur-[130px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with asymmetric images */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              
              {/* Primary Large Image: Xis sendo prensado e preparado */}
              <div className="relative rounded-3xl overflow-hidden border border-[#272b35] bg-[#14161b] shadow-2xl aspect-[4/3] group">
                <img
                  src={xisImg}
                  alt="Lanche artesanal caprichado na chapa quente da Max’s Lanches"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#ea580c] block">
                      Direto da Chapa
                    </span>
                    <p className="font-heading font-bold text-base sm:text-lg text-white">
                      Pão prensado no capricho com queijo derretido
                    </p>
                  </div>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold hover:border-[#ea580c] transition-all"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span className="hidden xs:inline">@maxslanches</span>
                    <ArrowUpRight className="w-3 h-3 text-[#a39e93]" />
                  </a>
                </div>
              </div>

              {/* Overlapping Secondary Image: Local vibe & generous portion */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden sm:block absolute -bottom-6 right-0 md:-bottom-8 md:-right-2 w-3/5 rounded-2xl overflow-hidden border-2 border-[#1f2229] shadow-2xl aspect-square group"
              >
                <img
                  src={porcaoImg}
                  alt="Porção farta de petiscos da Max’s Lanches"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-bold text-[#fbbf24] uppercase tracking-wider block">
                    Porções da Casa
                  </span>
                  <p className="text-xs font-semibold text-white">
                    Para dividir com os amigos
                  </p>
                </div>
              </motion.div>

              {/* Authentic Neon Quote Accent - From their actual Instagram display */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 left-2 md:-left-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl bg-[#15171d]/95 backdrop-blur-md border border-[#2b303c] shadow-xl max-w-[210px] sm:max-w-[240px]"
              >
                <div className="flex items-center gap-1.5 text-[#ea580c] text-xs font-bold font-heading uppercase tracking-wider">
                  <Flame className="w-4 h-4" />
                  <span>Filosofia Max’s</span>
                </div>
                <p className="text-xs text-[#e6e1d8] font-medium mt-1 leading-snug">
                  “Boas ideias nascem de grandes lanches!”
                </p>
              </motion.div>

            </motion.div>
          </div>

          {/* Right Column: Narrative Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] font-heading">
                A proposta da Max’s
              </span>
              
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-[1.05] tracking-tight break-words">
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
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-3.5 rounded-xl bg-[#14161b] border border-[#232731] flex items-start gap-3 transition-colors hover:border-[#ea580c]/40"
              >
                <CheckCircle2 className="w-5 h-5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Chapa quente e pão fresco</h4>
                  <p className="text-xs text-[#9c9589] mt-0.5">Preparado na hora, bem tostadinho e crocante.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-3.5 rounded-xl bg-[#14161b] border border-[#232731] flex items-start gap-3 transition-colors hover:border-[#ea580c]/40"
              >
                <CheckCircle2 className="w-5 h-5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Porções fartas de verdade</h4>
                  <p className="text-xs text-[#9c9589] mt-0.5">Dois tamanhos reais para você e sua galera.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-3.5 rounded-xl bg-[#14161b] border border-[#232731] flex items-start gap-3 transition-colors hover:border-[#ea580c]/40"
              >
                <CheckCircle2 className="w-5 h-5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Atendimento próximo</h4>
                  <p className="text-xs text-[#9c9589] mt-0.5">Sem mensagens robotizadas. Fala direto com a gente.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-3.5 rounded-xl bg-[#14161b] border border-[#232731] flex items-start gap-3 transition-colors hover:border-[#ea580c]/40"
              >
                <CheckCircle2 className="w-5 h-5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Preço justo e honesto</h4>
                  <p className="text-xs text-[#9c9589] mt-0.5">De R$ 14 no cachorro-quente ao X-Tudo completo.</p>
                </div>
              </motion.div>
            </div>

            {/* Quick action button */}
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-heading font-bold text-white hover:text-[#ea580c] transition-colors group"
              >
                <span>Fazer um pedido agora mesmo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#ea580c]" />
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
