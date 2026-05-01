import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const SearchBar = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    params.set("page", "0");
    router.push(`?${params.toString()}`);
  }, 200);

  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search events or venues..."
        defaultValue={searchParams.get("search") ?? ""}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-0 outline-none transition-all"
      />
    </div>
  );
};
