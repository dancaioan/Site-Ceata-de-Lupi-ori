import React, { useState } from 'react';
import { PHOTO_ALBUMS } from '../constants';
import { PhotoAlbum } from '../types';
import { Camera, MapPin, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const PhotoAlbumsSection: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<PhotoAlbum | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openAlbum = (album: PhotoAlbum) => {
    setSelectedAlbum(album);
    setLightboxIndex(0);
  };

  const closeLightbox = () => {
    setSelectedAlbum(null);
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (selectedAlbum && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % selectedAlbum.photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedAlbum && lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + selectedAlbum.photos.length) % selectedAlbum.photos.length
      );
    }
  };

  return (
    <div className="py-14 bg-scout-dark text-slate-200 border-b border-scout-border/40">
      <div className="container mx-auto px-4 max-w-5xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scout-yellow/10 text-scout-yellow text-xs font-bold uppercase tracking-wider border border-scout-yellow/20">
            Albume Foto
          </div>
          <h2 className="font-quote text-2xl sm:text-4xl font-bold text-scout-cream">
            Amintiri din Tabere și Ieșiri
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Momente de neuitat din viața cetei: focuri de tabără, jurăminte pe steag, drumeții pe creste și zâmbete de lupișori.
          </p>
        </div>

        {/* Albums Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PHOTO_ALBUMS.map((album) => (
            <div
              key={album.id}
              onClick={() => openAlbum(album)}
              className="group cursor-pointer bg-scout-surface rounded-2xl overflow-hidden border border-scout-border hover:border-scout-yellow/40 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-scout-darker/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-semibold">
                    <Camera className="w-3.5 h-3.5 text-scout-yellow" />
                    {album.photos.length} fotografii
                  </span>
                  <span className="bg-scout-darker/80 px-2 py-0.5 rounded backdrop-blur-sm border border-scout-border/50">
                    {album.date}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-scout-yellow transition-colors line-clamp-1">
                    {album.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-scout-yellow" />
                    <span>{album.location}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-scout-border/40 flex items-center justify-between text-xs font-bold text-scout-yellow">
                  <span>Deschide albumul</span>
                  <Eye className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal in Bleumarin */}
        {selectedAlbum && lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-[#060B1A]/95 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-scout-surface hover:bg-scout-surfaceLight text-white transition border border-scout-border"
              aria-label="Închide galeria"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-scout-surface hover:bg-scout-surfaceLight text-white transition z-10 border border-scout-border"
              aria-label="Fotografia anterioară"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-scout-surface hover:bg-scout-surfaceLight text-white transition z-10 border border-scout-border"
              aria-label="Fotografia următoare"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
              <div className="relative overflow-hidden rounded-xl shadow-2xl max-h-[70vh] border border-scout-border">
                <img
                  src={selectedAlbum.photos[lightboxIndex].url}
                  alt={selectedAlbum.photos[lightboxIndex].caption}
                  className="w-auto h-auto max-h-[70vh] object-contain rounded-xl"
                />
              </div>

              <div className="text-center mt-4 text-white max-w-xl">
                <div className="text-xs text-scout-yellow font-bold uppercase tracking-wider mb-1">
                  {selectedAlbum.title} • {lightboxIndex + 1} din {selectedAlbum.photos.length}
                </div>
                <p className="text-sm font-medium text-slate-300">
                  {selectedAlbum.photos[lightboxIndex].caption}
                </p>
              </div>

              <div className="flex gap-2 mt-4 overflow-x-auto py-1 max-w-full">
                {selectedAlbum.photos.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 flex-shrink-0 transition ${
                      lightboxIndex === i ? 'border-scout-yellow scale-110' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={p.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
