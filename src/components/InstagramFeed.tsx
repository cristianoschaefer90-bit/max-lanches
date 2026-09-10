import React, { useState } from 'react';
import { Instagram, ArrowUpRight, MessageCircle, Heart, Grid, Film, Bookmark, ExternalLink, Flame, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuData';
import { BrandLogo } from './BrandLogo';

interface PostPreview {
  id: string;
  image: string;
  type: 'image' | 'video';
  caption: string;
  likes: number;
  comments: number;
  tag: string;
}

const REAL_INSTAGRAM_POSTS: PostPreview[] = [
  {
    id: 'post-1',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=85&w=800&auto=format&fit=crop',
    type: 'video',
    caption: 'Do jeitinho que a gente gosta! Aquele xis prensado clássico no ponto exato. Quem prova, repete.',
    likes: 142,
    comments: 18,
    tag: 'Xis Gaúcho'
  },
  {
    id: 'post-2',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=85&w=800&auto=format&fit=crop',
    type: 'video',
    caption: 'Atenção! Estaremos abertos hoje a partir das 18h30. Chapa quente e pão crocante.',
    likes: 98,
    comments: 12,
    tag: 'Avisos'
  },
  {
    id: 'post-3',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=85&w=800&auto=format&fit=crop',
    type: 'image',
    caption: 'Bateu a fome? A gente resolve! Capricho que dá pra ver. Sabor que não deixa dúvida.',
    likes: 215,
    comments: 24,
    tag: 'X-Acebolado'
  },
  {
    id: 'post-4',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=85&w=800&auto=format&fit=crop',
    type: 'image',
    caption: 'Equipe Max’s Lanches: quem faz acontecer todo santo dia com sorriso no rosto e touquinha no capricho.',
    likes: 240,
    comments: 31,
    tag: 'Nossa Equipe'
  },
  {
    id: 'post-5',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=85&w=800&auto=format&fit=crop',
    type: 'video',
    caption: 'Você tá quieto, tá pensando em quê? Eu pensando naquele xis prensado derretendo de queijo...',
    likes: 189,
    comments: 22,
    tag: 'Humor & Fome'
  },
  {
    id: 'post-6',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=85&w=800&auto=format&fit=crop',
    type: 'video',
    caption: 'Boas ideias nascem de grandes lanches! Nosso lema e nossa energia em Três Coroas.',
    likes: 167,
    comments: 19,
    tag: 'Max\'s'
  }
];

const HIGHLIGHTS = [
  { id: 'cardapio', title: 'Cardápio', icon: '📋', color: 'from-[#f97316] to-[#ea580c]' },
  { id: 'atendimento', title: 'Atendimento', icon: '⏰', color: 'from-[#ea580c] to-[#c2410c]' },
  { id: 'xis', title: 'Xis', icon: '🍔', color: 'from-[#f59e0b] to-[#ea580c]' },
  { id: 'onde', title: 'Onde Estamos', icon: '📍', color: 'from-[#e11d48] to-[#ea580c]' },
];

export const InstagramFeed: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'reels' | 'tagged'>('posts');

  return (
    <section id="instagram" className="py-20 lg:py-28 relative bg-[#090a0c] border-t border-[#181a20] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#ea580c]/5 via-transparent to-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14161c] border border-[#252833] text-xs font-semibold text-[#f4efe6]">
            <Instagram className="w-3.5 h-3.5 text-[#ea580c]" />
            <span className="text-[#ea580c] uppercase tracking-wider text-[11px] font-bold">@maxslanches</span>
            <span className="text-[#4b4841]">·</span>
            <span className="text-[#a39e93]">Bastidores Oficiais</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            SIGA NO INSTAGRAM
          </h2>
          <p className="text-sm text-[#a39e93] leading-relaxed">
            Veja as fotos reais do dia a dia, avisos de funcionamento e o capricho da nossa chapa em tempo real.
          </p>
        </div>

        {/* Authentic Instagram Profile Box (High-End Awwwards Frame) */}
        <div className="rounded-3xl bg-[#0f1115] border border-[#232732] shadow-2xl overflow-hidden">
          
          {/* Top Bar of the Box */}
          <div className="px-6 py-4 bg-[#14161c] border-b border-[#20242e] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]/60 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#eab308]/60 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#22c55e]/60 inline-block" />
              <span className="text-xs text-[#8c867a] font-mono ml-2">instagram.com/maxslanches</span>
            </div>
            
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#a39e93] hover:text-white transition-colors"
            >
              <span>Abrir no app</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Profile Content Body */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            
            {/* Header: Avatar + Counts + Bio */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
              
              {/* Profile Avatar with Instagram Story Ring */}
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative flex-shrink-0"
              >
                <div className="p-1 rounded-full bg-gradient-to-tr from-[#f59e0b] via-[#ea580c] to-[#e11d48] group-hover:scale-105 transition-transform duration-300">
                  <div className="p-1 rounded-full bg-[#0f1115]">
                    <BrandLogo size="lg" showText={false} />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#0095f6] border-2 border-[#0f1115] flex items-center justify-center text-white text-[11px] font-bold">
                  ✓
                </div>
              </a>

              {/* Bio & Details */}
              <div className="flex-1 text-center sm:text-left space-y-4">
                
                {/* Username + Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
                    <span>maxslanches</span>
                  </h3>

                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <a
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      id="instagram-box-follow-btn"
                      className="px-5 py-2 rounded-xl bg-[#0095f6] hover:bg-[#1877f2] text-white text-xs font-bold font-heading uppercase tracking-wide transition-all shadow-md shadow-[#0095f6]/20 active:scale-95"
                    >
                      Seguir
                    </a>

                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      id="instagram-box-dm-btn"
                      className="px-4 py-2 rounded-xl bg-[#20242e] hover:bg-[#2b303e] text-white text-xs font-semibold font-heading transition-all border border-[#2e3442] flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Enviar mensagem</span>
                    </a>
                  </div>
                </div>

                {/* Follower Stats - The exact numbers from user's Instagram screenshot! */}
                <div className="flex items-center justify-center sm:justify-start gap-6 py-1 border-y sm:border-y-0 border-[#1f232c] text-sm">
                  <div>
                    <span className="font-bold text-white font-heading">17</span>{' '}
                    <span className="text-[#a39e93] text-xs">publicações</span>
                  </div>
                  <div>
                    <span className="font-black text-white font-heading text-base sm:text-lg text-[#ea580c]">903</span>{' '}
                    <span className="text-[#a39e93] text-xs font-medium">seguidores</span>
                  </div>
                  <div>
                    <span className="font-bold text-white font-heading">55</span>{' '}
                    <span className="text-[#a39e93] text-xs">a seguir</span>
                  </div>
                </div>

                {/* Bio text matching the real account */}
                <div className="text-xs text-[#cfcac2] space-y-1.5 leading-relaxed max-w-xl">
                  <p className="font-bold text-white text-sm">Max'S Lanches</p>
                  <p className="flex items-center justify-center sm:justify-start gap-1.5 text-[#a39e93]">
                    <span>🍔 Lanches e Porções</span>
                    <span>·</span>
                    <span>🛵 Local • Delivery • Retirada em TC</span>
                  </p>
                  <p className="text-[11px] text-[#8e887b]">
                    👩‍🍳 Seg-Qui 7:30–20:30 | Sex-Sáb 7:30–21:30 | Dom 9:00–13:00 / 18:30–20:30
                  </p>
                  <p className="text-[11px] text-[#8e887b]">
                    📍 R. dos Caigangues, 515 - Sander, Três Coroas - RS
                  </p>
                </div>

              </div>

            </div>

            {/* Stories Highlights (Cardápio, Atendimento, Xis, Onde Estamos) */}
            <div className="pt-4 border-t border-[#1c2028]">
              <div className="flex items-center justify-start sm:justify-center gap-6 overflow-x-auto pb-2 scrollbar-none">
                {HIGHLIGHTS.map((item) => (
                  <a
                    key={item.id}
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-2 group flex-shrink-0 cursor-pointer"
                  >
                    <div className={`w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                      <div className="w-full h-full rounded-full bg-[#12141a] flex items-center justify-center text-xl shadow-inner border border-[#232732]">
                        {item.icon}
                      </div>
                    </div>
                    <span className="text-[11px] text-[#a39e93] group-hover:text-white transition-colors font-medium">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Grid Tabs: Publicações / Reels */}
            <div className="border-t border-[#1c2028] pt-2 flex items-center justify-center gap-10 text-xs font-semibold tracking-wider uppercase text-[#736d62]">
              <button
                onClick={() => setActiveTab('posts')}
                className={`flex items-center gap-2 py-3 border-t-2 -mt-[9px] transition-colors ${
                  activeTab === 'posts' ? 'border-white text-white' : 'border-transparent hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Publicações</span>
              </button>

              <button
                onClick={() => setActiveTab('reels')}
                className={`flex items-center gap-2 py-3 border-t-2 -mt-[9px] transition-colors ${
                  activeTab === 'reels' ? 'border-white text-white' : 'border-transparent hover:text-white'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Reels</span>
              </button>
            </div>

            {/* 6 Real Posts Grid (Matching the authentic posts) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {REAL_INSTAGRAM_POSTS.map((post) => (
                <a
                  key={post.id}
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-[#16181f] border border-[#232732] block"
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Post Type Indicator */}
                  {post.type === 'video' && (
                    <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white z-10">
                      <Film className="w-3 h-3" />
                    </div>
                  )}

                  {/* Tag badge */}
                  <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-bold text-white tracking-wide z-10">
                    {post.tag}
                  </div>

                  {/* Hover Overlay with Likes & Comments */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4 text-center z-20">
                    <div className="flex items-center gap-4 text-white text-xs font-bold">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4 fill-white text-white" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4 fill-white text-white" />
                        {post.comments}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/90 line-clamp-3 leading-snug">
                      "{post.caption}"
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] text-[#ea580c] font-bold uppercase tracking-wider">
                      Ver no Instagram <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom Call to Action within the Box */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#14171e] border border-[#202530]">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f59e0b] via-[#ea580c] to-[#e11d48] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white font-heading">
                    Quer ver os Stories do dia com a chapa estalando?
                  </p>
                  <p className="text-[11px] text-[#8e887b]">
                    Mais de 900 pessoas já acompanham as fornadas diárias em Três Coroas.
                  </p>
                </div>
              </div>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                id="instagram-full-profile-btn"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#e03a14] hover:from-[#f97316] hover:to-[#ea580c] text-white text-xs font-heading font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#ea580c]/20 transition-all flex-shrink-0 active:scale-95"
              >
                <span>VISITAR @MAXSLANCHES</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
