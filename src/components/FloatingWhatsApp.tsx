import React, { useState, useEffect } from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuData';

interface FloatingWhatsAppProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  cartCount,
  onOpenCart
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button once user scrolls past top 150px
      setIsVisible(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 animate-in fade-in slide-in-from-bottom-6 duration-300">
      
      {/* Floating Cart Button (if items in cart) */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          className="p-3.5 rounded-full bg-[#181a22] text-white border border-[#2e3342] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
          title="Ver itens no seu pedido"
          aria-label="Abrir carrinho de compras"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-[#ea580c]" />
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#e03a14] text-white text-[11px] font-extrabold flex items-center justify-center animate-pulse">
              {cartCount}
            </span>
          </div>
          <span className="hidden sm:inline text-xs font-bold text-[#f4efe6] pr-1">
            Ver Pedido
          </span>
        </button>
      )}

      {/* WhatsApp Floating Action */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white shadow-2xl shadow-[#22c55e]/40 transition-all hover:scale-105 active:scale-95"
        aria-label="Pedir no WhatsApp da Max's Lanches"
      >
        <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-12" />
        <div className="hidden sm:flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase font-bold tracking-wider opacity-90">
            Fazer Pedido
          </span>
          <span className="font-heading font-extrabold text-sm tracking-wide">
            (51) 99942-7923
          </span>
        </div>
      </a>
    </div>
  );
};
