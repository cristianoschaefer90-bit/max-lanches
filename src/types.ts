export interface MenuItem {
  id: string;
  name: string;
  category: 'xis' | 'destaque' | 'outros' | 'porcoes' | 'bebidas';
  subCategory?: string;
  price: number;
  priceSecondary?: number;
  secondaryLabel?: string;
  description: string;
  badge?: string;
  popular?: boolean;
  image?: string;
  isHouseHighlight?: boolean;
}

export interface AdditionItem {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  size?: 'normal' | 'media' | 'grande';
  unitPrice: number;
  quantity: number;
  additions: AdditionItem[];
  notes?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  comment: string;
  timeAgo: string;
  highlight?: boolean;
}

export interface InstagramPost {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  caption: string;
  likes: number;
  date: string;
  tag?: string;
}
