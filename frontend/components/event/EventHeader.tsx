import { useState } from "react";

import { SearchBar, DateFilter } from "@/components/global";
import { useRouter, useSearchParams } from "next/navigation";

export const EventHeader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "";

  const categories = ["All", "Music", "Tech", "Food", "Art", "Fitness"];

  const [activeCategory, setActiveCategory] = useState(() => {
    if (category && categories.includes(category)) {
      return category;
    }
    return "All";
  });

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    setActiveCategory(term);
    if (term) {
      params.set("category", term);
    }
    if (!term || term === "All") {
      params.delete("category");
    }
    params.set("page", "0");
    router.push(`?${params.toString()}`);
  };

  const handleCustomDates = (from: string, to: string) => {
    if (from && to) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("from", new Date(from).toISOString());
      params.set("to", new Date(to).toISOString());
      params.set("page", "0");
      router.push(`?${params.toString()}`);
    }
  };

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
                onClick={() => handleSearch(cat)}
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
        <div className="pt-4 border-t border-gray-100">
          <DateFilter
            onCustomChange={(start, end) => handleCustomDates(start, end)}
          />
        </div>
      </div>
    </header>
  );
};
