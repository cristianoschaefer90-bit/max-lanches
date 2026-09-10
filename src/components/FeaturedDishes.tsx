import React from 'react';
import { Flame, Plus, Sparkles, ArrowRight, Award } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, COMPANY_INFO } from '../data/menuData';

interface FeaturedDishesProps {
  onSelectItem: (item: MenuItem) => void;
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({ onSelectItem }) => {
  // Select authentic highlights from the menu
  const banquete = MENU_ITEMS.find((i) => i.id === 'banquete-dourado')!;
  const xTudo = MENU_ITEMS.find((i) => i.id === 'x-tudo')!;
  const xBacon = MENU_ITEMS.find((i) => i.id === 'x-bacon')!;
  const batataCheddar = MENU_ITEMS.find((i) => i.id === 'batata-cheddar-bacon')!;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  return (
    <section id="destaques" className="py-20 lg:py-28 relative bg-[#0b0c0e] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#ea580c]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1f222a]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#ea580c]">
              <Flame className="w-3.5 h-3.5" />
              <span>Destaques da Casa</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              OS QUERIDINHOS DA MAX’S
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#a39e93] max-w-md leading-relaxed">
            Os lanches e porções que mais saem na chapa. Testados, aprovados e repetidos pelos clientes de Três Coroas.
          </p>
        </div>

        {/* Feature 1: The Massive House Highlight - BANQUETE DOURADO */}
        {banquete && (
          <div className="relative rounded-3xl overflow-hidden border border-[#2b303c] bg-gradient-to-br from-[#16181e] to-[#0f1014] p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-heading font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  {banquete.badge}
                </div>

                <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
                  {banquete.name}
                </h3>

                <p className="text-base text-[#c7c1b5] leading-relaxed">
                  {banquete.description}
                </p>

                {/* What comes in the Banquete Dourado based on the actual screenshot */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Batata Frita', 'Peixe Violinha', 'Polenta Frita', 'Anéis de Cebola', 'Ovos de Codorna'].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-lg bg-[#1a1d25] border border-[#292d37] text-xs font-medium text-[#e6e1d8]"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-5">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#868074] block font-semibold">
                      Valor Especial
                    </span>
                    <span className="font-heading font-black text-3xl sm:text-4xl text-white">
                      {formatCurrency(banquete.price)}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectItem(banquete)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#e03a14] hover:bg-[#c9320f] text-white font-heading font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#e03a14]/25 transition-all hover:scale-105 active:scale-100"
                  >
                    <Plus className="w-4 h-4" />
                    PEDIR O BANQUETE
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="rounded-2xl overflow-hidden border border-[#2d313c] aspect-[16/10] relative group">
                  <img
                    src={banquete.image}
                    alt={banquete.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#f59e0b] border border-white/10">
                    Serve a mesa inteira
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Feature Grid: Other Standouts (X-Tudo, X-Bacon, Batata Cheddar & Bacon) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: X-TUDO */}
          {xTudo && (
            <div className="rounded-2xl bg-[#14161b] border border-[#252830] overflow-hidden flex flex-col justify-between group hover:border-[#353b47] transition-all hover:-translate-y-1 shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1c1f27]">
                <img
                  src={xTudo.image}
                  alt={xTudo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#e03a14] text-white shadow-md">
                  {xTudo.badge}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-heading font-black text-xl text-white">
                      {xTudo.name}
                    </h4>
                    <span className="font-heading font-extrabold text-lg text-[#ea580c]">
                      {formatCurrency(xTudo.price)}
                    </span>
                  </div>
                  <p className="text-xs text-[#a39e93] line-clamp-3 leading-relaxed">
                    {xTudo.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectItem(xTudo)}
                  className="w-full py-2.5 rounded-lg bg-[#1e222b] hover:bg-[#e03a14] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-3.5 h-3.5" />
                  ADICIONAR AO PEDIDO
                </button>
              </div>
            </div>
          )}

          {/* Card 2: X-BACON */}
          {xBacon && (
            <div className="rounded-2xl bg-[#14161b] border border-[#252830] overflow-hidden flex flex-col justify-between group hover:border-[#353b47] transition-all hover:-translate-y-1 shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1c1f27]">
                <img
                  src={xBacon.image}
                  alt={xBacon.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#ea580c] text-white shadow-md">
                  {xBacon.badge}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-heading font-black text-xl text-white">
                      {xBacon.name}
                    </h4>
                    <span className="font-heading font-extrabold text-lg text-[#ea580c]">
                      {formatCurrency(xBacon.price)}
                    </span>
                  </div>
                  <p className="text-xs text-[#a39e93] line-clamp-3 leading-relaxed">
                    {xBacon.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectItem(xBacon)}
                  className="w-full py-2.5 rounded-lg bg-[#1e222b] hover:bg-[#e03a14] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-3.5 h-3.5" />
                  ADICIONAR AO PEDIDO
                </button>
              </div>
            </div>
          )}

          {/* Card 3: BATATA CHEDDAR & BACON */}
          {batataCheddar && (
            <div className="rounded-2xl bg-[#14161b] border border-[#252830] overflow-hidden flex flex-col justify-between group hover:border-[#353b47] transition-all hover:-translate-y-1 shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1c1f27]">
                <img
                  src={batataCheddar.image}
                  alt={batataCheddar.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#f59e0b] text-black shadow-md">
                  {batataCheddar.badge}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-heading font-black text-xl text-white">
                      {batataCheddar.name}
                    </h4>
                    <span className="font-heading font-extrabold text-lg text-[#f59e0b]">
                      {formatCurrency(batataCheddar.price)}
                    </span>
                  </div>
                  <p className="text-xs text-[#a39e93] line-clamp-3 leading-relaxed">
                    {batataCheddar.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectItem(batataCheddar)}
                  className="w-full py-2.5 rounded-lg bg-[#1e222b] hover:bg-[#e03a14] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-3.5 h-3.5" />
                  ADICIONAR AO PEDIDO
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
