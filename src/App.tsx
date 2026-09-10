import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutConcept } from './components/AboutConcept';
import { FeaturedDishes } from './components/FeaturedDishes';
import { MenuSection } from './components/MenuSection';
import { SocialProof } from './components/SocialProof';
import { InstagramFeed } from './components/InstagramFeed';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { OrderDrawer } from './components/OrderDrawer';
import { CartItem, MenuItem, AdditionItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('maxs_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('maxs_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  const handleAddToCart = (
    item: MenuItem,
    size: 'normal' | 'media' | 'grande' = 'normal',
    additions: AdditionItem[] = [],
    notes: string = ''
  ) => {
    let unitPrice = item.price;
    if (size === 'grande' && item.priceSecondary) {
      unitPrice = item.priceSecondary;
    }
    const additionsTotal = additions.reduce((acc, a) => acc + a.price, 0);
    const finalUnitPrice = unitPrice + additionsTotal;

    const cartItemId = `${item.id}-${size}-${additions.map(a => a.id).sort().join('_')}-${notes.trim()}`;

    setCart((prev) => {
      const existing = prev.find((ci) => ci.cartItemId === cartItemId);
      if (existing) {
        return prev.map((ci) =>
          ci.cartItemId === cartItemId ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          item,
          size,
          additions,
          notes,
          quantity: 1,
          unitPrice: finalUnitPrice
        }
      ];
    });

    setIsOrderDrawerOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((ci) => {
          if (ci.cartItemId === cartItemId) {
            const newQ = ci.quantity + delta;
            return newQ > 0 ? { ...ci, quantity: newQ } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#0b0c0e] text-[#f4efe6] font-body selection:bg-[#e03a14] selection:text-white relative">
      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsOrderDrawerOpen(true)}
      />

      {/* Main Sections */}
      <main className="w-full max-w-full overflow-x-clip">
        {/* 1. Hero Dobra Principal */}
        <Hero onOpenOrder={() => setIsOrderDrawerOpen(true)} />

        {/* 2. A Fome Bateu / Proposta da Max's */}
        <AboutConcept />

        {/* 3. Os Queridinhos da Casa (Banquete Dourado, X-Tudo, X-Bacon, etc) */}
        <FeaturedDishes
          onSelectItem={(item) => handleAddToCart(item)}
        />

        {/* 4. Cardápio Completo Interativo com Adicionais */}
        <MenuSection
          onAddToCart={handleAddToCart}
        />

        {/* 5. Prova Social Real (Google Reviews) */}
        <SocialProof />

        {/* 6. Bastidores da Fome (Instagram) */}
        <InstagramFeed />

        {/* 7. Localização & Horários */}
        <LocationSection />

        {/* 8. Chamada Final para Ação */}
        <FinalCTA />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Floating WhatsApp Action & Cart Badge */}
      <FloatingWhatsApp
        cartCount={totalCartCount}
        onOpenCart={() => setIsOrderDrawerOpen(true)}
      />

      {/* Interactive Order / WhatsApp Cart Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
