import { useState, useRef, useEffect } from "react";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";

interface DateFilterProps {
  onCustomChange: (startDate: string, endDate: string) => void;
}

export const DateFilter = ({ onCustomChange }: DateFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dates, setDates] = useState({ from: "", to: "" });
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDateInput = (field: "from" | "to", value: string) => {
    const newDates = { ...dates, [field]: value };
    setDates(newDates);
  };

  const getButtonLabel = () => {
    if (!dates.from && !dates.to) return "Select Date Range";
    return `${dates.from || "..."} — ${dates.to || "..."}`;
  };

  return (
    <div className="relative inline-block text-left" ref={popoverRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-x-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all"
      >
        <CalendarIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
        {getButtonLabel()}
        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 z-20 mt-2 w-80 origin-top-left rounded-xl bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="from-date"
                className="block text-xs font-bold text-gray-500 uppercase mb-1"
              >
                From Date
              </label>
              <input
                id="from-date"
                type="date"
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={dates.from}
                onChange={(e) => handleDateInput("from", e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="to-date"
                className="block text-xs font-bold text-gray-500 uppercase mb-1"
              >
                To Date
              </label>
              <input
                id="to-date"
                type="date"
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={dates.to}
                onChange={(e) => handleDateInput("to", e.target.value)}
              />
            </div>

            <button
              onClick={() => onCustomChange(dates.from, dates.to)}
              disabled={!dates.from && !dates.to}
              className="w-full bg-blue-600 text-white text-sm font-semibold py-2 rounded-lg
                         transition-colors shadow-sm
                         hover:bg-blue-700
                         disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:shadow-none"
            >
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
