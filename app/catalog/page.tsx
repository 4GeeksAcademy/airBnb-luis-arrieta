"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PropertyCard } from "@/components/PropertyCard";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { MOCK_PROPERTIES } from "@/data/mockProperties";

const QUICK_FILTERS = [
  "Filtros",
  "Wifi",
  "Lavadora",
  "Aparcamiento gratuito",
  "Aire acondicionado",
  "Cocina",
  "1 baño o más",
  "Llegada autónoma",
  "TV",
  "Admite mascotas",
];

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const toggleFilter = (filter: string) => {
    if (filter === "Filtros") return;
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  // Filtrado por consulta y etiquetas
  const filteredProperties = MOCK_PROPERTIES.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesAmenities = activeFilters.every((filter) =>
      item.amenities.some((amenity) => amenity.toLowerCase().includes(filter.toLowerCase()))
    );

    return matchesSearch && matchesAmenities;
  }).sort((a, b) =>
    sortOrder === "asc" ? a.totalPrice - b.totalPrice : b.totalPrice - a.totalPrice
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar principal */}
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Barra de Filtros Rápidos (Píldoras) */}
      <div className="bg-white border-b border-gray-200 py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {QUICK_FILTERS.map((filter) => {
            const isActive = activeFilters.includes(filter);
            return (
              <button
                key={filter}
                type="button"
                onClick={() => toggleFilter(filter)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition whitespace-nowrap ${
                  isActive
                    ? "border-black bg-black text-white"
                    : "border-gray-300 text-gray-700 hover:border-black"
                }`}
              >
                {filter === "Filtros" ? "🎛️ Filtros" : filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cabecera de Resultados y Ordenación */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 pt-6 pb-2 flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            {filteredProperties.length} alojamientos
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Precios con impuestos incluidos</p>
        </div>

        {/* Control de Ordenación */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
          <span>Ordenar por precio:</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            className="border border-gray-300 rounded-lg px-2.5 py-1.5 bg-white text-gray-900 outline-none focus:border-black cursor-pointer"
          >
            <option value="asc">Menor a Mayor €</option>
            <option value="desc">Mayor a Menor €</option>
          </select>
        </div>
      </div>

      {/* Contenido Principal Dividido (Split Screen) */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Lista de Alojamientos (Izquierda) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div
                key={property.id}
                onMouseEnter={() => setSelectedPropertyId(property.id)}
                className={selectedPropertyId === property.id ? "ring-2 ring-rose-500 rounded-xl p-1 transition" : "p-1"}
              >
                <PropertyCard property={property} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              <p className="text-base font-medium">No se encontraron alojamientos.</p>
              <p className="text-xs">Prueba a desmarcar algunos filtros.</p>
            </div>
          )}
        </div>

        {/* Mapa Interactivo (Derecha / Abajo) */}
        <div className="lg:col-span-5 h-[450px] lg:h-[calc(100vh-220px)] lg:sticky lg:top-24">
          <MapPlaceholder
            properties={filteredProperties}
            selectedPropertyId={selectedPropertyId}
            onSelectProperty={setSelectedPropertyId}
          />
        </div>
      </main>
    </div>
  );
}

