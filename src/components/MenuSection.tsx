import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Sparkles, MessageCircle, X } from 'lucide-react';
import { MenuItem, AdditionItem } from '../types';
import { MENU_ITEMS, ADDITIONS_LIST, COMPANY_INFO } from '../data/menuData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, size?: 'normal' | 'media' | 'grande', additions?: AdditionItem[], notes?: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);
  
  // Customizer modal state
  const [selectedSize, setSelectedSize] = useState<'normal' | 'media' | 'grande'>('normal');
  const [selectedAdditions, setSelectedAdditions] = useState<AdditionItem[]>([]);
  const [itemNotes, setItemNotes] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Todos os Itens' },
    { id: 'xis', label: 'Xis-Lanches' },
    { id: 'destaque', label: 'Destaque da Casa' },
    { id: 'outros', label: 'Outros Lanches' },
    { id: 'porcoes', label: 'Porções' },
    { id: 'bebidas', label: 'Bebidas' },
    { id: 'adicionais', label: 'Adicionais na Chapa' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'todos' ? true : item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subCategory && item.subCategory.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  const handleOpenCustomize = (item: MenuItem) => {
    setSelectedItemForModal(item);
    setSelectedSize(item.priceSecondary ? 'media' : 'normal');
    setSelectedAdditions([]);
    setItemNotes('');
  };

  const handleToggleAddition = (add: AdditionItem) => {
    if (selectedAdditions.some((a) => a.id === add.id)) {
      setSelectedAdditions(selectedAdditions.filter((a) => a.id !== add.id));
    } else {
      setSelectedAdditions([...selectedAdditions, add]);
    }
  };

  const handleConfirmAddToCart = () => {
    if (!selectedItemForModal) return;
    onAddToCart(selectedItemForModal, selectedSize, selectedAdditions, itemNotes);
    setSelectedItemForModal(null);
  };

  const modalPrice = useMemo(() => {
    if (!selectedItemForModal) return 0;
    let base = selectedItemForModal.price;
    if (selectedItemForModal.priceSecondary && selectedSize === 'grande') {
      base = selectedItemForModal.priceSecondary;
    }
    const additionsTotal = selectedAdditions.reduce((acc, a) => acc + a.price, 0);
    return base + additionsTotal;
  }, [selectedItemForModal, selectedSize, selectedAdditions]);

  return (
    <section id="cardapio" className="py-20 lg:py-28 relative bg-[#0e1014] border-t border-[#1e222a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#ea580c]">
            Feito na Hora · Sem Miséria
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            CARDÁPIO DA MAX’S
          </h2>
          <p className="text-sm sm:text-base text-[#a39e93]">
            Confira todos os lanches, porções bem servidas e bebidas geladas. Escolha seus favoritos e monte seu pedido direto no WhatsApp.
          </p>
        </div>

        {/* Filter controls & Search */}
        <div className="space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#e03a14] text-white shadow-lg shadow-[#e03a14]/25'
                    : 'bg-[#15171d] text-[#9c9589] hover:text-white hover:bg-[#1f2229] border border-[#232731]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#736c61] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar no cardápio (ex: x-bacon, violinha, brahma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#14161b] border border-[#252830] text-sm text-white placeholder-[#736c61] focus:outline-none focus:border-[#e03a14] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#736c61] hover:text-white"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Adicionais Spotlight Banner if category is adicionais or todos */}
        {(activeCategory === 'adicionais' || activeCategory === 'todos') && (
          <div className="p-6 rounded-2xl bg-[#14161b] border border-[#252830] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#f59e0b]" />
                <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                  Turbine seu Lanche (Adicionais na Chapa)
                </h3>
              </div>
              <span className="text-[11px] text-[#868074]">
                Adicione no seu lanche ao pedir
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pt-1">
              {ADDITIONS_LIST.map((add) => (
                <div
                  key={add.id}
                  className="p-2 rounded-lg bg-[#1a1d24] border border-[#262a35] flex items-center justify-between text-xs"
                >
                  <span className="text-[#e2ddd5] font-medium">{add.name}</span>
                  <span className="text-[#ea580c] font-bold">+{formatCurrency(add.price)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Items Grid */}
        {activeCategory !== 'adicionais' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-[#14161c] border border-[#222630] hover:border-[#353a47] p-5 flex flex-col justify-between transition-all hover:-translate-y-0.5 group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      {item.badge && (
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#e03a14]/20 border border-[#e03a14]/40 text-[#ea580c] mb-1.5">
                          {item.badge}
                        </span>
                      )}
                      <h4 className="font-heading font-bold text-lg text-white group-hover:text-[#ea580c] transition-colors">
                        {item.name}
                      </h4>
                      {item.subCategory && (
                        <span className="text-[11px] text-[#736c61] uppercase tracking-wider block">
                          {item.subCategory}
                        </span>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="font-heading font-black text-lg text-white">
                        {formatCurrency(item.price)}
                      </span>
                      {item.priceSecondary && (
                        <span className="text-[11px] text-[#a39e93] block">
                          ou {formatCurrency(item.priceSecondary)} ({item.secondaryLabel})
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-[#9c9589] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-[#1d2028] flex items-center justify-between gap-3">
                  {item.category === 'xis' ? (
                    <button
                      onClick={() => handleOpenCustomize(item)}
                      className="text-xs text-[#a39e93] hover:text-[#ea580c] font-medium transition-colors"
                    >
                      + Adicionais / Personalizar
                    </button>
                  ) : (
                    <span className="text-[11px] text-[#635c51]">Feito na hora</span>
                  )}

                  <button
                    onClick={() => handleOpenCustomize(item)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#1e222b] hover:bg-[#e03a14] text-white text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    QUERO PEDIR
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && activeCategory !== 'adicionais' && (
          <div className="text-center py-12 text-[#9c9589]">
            <p>Nenhum item encontrado para "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('todos'); }}
              className="mt-2 text-xs text-[#ea580c] underline"
            >
              Ver todo o cardápio
            </button>
          </div>
        )}

        {/* Direct WhatsApp Callout */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#181a20] to-[#14161c] border border-[#272b35] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-base text-white">
              Prefere pedir pelo telefone ou WhatsApp sem frescura?
            </h4>
            <p className="text-xs text-[#a39e93]">
              Nosso time está a postos em Três Coroas para atender você.
            </p>
          </div>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#22c55e]/20 transition-all flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            CHAMAR NO WHATSAPP ({COMPANY_INFO.phone})
          </a>
        </div>

      </div>

      {/* Item Customizer Modal */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-[#14161b] border border-[#2b303c] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-[#222630] flex items-center justify-between bg-[#181a22]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea580c] block">
                  Adicionar ao Pedido
                </span>
                <h3 className="font-heading font-bold text-lg text-white">
                  {selectedItemForModal.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="p-1.5 rounded-lg text-[#736c61] hover:text-white hover:bg-[#252a35] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs">
              <p className="text-[#a39e93] text-xs">
                {selectedItemForModal.description}
              </p>

              {/* If item has two sizes (like batata frita) */}
              {selectedItemForModal.priceSecondary && (
                <div className="space-y-2 pt-2 border-t border-[#222630]">
                  <span className="font-bold uppercase tracking-wider text-white block">
                    Escolha o tamanho:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedSize('media')}
                      className={`p-3 rounded-xl border text-center font-heading font-bold ${
                        selectedSize === 'media'
                          ? 'border-[#e03a14] bg-[#e03a14]/15 text-white'
                          : 'border-[#252830] bg-[#1a1d24] text-[#a39e93]'
                      }`}
                    >
                      Média · {formatCurrency(selectedItemForModal.price)}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedSize('grande')}
                      className={`p-3 rounded-xl border text-center font-heading font-bold ${
                        selectedSize === 'grande'
                          ? 'border-[#e03a14] bg-[#e03a14]/15 text-white'
                          : 'border-[#252830] bg-[#1a1d24] text-[#a39e93]'
                      }`}
                    >
                      Grande · {formatCurrency(selectedItemForModal.priceSecondary)}
                    </button>
                  </div>
                </div>
              )}

              {/* If item is a XIS, show additions list */}
              {selectedItemForModal.category === 'xis' && (
                <div className="space-y-2 pt-2 border-t border-[#222630]">
                  <div className="flex items-center justify-between">
                    <span className="font-bold uppercase tracking-wider text-white">
                      Adicionais dentro do lanche:
                    </span>
                    <span className="text-[10px] text-[#736c61]">Opcional</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {ADDITIONS_LIST.map((add) => {
                      const isSelected = selectedAdditions.some((a) => a.id === add.id);
                      return (
                        <button
                          key={add.id}
                          type="button"
                          onClick={() => handleToggleAddition(add)}
                          className={`p-2 rounded-lg border flex items-center justify-between text-left transition-all ${
                            isSelected
                              ? 'border-[#ea580c] bg-[#ea580c]/20 text-white'
                              : 'border-[#252830] bg-[#1a1d24] text-[#a39e93] hover:text-white'
                          }`}
                        >
                          <span className="text-xs font-medium">{add.name}</span>
                          <span className="text-[11px] font-bold text-[#f59e0b]">
                            +{formatCurrency(add.price)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Notes */}
              <div className="space-y-1.5 pt-2 border-t border-[#222630]">
                <label className="font-bold uppercase tracking-wider text-white block">
                  Observação especial:
                </label>
                <input
                  type="text"
                  placeholder="Ex: Ponto da carne, sem cebola, maionese à parte..."
                  value={itemNotes}
                  onChange={(e) => setItemNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#1a1d24] border border-[#252830] text-white placeholder-[#736c61] focus:outline-none focus:border-[#e03a14]"
                />
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#181a22] border-t border-[#222630] flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-[#736c61] block uppercase">Total deste item</span>
                <span className="font-heading font-black text-xl text-white">
                  {formatCurrency(modalPrice)}
                </span>
              </div>
              <button
                onClick={handleConfirmAddToCart}
                className="px-6 py-3 rounded-xl bg-[#e03a14] hover:bg-[#c9320f] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#e03a14]/25 flex items-center gap-2 transition-all active:scale-95"
              >
                <Check className="w-4 h-4" />
                ADICIONAR AO PEDIDO
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
