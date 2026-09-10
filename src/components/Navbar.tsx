import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, PhoneCall, Clock, MapPin, Instagram } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate open status based on Brazil / RS timezone
  useEffect(() => {
    try {
      const now = new Date();
      // Use local client time / approximation
      const day = now.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      let open = false;
      if (day >= 1 && day <= 4) {
        // Mon-Thu 07:30 - 20:30
        open = totalMinutes >= 7 * 60 + 30 && totalMinutes <= 20 * 60 + 30;
      } else if (day === 5 || day === 6) {
        // Fri-Sat 07:30 - 21:30
        open = totalMinutes >= 7 * 60 + 30 && totalMinutes <= 21 * 60 + 30;
      } else if (day === 0) {
        // Sun 09:00 - 13:00 or 18:30 - 20:30
        open = (totalMinutes >= 9 * 60 && totalMinutes <= 13 * 60) ||
               (totalMinutes >= 18 * 60 + 30 && totalMinutes <= 20 * 60 + 30);
      }
      setIsOpenNow(open);
    } catch {
      setIsOpenNow(true);
    }
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Destaques', href: '#destaques' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Sobre a Max’s', href: '#sobre' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0e11]/95 backdrop-blur-md border-b border-[#252830] py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#0b0c0e]/95 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        {/* Brand Identity */}
        <a href="#inicio" className="group flex items-center gap-2 focus:outline-none min-w-0" id="navbar-brand-logo">
          <BrandLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#d1cbbf] hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e03a14] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181a1f] border border-[#252830] text-xs">
            <span
              className={`w-2 h-2 rounded-full ${
                isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
              }`}
            />
            <span className="text-[#a8a296] font-medium text-[11px]">
              {isOpenNow ? 'Aberto hoje' : 'Consulte horários'}
            </span>
          </div>

          {/* Cart Icon / Order Trigger */}
          <button
            onClick={onOpenCart}
            className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-[#181a1f] hover:bg-[#22252c] border border-[#252830] text-white transition-all group focus:outline-none"
            title="Abrir carrinho de pedidos"
            aria-label="Ver pedido"
          >
            <ShoppingBag className="w-5 h-5 text-[#f4efe6] transition-transform group-hover:scale-110" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#e03a14] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary CTA: WhatsApp */}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#e03a14] hover:bg-[#c9320f] text-white text-xs font-bold font-heading tracking-wider shadow-md shadow-[#e03a14]/20 transition-all hover:shadow-lg active:scale-95"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            PEDIR AGORA
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-[#181a1f] border border-[#252830] text-white hover:bg-[#22252c] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121316] border-b border-[#252830] px-5 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#252830]">
            <div className="flex items-center gap-2 text-xs text-[#a8a296]">
              <Clock className="w-3.5 h-3.5 text-[#e03a14]" />
              <span>Seg–Sáb a partir das 07:30</span>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#1f232b] text-[#22c55e]">
              4,9 ★ Google
            </span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-semibold text-[#f4efe6] hover:text-[#e03a14] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-[#e03a14] text-white text-center font-heading font-bold text-sm tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#e03a14]/25"
            >
              <PhoneCall className="w-4 h-4" />
              PEDIR PELO WHATSAPP ({COMPANY_INFO.phone})
            </a>
            <div className="flex items-center justify-between text-xs text-[#9c9589] pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#e03a14]" /> Três Coroas - RS
              </span>
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-white"
              >
                <Instagram className="w-3.5 h-3.5 text-[#ea580c]" /> {COMPANY_INFO.instagram}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
