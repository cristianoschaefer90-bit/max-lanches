import React from 'react';
import { Flame, CheckCircle2, ArrowRight, Star, Heart, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/menuData';

export const AboutConcept: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 relative bg-[#0c0d11] overflow-hidden border-t border-[#1a1d24]">
      {/* Subtle background glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#e03a14] rounded-full blur-[130px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Graphic Editorial Brand Card (Zero Food Photos) */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden border border-[#262a34] bg-[#12141a] p-8 sm:p-10 shadow-2xl space-y-6"
            >
              
              {/* Brand philosophy badge */}
              <div className="flex items-center justify-between gap-2 border-b border-[#1f232d] pb-5">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#e03a14]/15 border border-[#e03a14]/30 flex items-center justify-center text-[#ea580c]">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#ea580c] block">
                      Filosofia Max’s
                    </span>
                    <h3 className="font-heading font-black text-lg text-white">
                      Tradição da Chapa Gaúcha
                    </h3>
                  </div>
                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-[#181b22] border border-[#272c38] text-[#f59e0b] font-bold">
                  ★ 4,9 no Google
                </span>
              </div>

              {/* Big Quote */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#161820] to-[#0e1015] border border-[#20242e] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ea580c]/5 rounded-full blur-2xl pointer-events-none" />
                <p className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-snug">
                  “BOAS IDEIAS NASCEM DE GRANDES LANCHES!”
                </p>
                <p className="text-xs text-[#a39e93] mt-2 font-medium">
                  — O lema oficial que estampa nosso espaço em Três Coroas.
                </p>
              </div>

              {/* 3 Pillars of Craftsmanship */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="p-4 rounded-xl bg-[#15171e] border border-[#21252f] space-y-1">
                  <Award className="w-5 h-5 text-[#ea580c] mx-auto" />
                  <h4 className="font-heading font-bold text-xs text-white uppercase">Pão na Chapa</h4>
                  <p className="text-[11px] text-[#868074]">Prensado e crocante</p>
                </div>

                <div className="p-4 rounded-xl bg-[#15171e] border border-[#21252f] space-y-1">
                  <Heart className="w-5 h-5 text-[#e11d48] mx-auto" />
                  <h4 className="font-heading font-bold text-xs text-white uppercase">Sem Miséria</h4>
                  <p className="text-[11px] text-[#868074]">Porção farta no prato</p>
                </div>

                <div className="p-4 rounded-xl bg-[#15171e] border border-[#21252f] space-y-1">
                  <ShieldCheck className="w-5 h-5 text-[#22c55e] mx-auto" />
                  <h4 className="font-heading font-bold text-xs text-white uppercase">Feito na Hora</h4>
                  <p className="text-[11px] text-[#868074]">Carne no ponto exato</p>
                </div>
              </div>

              {/* Address indicator */}
              <div className="text-center text-xs text-[#868074] pt-2">
                Rua dos Caigangues, 515 · Bairro Sander · Três Coroas - RS
              </div>

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
