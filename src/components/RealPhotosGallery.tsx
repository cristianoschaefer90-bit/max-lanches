import React, { useState, useEffect, useRef } from 'react';
import { Camera, Plus, Check, Upload, Image as ImageIcon, Eye, ArrowRight, Flame, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { REAL_PHOTO_SLOTS, photoStore, RealPhotoSlot } from '../utils/photoStore';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';

interface RealPhotosGalleryProps {
  onSelectItem: (item: MenuItem) => void;
}

export const RealPhotosGallery: React.FC<RealPhotosGalleryProps> = ({ onSelectItem }) => {
  const [, setTick] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<RealPhotoSlot | null>(null);
  const [activeSlotToUpload, setActiveSlotToUpload] = useState<RealPhotoSlot | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Re-render when photos in store are updated
  useEffect(() => {
    const unsub = photoStore.subscribe(() => setTick((t) => t + 1));
    return unsub;
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, slotKey: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        photoStore.setPhoto(slotKey, dataUrl);
        setUploadSuccess(slotKey);
        setTimeout(() => setUploadSuccess(null), 3000);
      }
      setIsUploading(false);
      setActiveSlotToUpload(null);
    };
    reader.readAsDataURL(file);
  };

  const getSlotImage = (slot: RealPhotoSlot) => {
    return photoStore.getPhoto(slot.key, slot.defaultImage);
  };

  const getCorrespondingMenuItem = (targetDishId: string): MenuItem | undefined => {
    return MENU_ITEMS.find((item) => item.id === targetDishId);
  };

  return (
    <section id="fotos-reais" className="py-20 lg:py-28 relative bg-[#0e1014] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#ea580c]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#20242e]"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/15 border border-[#ea580c]/30 text-[#ea580c] text-xs font-heading font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Autenticidade Comprovada</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              FOTOS REAIS DA NOSSA CHAPA
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <p className="text-sm sm:text-base text-[#a39e93] max-w-md leading-relaxed">
              Aqui o lanche é de verdade. Nada de foto de catálogo ilustrativa: confira o padrão farto servido todos os dias na Max’s Lanches.
            </p>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REAL_PHOTO_SLOTS.map((slot, index) => {
            const currentImg = getSlotImage(slot);
            const menuItem = getCorrespondingMenuItem(slot.targetDishId);
            const isFeatured = index === 1; // Banquete Dourado gets visual prominence

            return (
              <motion.div
                key={slot.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-2xl overflow-hidden bg-[#14161d] border border-[#262a36] shadow-xl flex flex-col transition-all duration-300 hover:border-[#ea580c]/50 hover:shadow-2xl hover:shadow-[#ea580c]/10 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Container with Hover Zoom */}
                <div className={`relative w-full overflow-hidden bg-[#0a0b0d] ${
                  isFeatured ? 'h-72 sm:h-96' : 'h-64 sm:h-72'
                }`}>
                  <motion.img
                    src={currentImg}
                    alt={slot.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161d] via-[#14161d]/30 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-heading font-bold text-white uppercase tracking-wider">
                      <Flame className="w-3 h-3 text-[#ea580c]" />
                      {slot.tags[0]}
                    </span>

                    {/* Quick Replace / Upload Trigger */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlotToUpload(slot);
                      }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1e222c]/90 hover:bg-[#ea580c] backdrop-blur-md border border-[#323847] hover:border-[#ea580c] text-[11px] font-heading font-bold text-white transition-all shadow-md active:scale-95"
                      title="Substituir por arquivo de foto real"
                    >
                      <Upload className="w-3 h-3" />
                      <span>Trocar Foto</span>
                    </button>
                  </div>

                  {/* Quick Expand Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-xl bg-black/75 hover:bg-[#ea580c] backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all shadow-lg hover:scale-110 active:scale-95 opacity-90 group-hover:opacity-100"
                    title="Ver foto em tamanho grande"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
                      {slot.tags.slice(1).join(' • ')}
                    </span>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-white group-hover:text-[#f59e0b] transition-colors">
                      {slot.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9c9589] leading-relaxed line-clamp-2">
                      {slot.description}
                    </p>
                  </div>

                  {/* Actions & Price */}
                  <div className="pt-2 border-t border-[#20242e] flex items-center justify-between gap-3">
                    {menuItem && (
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-[#736c61]">Valor no cardápio</span>
                        <span className="font-heading font-black text-lg text-white">
                          R$ {menuItem.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    )}

                    {menuItem && (
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => onSelectItem(menuItem)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#e03a14] hover:bg-[#c9320f] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#e03a14]/20"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Pedir Este</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Photo Manager Drawer/Modal */}
        <AnimatePresence>
          {activeSlotToUpload && (
            <motion.div
              key="upload-photo-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setActiveSlotToUpload(null)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md rounded-2xl bg-[#15171e] border border-[#2b303c] p-6 shadow-2xl space-y-5"
              >
                <div className="flex items-center justify-between border-b border-[#262b36] pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#ea580c]/15 border border-[#ea580c]/30 flex items-center justify-center text-[#ea580c]">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-white">Carregar Foto Real</h4>
                      <p className="text-xs text-[#9c9589]">{activeSlotToUpload.title}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveSlotToUpload(null)}
                    className="text-[#9c9589] hover:text-white text-lg p-1"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-xs text-[#b0a99c] leading-relaxed">
                  Selecione uma foto do seu dispositivo para atualizar este item em todo o site (incluindo o cardápio e destaques). A imagem é salva no navegador!
                </p>

                {/* Upload Box */}
                <label className="border-2 border-dashed border-[#343b4c] hover:border-[#ea580c] rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer bg-[#101217] transition-colors group">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e, activeSlotToUpload.key)}
                  />
                  <div className="w-12 h-12 rounded-full bg-[#1b1f28] group-hover:bg-[#ea580c]/20 flex items-center justify-center text-[#ea580c] transition-colors">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-bold text-white group-hover:text-[#ea580c] transition-colors block">
                      Clique para escolher o arquivo
                    </span>
                    <span className="text-[11px] text-[#787267]">PNG, JPG ou WEBP até 10MB</span>
                  </div>
                </label>

                {uploadSuccess === activeSlotToUpload.key && (
                  <div className="p-3 rounded-xl bg-[#22c55e]/15 border border-[#22c55e]/30 text-[#22c55e] text-xs font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Foto atualizada com sucesso!</span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      photoStore.removePhoto(activeSlotToUpload.key);
                      setActiveSlotToUpload(null);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-[#8c8577] hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Restaurar Padrão
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveSlotToUpload(null)}
                    className="px-4 py-2 rounded-xl bg-[#20242e] hover:bg-[#282d3a] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors"
                  >
                    Concluir
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* High Res Lightbox Modal */}
        <AnimatePresence>
          {selectedSlot && (
            <motion.div
              key="lightbox-photo-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedSlot(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-[#14161e] border border-[#2b303c] shadow-2xl flex flex-col"
              >
                <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
                  <img
                    src={getSlotImage(selectedSlot)}
                    alt={selectedSlot.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[65vh] w-full object-contain"
                  />
                  <button
                    onClick={() => setSelectedSlot(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#ea580c] transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-6 bg-[#161820] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#252934]">
                  <div className="space-y-1">
                    <h3 className="font-heading font-black text-xl text-white">
                      {selectedSlot.title}
                    </h3>
                    <p className="text-xs text-[#a39e93]">
                      {selectedSlot.subtitle}
                    </p>
                  </div>

                  {(() => {
                    const item = getCorrespondingMenuItem(selectedSlot.targetDishId);
                    if (!item) return null;
                    return (
                      <button
                        onClick={() => {
                          onSelectItem(item);
                          setSelectedSlot(null);
                        }}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#e03a14] hover:bg-[#c9320f] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
                      >
                        <Plus className="w-4 h-4" />
                        ADICIONAR AO PEDIDO (R$ {item.price.toFixed(2).replace('.', ',')})
                      </button>
                    );
                  })()}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
