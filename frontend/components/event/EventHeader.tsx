import { useState } from "react";

import { SearchBar } from "@/components/global/SearchBar";

export const EventHeader = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Music", "Tech", "Food", "Art", "Fitness"];

  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold tracking-tight mb-6">
          Discover Events
        </h1>

        <div className="flex flex-col md:flex-row gap-4">
          <SearchBar />

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white border text-gray-600 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
