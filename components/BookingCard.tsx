"use client";

import { useState } from "react";

interface BookingCardProps {
  pricePerNight: number;
  totalPrice: number;
  maxGuests?: number;
}

export const BookingCard = ({
  pricePerNight,
  totalPrice,
  maxGuests = 6,
}: BookingCardProps) => {
  const [guests, setGuests] = useState(1);
  const [nights] = useState(5);
  const [startDate, setStartDate] = useState("2026-09-01");
  const [endDate, setEndDate] = useState("2026-09-06");

  const computedTotal = pricePerNight * nights * guests;

  const incrementGuests = () => {
    if (guests < maxGuests) setGuests((g) => g + 1);
  };

  const decrementGuests = () => {
    if (guests > 1) setGuests((g) => g - 1);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-xl sticky top-24 flex flex-col gap-4">
      {/* Notice Banner */}
      <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-2">
        <span>🏷️</span>
        <span>Tu precio está por debajo de la media para 60 días</span>
      </div>

      {/* Precio */}
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-gray-900">{computedTotal} €</span>
          <span className="text-sm text-gray-600 font-normal">en total ({nights} noches)</span>
        </div>
        <p className="text-xs text-gray-500 mt-0.5">{pricePerNight} € por noche / huésped</p>
      </div>

      {/* Selector de Fechas e Huéspedes */}
      <div className="border border-gray-300 rounded-xl overflow-hidden text-xs">
        <div className="grid grid-cols-2 border-b border-gray-300">
          <div className="p-2.5 border-r border-gray-300">
            <label htmlFor="checkin-date" className="block font-bold text-gray-800 uppercase text-[10px]">LLEGADA</label>
            <input
              id="checkin-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-transparent font-medium text-gray-800 outline-none mt-0.5"
            />
          </div>
          <div className="p-2.5">
            <label htmlFor="checkout-date" className="block font-bold text-gray-800 uppercase text-[10px]">SALIDA</label>
            <input
              id="checkout-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-transparent font-medium text-gray-800 outline-none mt-0.5"
            />
          </div>
        </div>

        {/* Contador de Huéspedes */}
        <div className="p-3 flex items-center justify-between bg-white">
          <div>
            <span className="block font-bold text-gray-800 uppercase text-[10px]">HUÉSPEDES</span>
            <span className="text-gray-700 font-medium">{guests} {guests === 1 ? "viajero" : "viajeros"}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={decrementGuests}
              disabled={guests <= 1}
              aria-label="Reducir huéspedes"
              className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm font-bold text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:border-black transition"
            >
              -
            </button>
            <span className="font-semibold text-sm px-1">{guests}</span>
            <button
              type="button"
              onClick={incrementGuests}
              disabled={guests >= maxGuests}
              aria-label="Aumentar huéspedes"
              className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm font-bold text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:border-black transition"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Botón CTA */}
      <button
        type="button"
        className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3.5 rounded-xl transition shadow-md hover:shadow-lg text-sm"
      >
        Reservar
      </button>

      <p className="text-center text-xs text-gray-500">No se te cobrará nada todavía</p>
      <p className="text-center text-xs font-semibold text-emerald-700">✓ Cancelación gratuita antes del 31 de agosto</p>
    </div>
  );
};

