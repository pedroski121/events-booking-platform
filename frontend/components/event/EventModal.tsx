import { Search, Calendar, MapPin, Tag, Users, X } from "lucide-react";
import { Event } from "@/lib/api/event";
export function EventModal({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white border shadow-sm z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src={event.coverImage}
          className="w-full h-64 object-cover"
          alt=""
        />

        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold">{event.name}</h2>
              <p className="text-blue-600 font-medium mt-1">{event.venue}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">${event.price}</p>
              <p className="text-sm text-gray-500">{event.currency}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Users className="text-gray-400" />
              <div>
                <p className="text-xs text-gray-500 uppercase">Spots Left</p>
                <p className="font-bold">
                  {event.spotsRemaining} / {event.totalSpots}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Tag className="text-gray-400" />
              <div>
                <p className="text-xs text-gray-500 uppercase">Category</p>
                <p className="font-bold">{event.category}</p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate mb-8">
            <h4 className="text-lg font-semibold mb-2">About this event</h4>
            <p className="text-gray-600 leading-relaxed">{event.description}</p>
          </div>

          <div className="border-t pt-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Organized by</p>
              <p className="font-medium">{event.organizer.name}</p>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
