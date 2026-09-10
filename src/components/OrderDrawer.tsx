import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { COMPANY_INFO } from '../data/menuData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'retirada' | 'local'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, curr) => acc + curr.unitPrice * curr.quantity, 0);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  const handleSendToWhatsApp = () => {
    let message = `*NOVO PEDIDO - MAX'S LANCHES*\n`;
    message += `--------------------------------\n`;

    if (customerName.trim()) {
      message += `👤 *Cliente:* ${customerName.trim()}\n`;
    }

    const typeLabels = {
      delivery: '🛵 Delivery (Entrega em Três Coroas)',
      retirada: '🛍️ Retirada no Balcão',
      local: '🍽️ Consumo no Local'
    };
    message += `📍 *Tipo:* ${typeLabels[orderType]}\n`;

    if (orderType === 'delivery' && customerAddress.trim()) {
      message += `🏠 *Endereço:* ${customerAddress.trim()}\n`;
    }

    message += `--------------------------------\n`;
    message += `*ITENS DO PEDIDO:*\n\n`;

    cart.forEach((item, idx) => {
      message += `${idx + 1}. *${item.quantity}x ${item.item.name}*`;
      if (item.size && item.size !== 'normal') {
        message += ` (${item.size === 'media' ? 'Média' : 'Grande'})`;
      }
      message += ` - ${formatCurrency(item.unitPrice * item.quantity)}\n`;

      if (item.additions && item.additions.length > 0) {
        message += `   + Adicionais: ${item.additions.map(a => `${a.name} (+${formatCurrency(a.price)})`).join(', ')}\n`;
      }
      if (item.notes) {
        message += `   Obs: ${item.notes}\n`;
      }
    });

    message += `\n--------------------------------\n`;
    message += `💰 *VALOR ESTIMADO:* ${formatCurrency(subtotal)}\n`;
    message += `_(Taxa de entrega a confirmar conforme o bairro)_\n`;

    if (customerNotes.trim()) {
      message += `\n📝 *Observações Gerais:* ${customerNotes.trim()}\n`;
    }

    message += `\nOlá, Max's! Podem confirmar o tempo de preparo e o pedido? 😋`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-full sm:w-screen max-w-md bg-[#121316] border-l border-[#252830] text-[#f4efe6] shadow-2xl flex flex-col h-full">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#252830] flex items-center justify-between bg-[#16181d] flex-shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#e03a14]/15 border border-[#e03a14]/30 flex items-center justify-center text-[#e03a14] flex-shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h2 className="font-heading font-bold text-base sm:text-lg text-white truncate">Seu Pedido</h2>
                <p className="text-xs text-[#9c9589] truncate">
                  {cart.length === 0 ? 'Nenhum item adicionado' : `${cart.length} ${cart.length === 1 ? 'item' : 'itens'} no pedido`}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-[#9c9589] hover:text-white rounded-lg hover:bg-[#20232b] transition-colors flex-shrink-0"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1b1e24] border border-[#252830] flex items-center justify-center text-[#736c61]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-semibold text-white">Seu pedido está vazio</h3>
                  <p className="text-sm text-[#9c9589] max-w-[260px]">
                    Navegue pelo cardápio e monte seu lanche com o capricho da Max’s.
                  </p>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Ol%C3%A1%2C%20Max%27s!%20Quero%20fazer%20um%20pedido%20%F0%9F%98%8B`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e232d] hover:bg-[#252c38] text-sm font-semibold text-[#f4efe6] transition-colors border border-[#303744]"
                >
                  <Send className="w-4 h-4 text-[#22c55e]" />
                  Fazer pedido direto no WhatsApp
                </a>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-[#9c9589] pb-1">
                  <span>Itens selecionados</span>
                  <button
                    onClick={onClearCart}
                    className="hover:text-red-400 transition-colors flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" /> Limpar tudo
                  </button>
                </div>

                <div className="space-y-3">
                  {cart.map((cartItem) => (
                    <div
                      key={cartItem.cartItemId}
                      className="p-3.5 rounded-xl bg-[#181a1f] border border-[#252830] space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-heading font-bold text-sm text-white">
                            {cartItem.item.name}
                            {cartItem.size && cartItem.size !== 'normal' && (
                              <span className="ml-1.5 text-xs text-[#ea580c] font-medium">
                                ({cartItem.size === 'media' ? 'Média' : 'Grande'})
                              </span>
                            )}
                          </h4>
                          <span className="text-xs text-[#ea580c] font-semibold">
                            {formatCurrency(cartItem.unitPrice)}
                          </span>
                        </div>
                        <button
                          onClick={() => onRemoveItem(cartItem.cartItemId)}
                          className="text-[#645e54] hover:text-red-400 p-1 transition-colors"
                          title="Remover item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Additions list */}
                      {cartItem.additions && cartItem.additions.length > 0 && (
                        <div className="text-xs text-[#a39e93] bg-[#121316] p-2 rounded-lg border border-[#1f2228] space-y-0.5">
                          <span className="font-medium text-[#f4efe6]">Adicionais:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {cartItem.additions.map((add) => (
                              <span
                                key={add.id}
                                className="px-1.5 py-0.5 rounded bg-[#20242e] text-[10px] text-[#e5e0d8]"
                              >
                                + {add.name} ({formatCurrency(add.price)})
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Quantity control */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-[#9c9589]">
                          Total: <strong className="text-white">{formatCurrency(cartItem.unitPrice * cartItem.quantity)}</strong>
                        </span>
                        <div className="inline-flex items-center gap-2 bg-[#121316] border border-[#252830] rounded-lg p-1">
                          <button
                            onClick={() => onUpdateQuantity(cartItem.cartItemId, -1)}
                            className="w-6 h-6 flex items-center justify-center rounded bg-[#1f2229] hover:bg-[#2b303a] text-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-white">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(cartItem.cartItemId, 1)}
                            className="w-6 h-6 flex items-center justify-center rounded bg-[#1f2229] hover:bg-[#2b303a] text-white transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Options */}
                <div className="pt-3 border-t border-[#252830] space-y-3">
                  <span className="text-xs font-semibold text-[#f4efe6] block uppercase tracking-wider">
                    Como deseja receber?
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`p-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                        orderType === 'delivery'
                          ? 'bg-[#e03a14]/20 border-[#e03a14] text-white'
                          : 'bg-[#181a1f] border-[#252830] text-[#9c9589] hover:text-white'
                      }`}
                    >
                      🛵 Delivery
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('retirada')}
                      className={`p-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                        orderType === 'retirada'
                          ? 'bg-[#e03a14]/20 border-[#e03a14] text-white'
                          : 'bg-[#181a1f] border-[#252830] text-[#9c9589] hover:text-white'
                      }`}
                    >
                      🛍️ Retirada
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('local')}
                      className={`p-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                        orderType === 'local'
                          ? 'bg-[#e03a14]/20 border-[#e03a14] text-white'
                          : 'bg-[#181a1f] border-[#252830] text-[#9c9589] hover:text-white'
                      }`}
                    >
                      🍽️ No Local
                    </button>
                  </div>

                  {/* Customer details input */}
                  <div className="space-y-2 pt-1">
                    <input
                      type="text"
                      placeholder="Seu nome (opcional)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#181a1f] border border-[#252830] text-white placeholder-[#736c61] focus:outline-none focus:border-[#e03a14]"
                    />
                    {orderType === 'delivery' && (
                      <input
                        type="text"
                        placeholder="Rua, número e bairro em Três Coroas"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#181a1f] border border-[#252830] text-white placeholder-[#736c61] focus:outline-none focus:border-[#e03a14]"
                      />
                    )}
                    <input
                      type="text"
                      placeholder="Observações (ex: sem cebola, maionese extra)"
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#181a1f] border border-[#252830] text-white placeholder-[#736c61] focus:outline-none focus:border-[#e03a14]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer with WhatsApp CTA */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] bg-[#16181d] border-t border-[#252830] space-y-3 flex-shrink-0">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#a39e93]">Subtotal estimado</span>
                <span className="font-heading font-extrabold text-xl text-white">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-heading font-bold text-sm tracking-wide shadow-lg shadow-[#22c55e]/20 flex items-center justify-center gap-2 transition-all group active:scale-[0.99] min-h-[48px]"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 flex-shrink-0" />
                <span className="truncate">FINALIZAR PEDIDO NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>

              <p className="text-[11px] text-center text-[#827b70]">
                Você será direcionado para o WhatsApp oficial <strong>{COMPANY_INFO.phone}</strong> com o pedido pronto.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
