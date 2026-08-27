"use client";

import { Property } from "@/types";

interface MapPlaceholderProps {
  properties: Property[];
  selectedPropertyId?: string | null;
  onSelectProperty?: (id: string) => void;
}

export const MapPlaceholder = ({
  properties,
  selectedPropertyId,
  onSelectProperty,
}: MapPlaceholderProps) => {
  return (
    <div className="relative w-full h-[400px] lg:h-full min-h-[400px] bg-emerald-50/50 rounded-2xl overflow-hidden border border-gray-200 shadow-inner flex flex-col justify-between p-4">
      {/* Pattern de fondo del mapa */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

      {/* Trazo gráfico del río / costa */}
      <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0,30 Q25,50 50,20 T100,60 L100,100 L0,100 Z" fill="#93c5fd" />
      </svg>

      {/* Badge del mapa */}
      <div className="relative z-10 self-start bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 shadow-sm border border-gray-200 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Mapa interactivo</span>
      </div>

      {/* Pines de precios en el mapa */}
      <div className="relative z-10 w-full h-full my-4">
        {properties.map((prop, idx) => {
          const isSelected = selectedPropertyId === prop.id;

          const positions = [
            { top: "35%", left: "40%" },
            { top: "55%", left: "25%" },
            { top: "25%", left: "65%" },
            { top: "70%", left: "55%" },
          ];
          const pos = positions[idx % positions.length];

          return (
            <button
              key={prop.id}
              type="button"
              onClick={() => onSelectProperty?.(prop.id)}
              style={{ top: pos.top, left: pos.left }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full font-bold text-xs shadow-md transition transform hover:scale-110 ${
                isSelected
                  ? "bg-black text-white z-20 scale-110 ring-2 ring-rose-500"
                  : "bg-white text-gray-900 hover:bg-black hover:text-white z-10 border border-gray-200"
              }`}
            >
              {prop.totalPrice} €
            </button>
          );
        })}
      </div>

      {/* Botones de control del mapa */}
      <div className="relative z-10 self-end flex flex-col gap-1 bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <button type="button" aria-label="Acercar mapa" className="p-2 hover:bg-gray-100 text-xs font-bold text-gray-700">
          +
        </button>
        <div className="border-t border-gray-200" />
        <button type="button" aria-label="Alejar mapa" className="p-2 hover:bg-gray-100 text-xs font-bold text-gray-700">
          -
        </button>
      </div>
    </div>
  );
};
