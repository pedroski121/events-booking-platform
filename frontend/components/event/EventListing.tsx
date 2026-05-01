import React, { useState, useEffect } from "react";
import { EventCard } from "@/components/event/EventCard";
import { EventModal } from "@/components/event/EventModal";
import { SearchBar } from "@/components/global/SearchBar";
import { Event } from "@/lib/api/event";
import { EventHeader } from "@/components/event/EventHeader";

const data = [
  {
    id: "evt-001",
    name: "Downtown Jazz Night",
    description:
      "An evening of live jazz featuring local legends and upcoming stars in an intimate setting. Perfect for music lovers looking for a soulful experience.",
    category: "Music",
    date: "2026-05-15T19:00:00Z",
    venue: "The Blue Note Lounge",
    address: "142 Main Street, Suite 2",
    coverImage: "https://picsum.photos/seed/jazz/600/400",
    price: 25.0,
    currency: "USD",
    totalSpots: 80,
    spotsRemaining: 34,
    organizer: {
      name: "City Arts Collective",
      email: "events@cityarts.example.com",
    },
  },
  {
    id: "evt-002",
    name: "Next.js & Tailwind Workshop",
    description:
      "A deep dive into modern web development. Learn how to build high-performance applications using the latest Next.js features and utility-first CSS.",
    category: "Tech",
    date: "2026-05-18T10:00:00Z",
    venue: "Innovation Hub",
    address: "500 Tech Plaza",
    coverImage: "https://picsum.photos/seed/tech/600/400",
    price: 0.0,
    currency: "USD",
    totalSpots: 50,
    spotsRemaining: 5,
    organizer: { name: "Dev Community", email: "hello@devcomm.io" },
  },
  {
    id: "evt-003",
    name: "Street Food Carnival",
    description:
      "Taste the world in one place! Over 30 vendors serving everything from street tacos to gourmet bao buns. Live music and family-friendly activities included.",
    category: "Food",
    date: "2026-05-20T12:00:00Z",
    venue: "Riverside Park",
    address: "100 Waterfront Way",
    coverImage: "https://picsum.photos/seed/food/600/400",
    price: 10.0,
    currency: "USD",
    totalSpots: 500,
    spotsRemaining: 210,
    organizer: { name: "Global Eats", email: "info@globaleats.net" },
  },
  {
    id: "evt-004",
    name: "Abstract Art Exhibition",
    description:
      "Explore the world of contemporary abstract art. Featuring works from 15 local artists focusing on texture and emotion through mixed media.",
    category: "Art",
    date: "2026-05-22T18:00:00Z",
    venue: "Modern Gallery",
    address: "88 Gallery Row",
    coverImage: "https://picsum.photos/seed/art/600/400",
    price: 15.0,
    currency: "USD",
    totalSpots: 100,
    spotsRemaining: 45,
    organizer: { name: "Artistic Vision", email: "curator@artvision.com" },
  },
  {
    id: "evt-005",
    name: "Sunrise Yoga Session",
    description:
      "Start your day with mindfulness. An all-levels yoga flow guided by certified instructors as the sun rises over the city skyline.",
    category: "Fitness",
    date: "2026-05-23T06:30:00Z",
    venue: "Skyline Rooftop",
    address: "202 Highrise Blvd",
    coverImage: "https://picsum.photos/seed/yoga/600/400",
    price: 20.0,
    currency: "USD",
    totalSpots: 30,
    spotsRemaining: 12,
    organizer: { name: "Urban Wellness", email: "zen@urbanwell.com" },
  },
  {
    id: "evt-006",
    name: "Indie Rock Showcase",
    description:
      "Discover your new favorite band. A night featuring three local indie rock groups known for their high energy and unique sound.",
    category: "Music",
    date: "2026-05-25T20:00:00Z",
    venue: "The Garage Venue",
    address: "45 Industrial Ave",
    coverImage: "https://picsum.photos/seed/rock/600/400",
    price: 18.0,
    currency: "USD",
    totalSpots: 150,
    spotsRemaining: 88,
    organizer: { name: "Local Beats", email: "shows@localbeats.com" },
  },
  {
    id: "evt-007",
    name: "AI Ethics Seminar",
    description:
      "Join industry leaders for a panel discussion on the ethical implications of artificial intelligence in modern society and business.",
    category: "Tech",
    date: "2026-05-27T14:00:00Z",
    venue: "City University Library",
    address: "900 Education Circle",
    coverImage: "https://picsum.photos/seed/ai/600/400",
    price: 0.0,
    currency: "USD",
    totalSpots: 200,
    spotsRemaining: 150,
    organizer: { name: "Future Thinkers", email: "contact@futurethink.org" },
  },
  {
    id: "evt-008",
    name: "Wine & Cheese Tasting",
    description:
      "An exquisite pairing journey through European vineyards and artisan creameries. Led by a certified sommelier.",
    category: "Food",
    date: "2026-05-28T18:30:00Z",
    venue: "The Vintage Cellar",
    address: "12 Cork Street",
    coverImage: "https://picsum.photos/seed/wine/600/400",
    price: 45.0,
    currency: "USD",
    totalSpots: 40,
    spotsRemaining: 8,
    organizer: {
      name: "The Vintage Cellar",
      email: "reservations@vintagecellar.com",
    },
  },
  {
    id: "evt-009",
    name: "Pottery Workshop",
    description:
      "Get your hands dirty and learn the basics of wheel-throwing and hand-building. All materials provided; take home your creation!",
    category: "Art",
    date: "2026-05-30T11:00:00Z",
    venue: "Clay Studio",
    address: "33 Artisan Way",
    coverImage: "https://picsum.photos/seed/pottery/600/400",
    price: 55.0,
    currency: "USD",
    totalSpots: 12,
    spotsRemaining: 2,
    organizer: { name: "Clay Studio", email: "classes@claystudio.com" },
  },
  {
    id: "evt-010",
    name: "Park Run 5K",
    description:
      "A community-focused 5K run through the scenic city park. All fitness levels welcome. Medals for all finishers!",
    category: "Fitness",
    date: "2026-06-01T08:00:00Z",
    venue: "Central Park Entrance",
    address: "Park Drive & 5th",
    coverImage: "https://picsum.photos/seed/run/600/400",
    price: 5.0,
    currency: "USD",
    totalSpots: 300,
    spotsRemaining: 245,
    organizer: { name: "Run Club", email: "info@runclub.com" },
  },
  {
    id: "evt-011",
    name: "Classical Piano Recital",
    description:
      "A breathtaking performance of Chopin and Debussy by world-renowned pianist Clara Schumann. A must-see for classical enthusiasts.",
    category: "Music",
    date: "2026-06-03T19:30:00Z",
    venue: "Concert Hall",
    address: "77 Symphony Way",
    coverImage: "https://picsum.photos/seed/piano/600/400",
    price: 40.0,
    currency: "USD",
    totalSpots: 250,
    spotsRemaining: 110,
    organizer: {
      name: "Classical Society",
      email: "tickets@classicalsociety.org",
    },
  },
  {
    id: "evt-012",
    name: "Cybersecurity Summit",
    description:
      "Stay ahead of the threats. A full day of workshops and talks on the latest in network security, encryption, and threat detection.",
    category: "Tech",
    date: "2026-06-05T09:00:00Z",
    venue: "Convention Center",
    address: "1000 Expo Way",
    coverImage: "https://picsum.photos/seed/security/600/400",
    price: 150.0,
    currency: "USD",
    totalSpots: 400,
    spotsRemaining: 320,
    organizer: { name: "SecureTech", email: "summit@securetech.com" },
  },
  {
    id: "evt-013",
    name: "Baking Masterclass",
    description:
      "Learn the secrets to the perfect sourdough and buttery croissants from master baker Jean-Luc. Small group setting for hands-on learning.",
    category: "Food",
    date: "2026-06-07T10:00:00Z",
    venue: "The Flour Lab",
    address: "22 Bakery Lane",
    coverImage: "https://picsum.photos/seed/baking/600/400",
    price: 75.0,
    currency: "USD",
    totalSpots: 10,
    spotsRemaining: 1,
    organizer: { name: "The Flour Lab", email: "learn@flourlab.com" },
  },
  {
    id: "evt-014",
    name: "Graffiti Tour & Workshop",
    description:
      "Explore the city's best street art followed by a guided workshop where you'll learn basic spray paint techniques.",
    category: "Art",
    date: "2026-06-10T13:00:00Z",
    venue: "Urban Arts Center",
    address: "500 Street Art Alley",
    coverImage: "https://picsum.photos/seed/graffiti/600/400",
    price: 30.0,
    currency: "USD",
    totalSpots: 20,
    spotsRemaining: 4,
    organizer: { name: "Street Vision", email: "tours@streetvision.com" },
  },
  {
    id: "evt-015",
    name: "HIIT in the Park",
    description:
      "A high-intensity interval training session designed to burn calories and build strength. High energy, loud music, and a great workout.",
    category: "Fitness",
    date: "2026-06-12T17:30:00Z",
    venue: "East Side Park",
    address: "400 Greenway Terrace",
    coverImage: "https://picsum.photos/seed/hiit/600/400",
    price: 0.0,
    currency: "USD",
    totalSpots: 100,
    spotsRemaining: 65,
    organizer: { name: "Peak Fitness", email: "info@peakfit.com" },
  },
];

export const EventListing = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Categories based on Spec
  const categories = ["All", "Music", "Tech", "Food", "Art", "Fitness"];

  useEffect(() => {
    fetchEvents();
  }, [search, activeCategory]);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      // In a real app, this would call GET /api/events with query params
      // const res = await fetch(
      //   `/api/events?search=${search}&category=${activeCategory === "All" ? "" : activeCategory}`,
      // );
      // const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error("Failed to fetch events", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium text-gray-600">No events found</h3>
          <p className="text-gray-400 mt-2">
            Try adjusting your filters or search terms.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      )}
      {/* Detail Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </main>
  );
};
