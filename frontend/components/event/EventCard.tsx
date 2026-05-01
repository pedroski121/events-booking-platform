import { Search, Calendar, MapPin, Tag, Users, X } from "lucide-react";
import { Event } from "@/lib/api/event";
export function EventCard({
  event,
  onClick,
}: {
  event: Event;
  onClick: () => void;
}) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={event.coverImage}
          alt={event.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
              event.price === 0
                ? "bg-green-100 text-green-700"
                : "bg-white text-slate-900"
            }`}
          >
            {event.price === 0 ? "FREE" : `$${event.price}`}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
            {event.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
          {event.name}
        </h3>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{event.venue}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
