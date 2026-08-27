"use client";

interface FilterBarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const CATEGORIES = [
  { name: "Todo", icon: "🌐" },
  { name: "Alojamientos", icon: "🏡" },
  { name: "Experiencias", icon: "🎈" },
  { name: "Servicios", icon: "🛎️" },
  { name: "Mansiones", icon: "🏰" },
  { name: "Playa", icon: "🏖️" },
  { name: "Tendencias", icon: "🔥" }
];

export const FilterBar = ({ activeCategory, onSelectCategory }: FilterBarProps) => {
  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className={`flex flex-col items-center gap-1.5 pb-2 border-b-2 transition whitespace-nowrap text-xs md:text-sm font-medium ${
                isActive
                  ? "border-black text-black font-semibold"
                  : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
              }`}
            >
              <span className="text-xl">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

