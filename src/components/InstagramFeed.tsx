import React from 'react';
import { Instagram, ExternalLink, Heart } from 'lucide-react';
import { INSTAGRAM_POSTS, COMPANY_INFO } from '../data/menuData';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-[#0e1014] border-t border-[#1a1d24] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1f222a]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#ea580c]">
              <Instagram className="w-4 h-4" />
              <span>{COMPANY_INFO.instagram}</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              BASTIDORES DA FOME.
            </h2>
          </div>

          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#15171d] hover:bg-[#1f222b] text-white border border-[#272b35] hover:border-[#ea580c] text-xs font-heading font-bold uppercase tracking-wider transition-all self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-[#ea580c]" />
            <span>SEGUIR NO INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#868074]" />
          </a>
        </div>

        {/* Instagram Grid (Curated to reflect real posts from their profile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl bg-[#14161b] border border-[#22252e] overflow-hidden flex flex-col justify-between hover:border-[#353b47] transition-all hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative aspect-square overflow-hidden bg-[#181a20]">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#a39e93]">
                    <Instagram className="w-4 h-4" />
                    <span>Ver post</span>
                  </div>
                </div>

                {/* Tag pill */}
                {post.tag && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-white border border-white/10">
                    {post.tag}
                  </span>
                )}
              </div>

              {/* Caption Content */}
              <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-sm text-white group-hover:text-[#ea580c] transition-colors line-clamp-1">
                    {post.title}
                  </h4>
                  <p className="text-xs text-[#9c9589] line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>
                </div>
                <div className="pt-3 flex items-center justify-between text-[11px] text-[#736c61]">
                  <span>{post.subtitle}</span>
                  <span className="font-medium text-[#ea580c]">@maxslanches</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Community stats bar */}
        <div className="p-4 rounded-xl bg-[#14161c] border border-[#22252e] flex flex-wrap items-center justify-around gap-4 text-center text-xs">
          <div>
            <span className="font-heading font-bold text-base text-white block">900+</span>
            <span className="text-[#868074]">Seguidores na região</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#252830]" />
          <div>
            <span className="font-heading font-bold text-base text-white block">Três Coroas</span>
            <span className="text-[#868074]">Orgulho local da serra gaúcha</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#252830]" />
          <div>
            <span className="font-heading font-bold text-base text-white block">Story & Fotos Reais</span>
            <span className="text-[#868074]">Avisos de funcionamento diário</span>
          </div>
        </div>

      </div>
    </section>
  );
};
