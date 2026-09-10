import React from 'react';
import { Instagram, MapPin, Clock, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/menuData';
import { BrandLogo } from './BrandLogo';

export const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram" className="py-20 lg:py-28 relative bg-[#09090b] text-white overflow-hidden">
      {/* Subtle background glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#ea580c]/20 via-[#ec4899]/10 to-transparent rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & Main Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-3 mb-10"
        >
          <div className="inline-flex items-center gap-2 text-[#ea580c] text-xs font-bold uppercase tracking-[0.2em]">
            <Instagram className="w-4 h-4 text-[#ea580c]" />
            <span>INSTAGRAM OFICIAL</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            SIGA O MAX'S LANCHES
          </h2>
        </motion.div>

        {/* The Exact Card from User Screenshot with Smooth Spring Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className="relative rounded-2xl bg-[#111216] border border-[#22252e] shadow-2xl overflow-hidden transition-colors hover:border-[#343846]"
        >
          
          {/* Top gradient accent line (orange to magenta/pink) */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#d946ef]" />

          <div className="p-6 sm:p-8 lg:p-10 space-y-6">
            
            {/* Top section: Avatar on left, details on right */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              
              {/* Circular Avatar with Glowing Breathing Instagram Ring */}
              <div className="relative flex-shrink-0">
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(234, 88, 12, 0.3)', 
                      '0 0 35px rgba(236, 72, 153, 0.5)', 
                      '0 0 20px rgba(234, 88, 12, 0.3)'
                    ] 
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] bg-gradient-to-tr from-[#f97316] via-[#ea580c] to-[#ec4899] flex items-center justify-center"
                >
                  <div className="w-full h-full rounded-full bg-[#0d0e12] flex items-center justify-center overflow-hidden p-2">
                    <BrandLogo size="md" showText={false} />
                  </div>
                </motion.div>
              </div>

              {/* Account Info */}
              <div className="flex-1 text-center sm:text-left space-y-3 w-full">
                
                {/* Username + Verified Badge + "Seguir no Instagram" Button */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-black text-2xl text-white tracking-tight">
                      maxslanches
                    </h3>
                    {/* Blue checkmark */}
                    <div className="w-5 h-5 rounded-full bg-[#0095f6] flex items-center justify-center text-white text-[11px] font-bold shadow-sm">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  </div>

                  {/* Gradient Pill Button: Seguir no Instagram */}
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    id="instagram-follow-top-btn"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#d946ef] text-white font-heading font-bold text-xs tracking-wide shadow-md shadow-[#ea580c]/25 transition-opacity hover:opacity-95"
                  >
                    <Instagram className="w-3.5 h-3.5 text-white" />
                    <span>Seguir no Instagram</span>
                  </motion.a>
                </div>

                {/* Follower Stats Bar */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-[#8e8a82]">
                  <div>
                    <strong className="text-white font-bold font-heading text-sm sm:text-base">903</strong>{' '}
                    <span>seguidores</span>
                  </div>
                  <span className="text-[#3a3c44]">•</span>
                  <div>
                    <strong className="text-white font-bold font-heading text-sm sm:text-base">55</strong>{' '}
                    <span>seguindo</span>
                  </div>
                  <span className="text-[#3a3c44]">•</span>
                  <div>
                    <strong className="text-white font-bold">Três Coroas</strong>{' '}
                    <span>• RS</span>
                  </div>
                </div>

                {/* Subtle Divider Line */}
                <div className="w-full h-px bg-[#20232b] my-3" />

                {/* Bio text block */}
                <div className="space-y-1 text-xs sm:text-[13px] leading-relaxed">
                  <h4 className="font-heading font-black text-white uppercase tracking-wide text-sm">
                    MAX'S LANCHES
                  </h4>
                  <p className="text-[#ea580c] font-bold tracking-wide">
                    LANCHES E PORÇÕES TRÊS COROAS 💥
                  </p>
                  <p className="text-[#9f9b93] flex items-center justify-center sm:justify-start gap-1.5 pt-1">
                    <span className="text-rose-400">📍</span>
                    <span>R. dos Caigangues, 515 - Sander, Três Coroas - RS</span>
                  </p>
                  <p className="text-[#9f9b93] flex items-center justify-center sm:justify-start gap-1.5">
                    <span className="text-amber-400">⏰</span>
                    <span>Seg a Sáb: 18:30 às 23h • Peça pelo WhatsApp</span>
                  </p>
                </div>

              </div>

            </div>

            {/* Bottom Full-Width Button matching screenshot */}
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                id="instagram-access-profile-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-[#17181e] hover:bg-[#1f2129] border border-[#2b2e38] hover:border-[#ea580c]/50 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-inner group"
              >
                <Instagram className="w-4 h-4 text-[#ea580c] group-hover:scale-110 transition-transform" />
                <span className="tracking-widest">ACESSAR PERFIL @MAXSLANCHES</span>
              </motion.a>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
