import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Instagram, Facebook, Phone, MapPin, Clock, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08080a] border-t border-[#1a1c22] text-[#868074] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs text-[#9c9589] leading-relaxed max-w-sm">
              A lancheria tradicional de Três Coroas feita para quem tem fome de verdade. Lanches artesanais bem servidos, porções fartas e atendimento com o calor gaúcho.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#14161b] hover:bg-[#e03a14] border border-[#232731] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram Max's Lanches"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#14161b] hover:bg-[#e03a14] border border-[#232731] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook Max's Lanches"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#14161b] hover:bg-[#22c55e] border border-[#232731] flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp Max's Lanches"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#destaques" className="hover:text-white transition-colors">Queridinhos da Casa</a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-white transition-colors">Cardápio Completo</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">A Proposta Max’s</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações de Clientes</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Onde Estamos</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Contato & Endereço
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ea580c] flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address} - {COMPANY_INFO.neighborhood}<br />
                  {COMPANY_INFO.city} - {COMPANY_INFO.state}, {COMPANY_INFO.zipCode}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#ea580c] flex-shrink-0" />
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  {COMPANY_INFO.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Horários */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#ea580c]" />
              Horários
            </h4>
            <ul className="space-y-1.5 text-xs text-[#a39e93]">
              <li className="flex justify-between">
                <span>Seg a Qui:</span>
                <span className="text-white font-medium">07:30 – 20:30</span>
              </li>
              <li className="flex justify-between">
                <span>Sex e Sáb:</span>
                <span className="text-white font-medium">07:30 – 21:30</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-white font-medium">09:00–13:00 / 18:30–20:30</span>
              </li>
            </ul>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded bg-[#16181f] border border-[#232731] text-[11px] text-[#22c55e] font-semibold">
                ● Atendendo presencial e delivery
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-[#16181f] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Max’s Lanches. Todos os direitos reservados. Três Coroas — RS.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-[#e03a14] fill-[#e03a14]" /> e pão prensado no capricho.
          </p>
        </div>

      </div>
    </footer>
  );
};
