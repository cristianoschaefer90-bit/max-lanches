import React, { useState, useEffect } from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-3.5 sm:right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto"
        >
          
          {/* Floating Cart Button (if items in cart) */}
          <AnimatePresence>
            {cartCount > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                onClick={onOpenCart}
                className="p-3 sm:p-3.5 rounded-full bg-[#181a22] text-white border border-[#2e3342] shadow-2xl flex items-center gap-2 group min-w-[44px] min-h-[44px]"
                title="Ver itens no seu pedido"
                aria-label="Abrir carrinho de compras"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-[#ea580c]" />
                  <motion.span 
                    key={cartCount}
                    initial={{ scale: 0.6 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#e03a14] text-white text-[11px] font-extrabold flex items-center justify-center shadow"
                  >
                    {cartCount}
                  </motion.span>
                </div>
                <span className="hidden sm:inline text-xs font-bold text-[#f4efe6] pr-1">
                  Ver Pedido
                </span>
              </motion.button>
            )}
          </AnimatePresence>

          {/* WhatsApp Floating Action with Continuous Soft Pulse Aura */}
          <div className="relative">
            {/* Ambient pulse ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.28, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 rounded-full bg-[#22c55e] -z-10 pointer-events-none"
            />

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white shadow-2xl shadow-[#22c55e]/40 min-w-[48px] min-h-[48px]"
              aria-label="Pedir no WhatsApp da Max's Lanches"
            >
              <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-12 flex-shrink-0" />
              <div className="hidden sm:flex flex-col text-left leading-tight">
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-90">
                  Fazer Pedido
                </span>
                <span className="font-heading font-extrabold text-sm tracking-wide">
                  (51) 99942-7923
                </span>
              </div>
            </motion.a>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
