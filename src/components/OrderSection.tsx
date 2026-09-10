import React, { useState } from 'react';
import { PhoneCall, MessageCircle, ShoppingBag, MapPin, Clock, Check, Copy, ArrowRight, ShieldCheck, Bike } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuData';

interface OrderSectionProps {
  onOpenCart: () => void;
  cartCount: number;
}

export const OrderSection: React.FC<OrderSectionProps> = ({ onOpenCart, cartCount }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY_INFO.phoneRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="fazer-pedido" className="py-20 lg:py-28 relative bg-[#0a0b0d] border-t border-[#1b1e25] text-white">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16181f] border border-[#2a2e38] text-xs font-semibold text-[#f4efe6]">
            <span className="w-2 h-2 rounded-full bg-[#e03a14]" />
            <span className="text-[#ea580c] uppercase tracking-widest text-[11px] font-bold">
              Direto na Chapa
            </span>
            <span className="text-[#555047]">·</span>
            <span className="text-[#999285]">Sem Espera</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            FAÇA SEU PEDIDO
          </h2>
          <p className="text-sm sm:text-base text-[#a39e93] leading-relaxed">
            Monte seu lanche pelo cardápio ou peça direto pelo WhatsApp. Atendimento rápido, feito na hora com generosidade gaúcha.
          </p>
        </div>

        {/* 3 Action Pillars (Awwwards High-End Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: Pedir pelo WhatsApp */}
          <div className="rounded-3xl bg-[#12141a] border border-[#252a35] hover:border-[#ea580c]/50 p-7 flex flex-col justify-between transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e03a14]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e03a14]/15 border border-[#e03a14]/30 flex items-center justify-center text-[#ea580c]">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#ea580c] block">
                  Opção 1 · Mais Rápida
                </span>
                <h3 className="font-heading font-black text-xl text-white mt-1">
                  WhatsApp Oficial
                </h3>
              </div>

              <p className="text-xs text-[#a39e93] leading-relaxed">
                Fale direto com a equipe no balcão. Tire dúvidas, personalize o ponto da carne e envie seu pedido em segundos.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1d212a] space-y-3">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id="order-block-whatsapp-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-[#e03a14] hover:bg-[#c9320f] text-white font-heading font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#e03a14]/20 transition-all active:scale-[0.98]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>CHAMAR NO WHATSAPP</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="w-full py-2.5 px-3 rounded-lg bg-[#181b22] hover:bg-[#20242e] text-[#a39e93] hover:text-white text-[11px] font-medium flex items-center justify-center gap-2 transition-colors border border-[#232732]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Número copiado! {COMPANY_INFO.phone}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar {COMPANY_INFO.phone}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Pillar 2: Carrinho do Site */}
          <div className="rounded-3xl bg-[#12141a] border border-[#252a35] hover:border-white/30 p-7 flex flex-col justify-between transition-all group relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                <ShoppingBag className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#b5af9f] block">
                  Opção 2 · Monte no Site
                </span>
                <h3 className="font-heading font-black text-xl text-white mt-1">
                  Cardápio & Carrinho
                </h3>
              </div>

              <p className="text-xs text-[#a39e93] leading-relaxed">
                Navegue pelos Xis, adicione bacon extra ou ovo na chapa e confira o valor total calculado antes de enviar.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1d212a] space-y-3">
              <button
                onClick={onOpenCart}
                id="order-block-cart-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-[#1b1e27] hover:bg-[#252a36] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#2c3240] transition-all active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4 text-[#ea580c]" />
                <span>{cartCount > 0 ? `VER MEU CARRINHO (${cartCount})` : 'ABRIR PEDIDO DO SITE'}</span>
              </button>

              <a
                href="#cardapio"
                className="w-full py-2.5 px-3 text-[#8c8577] hover:text-white text-[11px] font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Ver cardápio completo</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Pillar 3: Retirada no Balcão */}
          <div className="rounded-3xl bg-[#12141a] border border-[#252a35] hover:border-white/30 p-7 flex flex-col justify-between transition-all group relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#f59e0b]">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#f59e0b] block">
                  Opção 3 · Retirada Local
                </span>
                <h3 className="font-heading font-black text-xl text-white mt-1">
                  Retirada no Balcão
                </h3>
              </div>

              <p className="text-xs text-[#a39e93] leading-relaxed">
                Mora perto ou está de passagem? Peça com antecedência e passe para retirar sua embalagem quentinha sem taxa de entrega.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1d212a] space-y-3">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                id="order-block-maps-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-[#1b1e27] hover:bg-[#252a36] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#2c3240] transition-all active:scale-[0.98]"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>COMO CHEGAR (MAPS)</span>
              </a>

              <div className="text-center text-[11px] text-[#868074]">
                Rua dos Caigangues, 515 · Três Coroas
              </div>
            </div>
          </div>

        </div>

        {/* Trust Badges Strip (Editorial & Clean, No AI Slop) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#111318] border border-[#1f232c] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="space-y-1">
            <span className="text-xs font-bold text-white font-heading uppercase block">Entrega Rápida</span>
            <span className="text-[11px] text-[#8e887b]">Em toda Três Coroas</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-white font-heading uppercase block">Pão na Chapa</span>
            <span className="text-[11px] text-[#8e887b]">Prensado e crocante</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-white font-heading uppercase block">Pagamentos</span>
            <span className="text-[11px] text-[#8e887b]">Pix, Cartões e Dinheiro</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-white font-heading uppercase block">Nota 4,9 no Google</span>
            <span className="text-[11px] text-[#8e887b]">Mais de 400 avaliações</span>
          </div>
        </div>

      </div>
    </section>
  );
};
