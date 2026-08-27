"use client";

import { useState } from "react";
import Link from "next/link";
import { Property } from "@/types";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentImgIndex < property.images.length - 1) {
      setCurrentImgIndex((prev) => prev + 1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentImgIndex > 0) {
      setCurrentImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="group flex flex-col relative">
      {/* Contenedor Imagen y Navegación */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-200">
        <Link href={`/rooms/${property.id}`} className="block h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={property.images[currentImgIndex]}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Badge Recomendación del viajero */}
        {property.isTravellerChoice && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-gray-800 shadow-sm border border-gray-100 pointer-events-none">
            Recomendación del viajero
          </div>
        )}

        {/* Botón Favorito */}
        <button
          type="button"
          aria-label="Guardar en favoritos"
          className="absolute top-3 right-3 text-white/80 hover:text-rose-500 transition z-10"
        >
          <svg className="w-6 h-6 fill-black/30 stroke-white stroke-2" viewBox="0 0 32 32">
            <path d="M16 28c7-4.733 14-10 14-17 0-4.418-3.582-8-8-8-2.923 0-5.467 1.565-6.85 3.916C13.767 4.565 11.223 3 8.3 3c-4.418 0-8 3.582-8 8 0 7 7 12.267 14 17z" />
          </svg>
        </button>

        {/* Controles Carrusel de Fotos */}
        {property.images.length > 1 && (
          <div className="z-10">
            {currentImgIndex > 0 && (
              <button
                type="button"
                onClick={prevImage}
                aria-label="Imagen anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow text-xs opacity-0 group-hover:opacity-100 transition"
              >
                ‹
              </button>
            )}
            {currentImgIndex < property.images.length - 1 && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Siguiente imagen"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow text-xs opacity-0 group-hover:opacity-100 transition"
              >
                ›
              </button>
            )}
          </div>
        )}
      </div>

      {/* Info del Alojamiento */}
      <Link href={`/rooms/${property.id}`} className="mt-2.5 flex flex-col gap-1 text-sm">
        <div className="flex justify-between items-start font-semibold text-gray-900 leading-tight">
          <h3 className="line-clamp-1">{property.title}</h3>
          <div className="flex items-center gap-1 text-xs shrink-0">
            <span>★</span>
            <span>{property.rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-gray-500 text-xs">{property.location}</p>
        <div className="mt-1">
          <span className="font-bold text-gray-900">{property.totalPrice} €</span>{" "}
          <span className="text-gray-600 text-xs">en total</span>
        </div>
      </Link>
    </div>
  );
};
