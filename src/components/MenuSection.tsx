import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Sparkles, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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
    { id: 'todos', label: 'Todos' },
    { id: 'xis', label: 'Xis & Lanches' },
    { id: 'porcoes', label: 'Porções' },
    { id: 'bebidas', label: 'Bebidas' },
    { id: 'adicionais', label: 'Adicionais' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      let matchesCategory = false;
      if (activeCategory === 'todos') {
        matchesCategory = true;
      } else if (activeCategory === 'xis') {
        matchesCategory = item.category === 'xis' || item.category === 'destaque' || item.category === 'outros';
      } else {
        matchesCategory = item.category === activeCategory;
      }
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
    <section id="cardapio" className="py-20 lg:py-28 relative bg-[#0e1014] border-t border-[#1e222a] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#ea580c]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Header with entrance animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#ea580c]">
            Feito na Hora · Sem Miséria
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            CARDÁPIO DA MAX’S
          </h2>
          <p className="text-sm sm:text-base text-[#a39e93]">
            Confira todos os lanches, porções bem servidas e bebidas geladas. Escolha seus favoritos e monte seu pedido direto no WhatsApp.
          </p>
        </motion.div>

        {/* Filter controls & Search with Smooth Sliding Tab Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {/* Category Tabs with Animated Pill */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#13151b] border border-[#232731] overflow-x-auto scrollbar-none justify-start md:justify-center w-full max-w-fit mx-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-200 flex-shrink-0 min-h-[44px] z-10 ${
                    isActive ? 'text-white' : 'text-[#9c9589] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="menuActiveTab"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 bg-[#e03a14] rounded-xl shadow-lg shadow-[#e03a14]/30 -z-10"
                    />
                  )}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search bar with focus animation */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#736c61] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar no cardápio (ex: x-bacon, violinha, brahma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#14161b] border border-[#252830] text-sm text-white placeholder-[#736c61] focus:outline-none focus:border-[#e03a14] focus:ring-2 focus:ring-[#e03a14]/20 transition-all"
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
        </motion.div>

        {/* Adicionais Spotlight Banner */}
        {(activeCategory === 'adicionais' || activeCategory === 'todos') && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-[#14161b] border border-[#252830] space-y-3"
          >
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
              {ADDITIONS_LIST.map((add, index) => (
                <motion.div
                  key={add.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  whileHover={{ scale: 1.03, borderColor: '#ea580c80' }}
                  className="p-2 rounded-lg bg-[#1a1d24] border border-[#262a35] flex items-center justify-between text-xs transition-colors"
                >
                  <span className="text-[#e2ddd5] font-medium">{add.name}</span>
                  <span className="text-[#ea580c] font-bold">+{formatCurrency(add.price)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Items Grid with Motion Stagger */}
        {activeCategory !== 'adicionais' && (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.35, 
                    delay: Math.min(index * 0.03, 0.25),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ 
                    y: -5,
                    borderColor: 'rgba(234, 88, 12, 0.5)',
                    transition: { duration: 0.2 }
                  }}
                  className="rounded-2xl bg-[#14161c] border border-[#222630] p-5 flex flex-col justify-between transition-shadow hover:shadow-2xl hover:shadow-black/70 group"
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

                    <p className="text-xs text-[#9c9589] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-[#1d2028] flex items-center justify-between gap-3">
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

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.94 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                      onClick={() => handleOpenCustomize(item)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#1e222b] hover:bg-[#e03a14] text-white text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      QUERO PEDIR
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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

        {/* Direct WhatsApp Callout with Interactive Hover */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#181a20] to-[#14161c] border border-[#272b35] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left min-w-0">
            <h4 className="font-heading font-bold text-base text-white">
              Prefere pedir pelo telefone ou WhatsApp sem frescura?
            </h4>
            <p className="text-xs text-[#a39e93]">
              Nosso time está a postos em Três Coroas para atender você.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#22c55e]/20 transition-all flex-shrink-0 min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4" />
            CHAMAR NO WHATSAPP
          </motion.a>
        </motion.div>

      </div>

      {/* Customize & Add to Cart Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedItemForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedItemForModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Dialog with Spring physics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#13151b] border border-[#272b38] shadow-2xl p-6 sm:p-7 space-y-5 max-h-[90vh] overflow-y-auto text-white z-10"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-[#202430] pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ea580c] block">
                    Personalize seu pedido
                  </span>
                  <h3 className="font-heading font-black text-2xl text-white mt-0.5">
                    {selectedItemForModal.name}
                  </h3>
                  <p className="text-xs text-[#a39e93] mt-1">
                    {selectedItemForModal.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedItemForModal(null)}
                  className="p-2 rounded-xl bg-[#1c1f28] hover:bg-[#272c3a] text-[#a39e93] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Size Selector */}
              {selectedItemForModal.priceSecondary && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#cfcac2] block">
                    Escolha o Tamanho da Porção
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedSize('media')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedSize === 'media'
                          ? 'bg-[#e03a14]/15 border-[#e03a14] text-white'
                          : 'bg-[#181a22] border-[#252a36] text-[#a39e93] hover:border-[#353b4c]'
                      }`}
                    >
                      <span className="text-xs font-bold block">Média</span>
                      <span className="text-sm font-heading font-black text-white">
                        {formatCurrency(selectedItemForModal.price)}
                      </span>
                    </button>
                    <button
                      onClick={() => setSelectedSize('grande')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedSize === 'grande'
                          ? 'bg-[#e03a14]/15 border-[#e03a14] text-white'
                          : 'bg-[#181a22] border-[#252a36] text-[#a39e93] hover:border-[#353b4c]'
                      }`}
                    >
                      <span className="text-xs font-bold block">{selectedItemForModal.secondaryLabel || 'Grande'}</span>
                      <span className="text-sm font-heading font-black text-white">
                        {formatCurrency(selectedItemForModal.priceSecondary)}
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* Additions list */}
              {selectedItemForModal.category !== 'bebidas' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#cfcac2]">
                      Adicionais na Chapa
                    </label>
                    <span className="text-[11px] text-[#736c61]">Opcional</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                    {ADDITIONS_LIST.map((add) => {
                      const isSelected = selectedAdditions.some((a) => a.id === add.id);
                      return (
                        <button
                          key={add.id}
                          onClick={() => handleToggleAddition(add)}
                          className={`p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all ${
                            isSelected
                              ? 'bg-[#e03a14]/15 border-[#e03a14] text-white'
                              : 'bg-[#181a22] border-[#242934] text-[#a39e93] hover:border-[#333847]'
                          }`}
                        >
                          <span className="font-medium">{add.name}</span>
                          <span className="font-bold text-[#ea580c]">+{formatCurrency(add.price)}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#cfcac2] block">
                  Observação especial (ponto da carne, sem cebola, etc.)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Ponto da carne, sem cebola, maionese à parte..."
                  value={itemNotes}
                  onChange={(e) => setItemNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#1a1d24] border border-[#252830] text-white placeholder-[#736c61] focus:outline-none focus:border-[#e03a14] text-xs"
                />
              </div>

              {/* Modal Footer */}
              <div className="pt-3 border-t border-[#222630] flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-[#736c61] block uppercase">Total deste item</span>
                  <span className="font-heading font-black text-xl text-white">
                    {formatCurrency(modalPrice)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleConfirmAddToCart}
                  className="px-6 py-3 rounded-xl bg-[#e03a14] hover:bg-[#c9320f] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#e03a14]/25 flex items-center gap-2 transition-all"
                >
                  <Check className="w-4 h-4" />
                  ADICIONAR AO PEDIDO
                </motion.button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
