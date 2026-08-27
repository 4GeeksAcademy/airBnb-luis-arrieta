"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { FilterBar } from "@/components/FilterBar";
import { PropertyCard } from "@/components/PropertyCard";
import { MOCK_PROPERTIES } from "@/data/mockProperties";
import { Property } from "@/types";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todo");
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulación de carga diferida (1 segundo)
  useEffect(() => {
    const timer = setTimeout(() => {
      setProperties(MOCK_PROPERTIES);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filtrado dinámico por búsqueda y categoría
  const filteredProperties = properties.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === "Todo" ||
      item.type.toLowerCase().includes(activeCategory.toLowerCase()) ||
      (activeCategory === "Playa" && item.location.toLowerCase().includes("alicante"));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header y Navegación */}
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Fila de Filtros */}
      <FilterBar activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

      {/* Contenido Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Alojamientos populares
        </h2>

        {/* Estado de Carga (Skeletons) */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex flex-col gap-3 animate-pulse">
                <div className="aspect-square bg-gray-200 rounded-xl w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        ) : filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg font-medium">No se encontraron alojamientos.</p>
            <p className="text-sm">Prueba a buscar otro destino o cambiar de categoría.</p>
          </div>
        )}
      </main>
    </div>
  );
}
