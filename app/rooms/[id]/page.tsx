"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BookingCard } from "@/components/BookingCard";
import { MOCK_PROPERTIES } from "@/data/mockProperties";
import { Property } from "@/types";

interface RoomDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function RoomDetailPage({ params }: RoomDetailPageProps) {
  const resolvedParams = use(params);
  const roomId = resolvedParams.id;

  const [property, setProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Simulación de carga diferida
  useEffect(() => {
    const timer = setTimeout(() => {
      const found = MOCK_PROPERTIES.find((item) => item.id === roomId) || MOCK_PROPERTIES[0];
      setProperty(found);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [roomId]);

  if (isLoading || !property) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <main className="max-w-7xl w-full mx-auto px-4 md:px-8 py-8 animate-pulse flex flex-col gap-6">
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="aspect-[16/9] md:aspect-[2/1] bg-gray-200 rounded-2xl w-full"></div>
          <div className="h-20 bg-gray-200 rounded w-2/3"></div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar Global */}
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-6 flex flex-col gap-6">
        {/* Breadcrumb / Botón Volver al Catálogo */}
        <div className="flex items-center justify-between">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-black transition hover:underline"
          >
            ‹ Volver al Catálogo
          </Link>

          <div className="flex items-center gap-4 text-xs font-semibold text-gray-700">
            <button type="button" className="hover:underline flex items-center gap-1">
              ↗ Compartir
            </button>
            <button type="button" className="hover:underline flex items-center gap-1">
              ♡ Guardar
            </button>
          </div>
        </div>

        {/* Título y Ubicación */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {property.title}
          </h1>
          <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600 mt-2 font-medium">
            <span className="font-bold text-gray-900">★ {property.rating.toFixed(1)}</span>
            <span>·</span>
            <span className="underline cursor-pointer">{property.reviewsCount} evaluaciones</span>
            <span>·</span>
            <span>{property.location}</span>
          </div>
        </div>

        {/* Galería de Fotos de 5 Imágenes (Grid en escritorio, carrusel en móvil) */}
        <div className="relative">
          {/* Escritorio: Rejilla de 5 fotos */}
          <div className="hidden md:grid grid-cols-4 gap-2 h-[420px] rounded-2xl overflow-hidden">
            {/* Foto principal grande */}
            <div className="col-span-2 row-span-2 relative h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover hover:opacity-95 transition cursor-pointer"
              />
            </div>
            {/* 4 Fotos secundarias en grid */}
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="relative h-full bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={property.images[idx] || property.images[0]}
                  alt={`${property.title} ${idx}`}
                  className="w-full h-full object-cover hover:opacity-95 transition cursor-pointer"
                />
              </div>
            ))}
          </div>

          {/* Móvil: Carrusel deslizable */}
          <div className="md:hidden relative aspect-square w-full rounded-xl overflow-hidden bg-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={property.images[activeImgIndex] || property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            {property.images.length > 1 && (
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] px-2.5 py-1 rounded-full font-medium">
                {activeImgIndex + 1} / {property.images.length}
              </div>
            )}
          </div>

          <button
            type="button"
            className="absolute bottom-4 right-4 bg-white border border-gray-900 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-lg shadow hover:bg-gray-50 transition"
          >
            田 Mostrar todas las fotos
          </button>
        </div>

        {/* Sección de Detalle en 2 Columnas (Info Izquierda | Tarjeta Reserva Derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
          {/* Columna Izquierda (Información) */}
          <div className="lg:col-span-7 flex flex-col gap-6 divide-y divide-gray-200">
            {/* Información básica del espacio */}
            <div className="pb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {property.type} en {property.location}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                1 cama individual · Baño compartido · Cancelación gratuita
              </p>

              {property.isTravellerChoice && (
                <div className="mt-4 p-4 border border-gray-200 rounded-2xl bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">Recomendación del viajero</h4>
                      <p className="text-xs text-gray-600">Uno de los alojamientos más amados en Airbnb</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-extrabold text-gray-900">{property.rating.toFixed(1)}</span>
                    <p className="text-[10px] text-gray-500">★ ★ ★ ★ ★</p>
                  </div>
                </div>
              )}
            </div>

            {/* Fila del Anfitrión */}
            <div className="py-6 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={property.host.avatarUrl}
                alt={property.host.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-200"
              />
              <div>
                <h3 className="font-bold text-sm text-gray-900">Anfitrión: {property.host.name}</h3>
                <p className="text-xs text-gray-500">{property.host.experienceYears} años de experiencia hospedando</p>
              </div>
            </div>

            {/* Descripción */}
            <div className="py-6">
              <h3 className="font-bold text-base text-gray-900 mb-2">Acerca de este espacio</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Cuadrícula de Servicios (Amenities) */}
            <div className="py-6">
              <h3 className="font-bold text-base text-gray-900 mb-4">Lo que este lugar ofrece</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-800">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                    <span className="text-base">✓</span>
                    <span className="font-medium text-xs md:text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha (Tarjeta de Reserva) */}
          <div className="lg:col-span-5">
            <BookingCard
              pricePerNight={property.pricePerNight}
              totalPrice={property.totalPrice}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
