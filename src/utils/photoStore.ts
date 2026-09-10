// Local Photo Storage & Synchronization for Real Food Photography
export interface RealPhotoSlot {
  key: string;
  title: string;
  subtitle: string;
  targetDishId: string; // matches MenuItem id (e.g. 'banquete-dourado', 'x-bacon', etc.)
  defaultImage: string;
  description: string;
  tags: string[];
}

export const REAL_PHOTO_SLOTS: RealPhotoSlot[] = [
  {
    key: 'xbacon-farto',
    title: 'X-Bacon Especial na Chapa',
    subtitle: 'Com montanha de bacon crocante em cubos, ovo e queijo derretido',
    targetDishId: 'x-bacon',
    defaultImage: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=85&w=1200&auto=format&fit=crop',
    description: 'Pão fresco tostado, bife artesanal suculento, queijo colonial derretido, alface crespa e uma camada farta de cubinhos de bacon dourados e crocantes.',
    tags: ['Foto Real', 'Chapa Quente', 'Zero Miséria']
  },
  {
    key: 'banquete-dourado-travessa',
    title: 'O Lendário Banquete Dourado',
    subtitle: 'A clássica travessa oval com batata, polenta palito, iscas e ovos de codorna',
    targetDishId: 'banquete-dourado',
    defaultImage: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?q=85&w=1200&auto=format&fit=crop',
    description: 'A porção mais famosa de Três Coroas! Servida na tradicional travessa prateada com batata frita sequinha, polenta frita crocante, iscas douradas, ovos de codorna em toda a borda e limão fresco.',
    tags: ['Destaque da Casa', 'Para Compartilhar', 'Foto Autêntica']
  },
  {
    key: 'xis-prensado-recheado',
    title: 'Xis Gaúcho Artesanal Cortado ao Meio',
    subtitle: 'Prensado na medida certa com recheio denso e fumegante',
    targetDishId: 'x-tudo',
    defaultImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=85&w=1200&auto=format&fit=crop',
    description: 'Corte transversal do clássico xis gaúcho da Max’s: carne de primeira, calabresa e coração bem picados na chapa, queijo derretendo e tempero caseiro sem igual.',
    tags: ['Xis Gaúcho', 'Bem Prensado', 'Sem Miséria']
  },
  {
    key: 'xis-tradicional-dourado',
    title: 'X-Salada e X-Bife Tradicional',
    subtitle: 'Pão de xis douradinho e prensado com maestria',
    targetDishId: 'x-pao-bife-ovo',
    defaultImage: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=85&w=1200&auto=format&fit=crop',
    description: 'Visual limpo e irresistível do pão de xis chapeado com perfeição, ovo caipira no ponto, bife artesanal e salada fresca.',
    tags: ['Clássico da Lancheria', 'Pão Douradinho']
  },
  {
    key: 'aneis-cebola-crocantes',
    title: 'Anéis de Cebola (Onion Rings)',
    subtitle: 'Empanados dourados e super crocantes com molho especial',
    targetDishId: 'aneis-de-cebola',
    defaultImage: 'https://images.unsplash.com/photo-1639024471285-05c08591992f?q=85&w=1200&auto=format&fit=crop',
    description: 'Anéis de cebola selecionados, empanados até ficarem crocantes como vidro por fora e macios por dentro, servidos com molhinho caseiro e salsinha fresca.',
    tags: ['Petisco Crocante', 'Acompanhamento Perfeito']
  }
];

const STORAGE_PREFIX = 'maxs_photo_';
const EVENT_NAME = 'maxs_photos_updated';

export const photoStore = {
  getPhoto(key: string, fallback: string): string {
    if (typeof window === 'undefined') return fallback;
    try {
      const stored = localStorage.getItem(STORAGE_PREFIX + key);
      return stored || fallback;
    } catch {
      return fallback;
    }
  },

  setPhoto(key: string, dataUrl: string): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_PREFIX + key, dataUrl);
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { key, dataUrl } }));
    } catch (e) {
      console.warn('Erro ao salvar foto localmente:', e);
    }
  },

  removePhoto(key: string): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(STORAGE_PREFIX + key);
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { key } }));
    } catch (e) {
      console.warn(e);
    }
  },

  resetAll(): void {
    if (typeof window === 'undefined') return;
    try {
      REAL_PHOTO_SLOTS.forEach((slot) => {
        localStorage.removeItem(STORAGE_PREFIX + slot.key);
      });
      window.dispatchEvent(new CustomEvent(EVENT_NAME));
    } catch (e) {
      console.warn(e);
    }
  },

  subscribe(callback: () => void): () => void {
    if (typeof window === 'undefined') return () => {};
    window.addEventListener(EVENT_NAME, callback);
    return () => window.removeEventListener(EVENT_NAME, callback);
  }
};
