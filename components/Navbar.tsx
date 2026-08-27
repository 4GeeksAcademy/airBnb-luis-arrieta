"use client";

import Link from "next/link";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar = ({ searchQuery, onSearchChange }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-rose-500 font-bold text-xl md:text-2xl shrink-0">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.408-3.6 8.006-8 8.006-3.292 0-6.187-2.006-7.5-4.913C12.687 30.194 9.792 32.2 6.5 32.2c-4.4 0-8-3.598-8-8.006 0-1.286.326-2.5.971-4.064l.145-.347c.986-2.296 5.146-11.007 7.1-14.836l.533-1.025C8.537 1.963 9.992 1 12 1h4zm0 2h-4c-1.272 0-2.316.634-3.414 2.593L8.053 6.62c-1.91 3.743-6.002 12.31-6.963 14.553l-.133.32C.43 22.784.2 23.504.2 24.194c0 3.313 2.687 6 6 6 2.695 0 5.067-1.78 5.748-4.375l.178-.716.634.364c.982.564 2.112.87 3.24.87 1.128 0 2.258-.306 3.24-.87l.634-.364.178.716C20.733 28.414 23.105 30.194 25.8 30.194c3.313 0 6-2.687 6-6 0-.69-.23-1.41-.757-2.701l-.133-.32c-.961-2.243-5.053-10.81-6.963-14.553l-.533-1.027C22.316 3.634 21.272 3 20 3h-4z" />
          </svg>
          <span className="hidden sm:inline tracking-tight font-extrabold">airbnb</span>
        </Link>

        {/* Formulario / Buscador Interactivo */}
        <form onSubmit={(e) => e.preventDefault()} className="flex-1 max-w-lg">
          <div className="flex items-center border border-gray-300 rounded-full py-1.5 px-3 shadow-sm hover:shadow-md transition bg-gray-50 md:bg-white">
            <input
              type="text"
              placeholder="Buscar destinos (ej. Alicante, Madrid)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full text-xs md:text-sm bg-transparent outline-none text-gray-800 placeholder-gray-500 px-2"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="bg-rose-500 text-white p-2 rounded-full hover:bg-rose-600 transition shrink-0"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Links Derecha */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-700">
          <Link href="/catalog" className="hover:bg-gray-100 py-2 px-3 rounded-full transition">
            Catálogo
          </Link>
          <button type="button" aria-label="Cambiar idioma" className="p-2 hover:bg-gray-100 rounded-full">
            🌐
          </button>
          <div className="flex items-center gap-2 border border-gray-300 rounded-full p-1.5 hover:shadow-md transition cursor-pointer">
            <span className="text-xs px-1">☰</span>
            <div className="w-7 h-7 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
              U
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
