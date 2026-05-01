import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const displayPages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center space-x-2 mt-12 pb-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
        className="p-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-1">
        {displayPages.map((displayNum) => (
          <button
            key={displayNum}
            // subtract 1 from the display number to get the 0-index
            onClick={() => onPageChange(displayNum - 1)}
            className={`w-10 h-10 rounded-lg border text-sm font-medium transition-all ${
              currentPage === displayNum - 1
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-white text-gray-600 hover:text-blue-600"
            }`}
          >
            {displayNum}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className="p-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
};
