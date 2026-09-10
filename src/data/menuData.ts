import { MenuItem, AdditionItem, ReviewItem, InstagramPost } from '../types';

export const COMPANY_INFO = {
  name: "Max’s Lanches",
  tagline: "Lancheria em Três Coroas — RS",
  subtitle: "Lanches caprichados, porções generosas e atendimento próximo.",
  address: "R. dos Caigangues, 515",
  neighborhood: "Sander",
  city: "Três Coroas",
  state: "RS",
  zipCode: "95660-000",
  fullAddress: "R. dos Caigangues, 515 - Sander, Três Coroas - RS, 95660-000",
  phone: "(51) 99942-7923",
  phoneRaw: "5551999427923",
  whatsappUrl: "https://wa.me/5551999427923?text=Ol%C3%A1%2C%20Max%27s!%20Quero%20fazer%20um%20pedido%20%F0%9F%98%8B",
  instagram: "@maxslanches",
  instagramUrl: "https://www.instagram.com/maxslanches",
  facebook: "MaxS Lanches",
  facebookUrl: "https://www.facebook.com/profile.php?id=maxslanches",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=R.+dos+Caigangues,+515+-+Sander,+Tr%C3%AAs+Coroas+-+RS,+95660-000",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=R.+dos+Caigangues,+515+-+Sander,+Tr%C3%AAs+Coroas+-+RS,+95660-000",
  rating: 4.9,
  reviewsCount: 40,
  priceRange: "R$ 20–40 por pessoa",
  services: [
    { title: "Consumo no Local", desc: "Ambiente acolhedor e atendimento próximo para comer com conforto." },
    { title: "Retirada no Balcão", desc: "Faça seu pedido com antecedência e retire quentinho sem fila." },
    { title: "Delivery em Três Coroas", desc: "Entregamos rápido na sua porta mantendo tudo fresco e saboroso." }
  ],
  schedules: [
    { day: "Segunda a Quinta", hours: "07:30 – 20:30" },
    { day: "Sexta e Sábado", hours: "07:30 – 21:30" },
    { day: "Domingo", hours: "09:00 – 13:00 e 18:30 – 20:30" }
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // XIS-LANCHES
  {
    id: "x-pao-bife-ovo",
    name: "X-Pão Bife Ovo",
    category: "xis",
    price: 18.0,
    description: "Pão fresco, bife suculento grelhado na chapa, ovo frito e queijo derretido.",
    badge: "Clássico",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "x-frango",
    name: "X-Frango",
    category: "xis",
    price: 21.0,
    description: "Pão fresquinho com filé de frango fatiado, tempero da casa, queijo e maionese.",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "x-calabresa",
    name: "X-Calabresa",
    category: "xis",
    price: 22.0,
    description: "Calabresa fatiada dourada na chapa com queijo derretido no pão quentinho.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "x-salada",
    name: "X-Salada",
    category: "xis",
    price: 23.0,
    description: "Bife na chapa, queijo, ovo, alface fresca, tomate fatiado e molho da lancheria.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "x-acebolado",
    name: "X-Acebolado",
    category: "xis",
    price: 25.0,
    description: "Bife macio coberto por cebola farta caramelizada na chapa com queijo abundante.",
    badge: "Favorito Gaúcho",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "x-coracao",
    name: "X-Coração",
    category: "xis",
    price: 26.0,
    description: "Coração de frango bem refogado na chapa com tempero raiz, queijo e complementos.",
    badge: "Especialidade RS",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "x-bacon",
    name: "X-Bacon",
    category: "xis",
    price: 28.0,
    description: "Bife na chapa, camadas generosas de bacon crocante frito, queijo derretendo e pão tostado.",
    popular: true,
    badge: "Mais Pedido",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "x-tudo",
    name: "X-Tudo",
    category: "xis",
    price: 35.0,
    description: "O campeão de generosidade: bife, bacon, coração, frango, ovo, queijo duplo e salada completa. Sem miséria.",
    popular: true,
    badge: "Mais Pedido",
    isHouseHighlight: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop"
  },

  // DESTAQUE DA CASA
  {
    id: "banquete-dourado",
    name: "Banquete Dourado",
    category: "destaque",
    price: 125.0,
    description: "O maior destaque da casa para a galera: Batata frita crocante, peixe violinha empanado, polenta frita dourada, anéis de cebola e ovos de codorna selecionados. Serve com abundância.",
    badge: "Destaque da Casa!",
    isHouseHighlight: true,
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=1200&auto=format&fit=crop"
  },

  // OUTROS LANCHES
  {
    id: "cachorro-quente",
    name: "Cachorro Quente",
    category: "outros",
    price: 14.0,
    description: "Pão macio, salsicha aferventada, molho caseiro temperado, milho e queijo ralado.",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "torrada-pao-de-xis",
    name: "Torrada Pão de Xis",
    category: "outros",
    price: 15.0,
    description: "Pão de xis tostado com manteiga, recheado com queijo derretido e presunto fatiado.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "prensado-pao-de-xis",
    name: "Prensado Pão de Xis",
    category: "outros",
    price: 15.0,
    description: "Pão de xis prensado fininho e crocante na chapa quente, recheio fumegante de queijo e presunto.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "cachorro-quente-duplo",
    name: "Cachorro Quente Duplo",
    category: "outros",
    price: 16.0,
    description: "Versão reforçada com duas salsichas, molho encorpado, milho e generosa cobertura de queijo.",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=900&auto=format&fit=crop"
  },

  // PORÇÕES
  {
    id: "batata-frita",
    name: "Batata Frita",
    category: "porcoes",
    price: 17.0,
    priceSecondary: 22.0,
    secondaryLabel: "Grande",
    description: "Batatas sequinhas, douradas e crocantes, salpicadas com tempero especial. Média (R$ 17) ou Grande (R$ 22).",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "batata-cheddar-bacon",
    name: "Batata Cheddar & Bacon",
    category: "porcoes",
    price: 28.0,
    priceSecondary: 33.0,
    secondaryLabel: "Grande",
    description: "Nossa porção de batatas com farta calda de cheddar cremoso e bacon crocante em cubos. Média (R$ 28) ou Grande (R$ 33).",
    badge: "Irresistível",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "aneis-de-cebola",
    name: "Anéis de Cebola",
    category: "porcoes",
    price: 22.0,
    description: "Anéis de cebola selecionada empanados e fritos, crocantes por fora e macios por dentro.",
    image: "https://images.unsplash.com/photo-1639024471285-05c08591992f?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "picadao-medio",
    name: "Picadão Médio",
    category: "porcoes",
    price: 40.0,
    description: "Tábua de aperitivos: carnes grelhadas em cubos, queijo colonial, pepino em conserva, ovos e azeitonas.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "peixe-violinha",
    name: "Peixe Violinha",
    category: "porcoes",
    price: 48.0,
    description: "Iscas de peixe violinha frescas, empanadas artesanalmente e fritas com limãozinho para acompanhar.",
    badge: "Muito Pedido",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "picadao-grande",
    name: "Picadão Grande",
    category: "porcoes",
    price: 60.0,
    description: "A porção reforçada para a mesa inteira: muita carne picadinha na chapa, queijos, pepino, azeitonas e molho.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop"
  },

  // BEBIDAS
  // Cervejas
  {
    id: "brahma-latao",
    name: "Brahma Latão",
    category: "bebidas",
    subCategory: "Cervejas",
    price: 7.0,
    description: "Latão bem gelado no ponto."
  },
  {
    id: "polar-latao",
    name: "Polar Latão",
    category: "bebidas",
    subCategory: "Cervejas",
    price: 7.0,
    description: "A clássica gaúcha, trincando de gelada."
  },
  {
    id: "amstel-latao",
    name: "Amstel Latão",
    category: "bebidas",
    subCategory: "Cervejas",
    price: 7.0,
    description: "Puro malte refrescante."
  },
  {
    id: "heineken-latao",
    name: "Heineken Latão",
    category: "bebidas",
    subCategory: "Cervejas",
    price: 8.0,
    description: "Premium puro malte geladíssima."
  },
  {
    id: "amstel-600ml",
    name: "Amstel 600ml",
    category: "bebidas",
    subCategory: "Cervejas",
    price: 10.0,
    description: "Garrafa 600ml servida gelada."
  },
  {
    id: "brahma-1l",
    name: "Brahma 1 Litro",
    category: "bebidas",
    subCategory: "Cervejas",
    price: 14.0,
    description: "Litrão para acompanhar a mesa."
  },
  {
    id: "polar-1l",
    name: "Polar 1 Litro",
    category: "bebidas",
    subCategory: "Cervejas",
    price: 14.0,
    description: "A cerveja do Rio Grande em garrafa de 1 litro."
  },
  {
    id: "heineken-600ml",
    name: "Heineken 600ml",
    category: "bebidas",
    subCategory: "Cervejas",
    price: 15.0,
    description: "Garrafa 600ml servida trincando."
  },

  // Refrigerantes 2L
  {
    id: "coca-cola-2l",
    name: "Coca-Cola 2L",
    category: "bebidas",
    subCategory: "Refrigerantes 2L",
    price: 15.0,
    description: "Garrafa 2 Litros."
  },
  {
    id: "pepsi-2l",
    name: "Pepsi 2L",
    category: "bebidas",
    subCategory: "Refrigerantes 2L",
    price: 13.0,
    description: "Garrafa 2 Litros."
  },
  {
    id: "guarana-charrua-2l",
    name: "Guaraná Charrua 2L",
    category: "bebidas",
    subCategory: "Refrigerantes 2L",
    price: 13.0,
    description: "Tradicional guaraná do RS em garrafa 2 Litros."
  },
  {
    id: "sukita-2l",
    name: "Sukita 2L",
    category: "bebidas",
    subCategory: "Refrigerantes 2L",
    price: 13.0,
    description: "Garrafa 2 Litros."
  },
  {
    id: "sprite-2l",
    name: "Sprite 2L",
    category: "bebidas",
    subCategory: "Refrigerantes 2L",
    price: 15.0,
    description: "Garrafa 2 Litros."
  },

  // Refrigerantes Lata & 600ml
  {
    id: "coca-cola-lata",
    name: "Coca-Cola Lata",
    category: "bebidas",
    subCategory: "Refrigerantes Lata",
    price: 7.0,
    description: "Lata 350ml gelada."
  },
  {
    id: "pepsi-lata",
    name: "Pepsi Lata",
    category: "bebidas",
    subCategory: "Refrigerantes Lata",
    price: 6.0,
    description: "Lata 350ml gelada."
  },
  {
    id: "guarana-lata",
    name: "Guaraná Lata",
    category: "bebidas",
    subCategory: "Refrigerantes Lata",
    price: 6.0,
    description: "Lata 350ml gelada."
  },
  {
    id: "fruki-600ml",
    name: "Fruki Garrafa 600ml",
    category: "bebidas",
    subCategory: "Refrigerantes 600ml",
    price: 7.0,
    description: "O autêntico guaraná Fruki do Rio Grande do Sul."
  },
  {
    id: "pepsi-600ml",
    name: "Pepsi Garrafa 600ml",
    category: "bebidas",
    subCategory: "Refrigerantes 600ml",
    price: 7.0,
    description: "Garrafa 600ml."
  },
  {
    id: "coca-cola-600ml",
    name: "Coca-Cola Garrafa 600ml",
    category: "bebidas",
    subCategory: "Refrigerantes 600ml",
    price: 8.0,
    description: "Garrafa 600ml gelada."
  },

  // Sucos & Águas
  {
    id: "suco-uva",
    name: "Suco de Uva",
    category: "bebidas",
    subCategory: "Sucos",
    price: 6.0,
    description: "Suco natural e refrescante."
  },
  {
    id: "suco-laranja",
    name: "Suco de Laranja",
    category: "bebidas",
    subCategory: "Sucos",
    price: 6.0,
    description: "Sabor cítrico refrescante."
  },
  {
    id: "suco-morango",
    name: "Suco de Morango",
    category: "bebidas",
    subCategory: "Sucos",
    price: 6.0,
    description: "Refrescante e saboroso."
  },
  {
    id: "agua-sem-gas",
    name: "Água sem Gás",
    category: "bebidas",
    subCategory: "Águas",
    price: 3.0,
    description: "Garrafinha 500ml."
  },
  {
    id: "agua-com-gas",
    name: "Água com Gás",
    category: "bebidas",
    subCategory: "Águas",
    price: 3.0,
    description: "Garrafinha 500ml com gás."
  }
];

export const ADDITIONS_LIST: AdditionItem[] = [
  { id: "add-presunto", name: "Presunto", price: 1.0 },
  { id: "add-ovo", name: "Ovo", price: 1.0 },
  { id: "add-queijo", name: "Queijo", price: 1.0 },
  { id: "add-cheddar", name: "Cheddar", price: 3.0 },
  { id: "add-cebola", name: "Cebola na Chapa", price: 3.0 },
  { id: "add-batata", name: "Batata Frita", price: 3.0 },
  { id: "add-frango", name: "Frango", price: 4.0 },
  { id: "add-calabresa", name: "Calabresa", price: 4.0 },
  { id: "add-bacon", name: "Bacon", price: 5.0 },
  { id: "add-coracao", name: "Coração", price: 6.0 },
  { id: "add-bife", name: "Bife Adicional", price: 8.0 }
];

export const REAL_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Cliente Verificado",
    rating: 5,
    comment: "Xis top demais, bom atendimento e ambiente muito bom!",
    timeAgo: "Avaliação no Google",
    highlight: true
  },
  {
    id: "rev-2",
    author: "Cliente Verificado",
    rating: 5,
    comment: "Ótimo atendimento, várias opções e uma saborosa comida 🤤",
    timeAgo: "Avaliação no Google",
    highlight: false
  },
  {
    id: "rev-3",
    author: "Cliente Verificado",
    rating: 5,
    comment: "As porções são generosas e bem servidas, com ótima apresentação.",
    timeAgo: "Avaliação no Google",
    highlight: true
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    title: "Do jeitinho que a gente gosta!",
    subtitle: "Pão prensado, queijo derretido e carne suculenta",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop",
    caption: "Aquele xis prensado clássico no ponto exato. Quem prova, repete.",
    likes: 142,
    date: "Recente",
    tag: "Xis Gaúcho"
  },
  {
    id: "ig-2",
    title: "Boas ideias nascem de grandes lanches!",
    subtitle: "Nosso lema e nossa energia em Três Coroas",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900&auto=format&fit=crop",
    caption: "Ambiente acolhedor para receber a sua família e amigos.",
    likes: 98,
    date: "Destaque",
    tag: "Ambiente"
  },
  {
    id: "ig-3",
    title: "Bateu a fome? A gente resolve!",
    subtitle: "Cebola dourada na chapa e generosidade pura",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=900&auto=format&fit=crop",
    caption: "Capricho que dá pra ver. Sabor que não deixa dúvida.",
    likes: 185,
    date: "Mais curtido",
    tag: "X-Acebolado"
  },
  {
    id: "ig-4",
    title: "Equipe Max’s Lanches",
    subtitle: "Atendimento próximo de verdade",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=900&auto=format&fit=crop",
    caption: "Quem faz acontecer todo santo dia com sorriso no rosto e touquinha no capricho.",
    likes: 210,
    date: "Família Max's",
    tag: "Nossa Equipe"
  }
];
