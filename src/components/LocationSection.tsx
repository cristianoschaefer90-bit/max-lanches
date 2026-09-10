import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check, Car, ShoppingBag, Utensils } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/menuData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="localizacao" className="py-20 lg:py-28 relative bg-[#0b0c0e] border-t border-[#1a1c22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header with reveal animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1f222a]"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#ea580c]">
              <MapPin className="w-4 h-4" />
              <span>Onde Estamos</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              LOCALIZAÇÃO & HORÁRIOS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#a39e93] max-w-md">
            Perto de você no bairro Sander, em Três Coroas. Venha saborear na mesa ou peça para retirar quentinho.
          </p>
        </motion.div>

        {/* 2-Column Info & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Schedules & Modalities */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-between"
          >
            
            {/* Address Card */}
            <motion.div 
              whileHover={{ y: -3, borderColor: 'rgba(234, 88, 12, 0.4)' }}
              className="p-6 sm:p-7 rounded-2xl bg-[#14161c] border border-[#232731] space-y-4 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ea580c] block">
                    Endereço Completo
                  </span>
                  <h3 className="font-heading font-black text-xl text-white">
                    {COMPANY_INFO.address}
                  </h3>
                  <p className="text-sm text-[#c7c1b5]">
                    Bairro {COMPANY_INFO.neighborhood} · {COMPANY_INFO.city} - {COMPANY_INFO.state}
                  </p>
                  <p className="text-xs text-[#868074]">
                    CEP {COMPANY_INFO.zipCode}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyAddress}
                  className="p-2.5 rounded-xl bg-[#1b1e25] hover:bg-[#232731] border border-[#2a2f3a] text-white transition-colors"
                  title="Copiar endereço"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#a39e93]" />}
                </motion.button>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#e03a14] hover:bg-[#c9320f] text-white text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-md shadow-[#e03a14]/20 min-h-[44px]"
                >
                  <Navigation className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>COMO CHEGAR (GOOGLE MAPS)</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1b1e25] hover:bg-[#232731] border border-[#2c313d] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#22c55e] flex-shrink-0" />
                  <span>LIGAR: {COMPANY_INFO.phone}</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Schedules Card */}
            <motion.div 
              whileHover={{ y: -3, borderColor: 'rgba(234, 88, 12, 0.4)' }}
              className="p-6 sm:p-7 rounded-2xl bg-[#14161c] border border-[#232731] space-y-4 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#ea580c]" />
                <h3 className="font-heading font-bold text-base text-white uppercase tracking-wider">
                  Horários de Atendimento
                </h3>
              </div>

              <div className="space-y-3">
                {COMPANY_INFO.schedules.map((sched, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#191c23] border border-[#222631] text-xs"
                  >
                    <span className="font-medium text-[#e6e1d8]">{sched.day}</span>
                    <span className="font-bold text-[#ea580c] font-heading text-sm">
                      {sched.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#736c61]">
                * Atendimento estendido aos finais de semana para matar a fome da noite.
              </p>
            </motion.div>

            {/* Service Modalities */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <motion.div 
                whileHover={{ y: -3, borderColor: 'rgba(234, 88, 12, 0.4)' }}
                className="p-3 rounded-xl bg-[#14161c] border border-[#232731] space-y-1 transition-colors"
              >
                <Utensils className="w-4 h-4 text-[#ea580c] mx-auto" />
                <span className="text-xs font-bold text-white block">No Local</span>
                <span className="text-[10px] text-[#868074]">Mesas confortáveis</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -3, borderColor: 'rgba(234, 88, 12, 0.4)' }}
                className="p-3 rounded-xl bg-[#14161c] border border-[#232731] space-y-1 transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-[#ea580c] mx-auto" />
                <span className="text-xs font-bold text-white block">Retirada</span>
                <span className="text-[10px] text-[#868074]">Pegue quentinho</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -3, borderColor: 'rgba(234, 88, 12, 0.4)' }}
                className="p-3 rounded-xl bg-[#14161c] border border-[#232731] space-y-1 transition-colors"
              >
                <Car className="w-4 h-4 text-[#ea580c] mx-auto" />
                <span className="text-xs font-bold text-white block">Delivery</span>
                <span className="text-[10px] text-[#868074]">Em Três Coroas</span>
              </motion.div>
            </div>

          </motion.div>

          {/* Right Column: Google Maps Visual Embed with Reveal */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#272b35] bg-[#14161c] min-h-[380px] shadow-2xl flex flex-col"
          >
            <iframe
              title="Mapa de localização Max's Lanches Três Coroas RS"
              src="https://maps.google.com/maps?q=Rua+dos+Caigangues,+515+-+Sander,+Tr%C3%AAs+Coroas+-+RS&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full flex-1 border-0 min-h-[340px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Floating Location Overlay Card */}
            <div className="p-4 bg-[#121419] border-t border-[#232731] flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3">
              <div className="space-y-0.5 min-w-0">
                <span className="text-xs font-bold text-white block truncate">
                  Max’s Lanches · Três Coroas - RS
                </span>
                <span className="text-[11px] text-[#868074] block">
                  Fácil acesso com estacionamento em frente e no entorno
                </span>
              </div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full xs:w-auto text-center justify-center px-3.5 py-2 rounded-lg bg-[#1f232c] hover:bg-[#282d38] border border-[#2f3542] text-xs font-bold text-white transition-colors flex items-center gap-1.5 flex-shrink-0 min-h-[40px]"
              >
                Abrir Mapa ↗
              </motion.a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
