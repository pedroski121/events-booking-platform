import { useState } from "react";
import { EventCard } from "@/components/event/EventCard";
import { EventModal } from "@/components/event/EventModal";
import { EventSummary } from "@/lib/api/event";
import { PaginatedBase } from "@/lib/api/base";

export const EventListing = ({
  events,
}: {
  events: PaginatedBase<EventSummary[]>;
}) => {
  const [selectedEvent, setSelectedEvent] = useState<EventSummary | null>(null);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {events.content.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onClick={() => setSelectedEvent(event)}
          />
        ))}
      </div>
      {selectedEvent && (
        <EventModal
          eventId={selectedEvent.id}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </main>
  );
};
