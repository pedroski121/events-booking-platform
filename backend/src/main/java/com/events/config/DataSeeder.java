package com.events.config;

import com.events.model.Event;
import com.events.model.Organizer;
import com.events.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public void run(String[] args) throws Exception {
        if (eventRepository.count() == 0) {
            List<Event> events = generateSampleEvents();
            eventRepository.saveAll(events);
            System.out.println("Seeded " + events.size() + " sample events");
        }
    }

    private List<Event> generateSampleEvents() {
        return Arrays.asList(
                createEvent("Downtown Jazz Night", "An evening of live jazz featuring local artists",
                        "Music", LocalDateTime.of(2026, 5, 15, 19, 0), "The Blue Note Lounge",
                        "142 Main Street, Suite 2", "https://picsum.photos/seed/jazz1/600/400",
                        25.00, "USD", 80, 34, new Organizer("City Arts Collective", "events@cityarts.com")),

                createEvent("Tech Innovation Summit", "Annual tech conference with industry leaders",
                        "Tech", LocalDateTime.of(2026, 5, 20, 9, 0), "Convention Center",
                        "100 Convention Blvd", "https://picsum.photos/seed/tech1/600/400",
                        99.00, "USD", 200, 78, new Organizer("TechConnect", "hello@techconnect.com")),

                createEvent("Food Truck Festival", "Sample cuisines from 30+ food trucks",
                        "Food", LocalDateTime.of(2026, 5, 22, 11, 0), "Waterfront Park",
                        "500 River Road", "https://picsum.photos/seed/food1/600/400",
                        0.00, "USD", 500, 320, new Organizer("Foodie Events", "info@foodieevents.com")),

                createEvent("Modern Art Exhibition", "Contemporary art from emerging artists",
                        "Art", LocalDateTime.of(2026, 5, 18, 10, 0), "Riverside Gallery",
                        "88 Art District", "https://picsum.photos/seed/art1/600/400",
                        15.00, "USD", 100, 45, new Organizer("Art Now", "contact@artnow.org")),

                createEvent("Sunset Yoga Workshop", "Outdoor yoga session with view",
                        "Fitness", LocalDateTime.of(2026, 5, 25, 18, 30), "Beachside Studio",
                        "45 Ocean Drive", "https://picsum.photos/seed/yoga1/600/400",
                        20.00, "USD", 40, 12, new Organizer("Wellness Together", "yoga@wellness.com")),

                createEvent("Rock the Park Concert", "Live rock music featuring multiple bands",
                        "Music", LocalDateTime.of(2026, 5, 28, 17, 0), "Central Park Amphitheater",
                        "1 Park Avenue", "https://picsum.photos/seed/rock1/600/400",
                        45.00, "USD", 1000, 650, new Organizer("Live Music Co", "tickets@livemusic.com")),

                createEvent("Startup Pitch Night", "Watch startups pitch to investors",
                        "Tech", LocalDateTime.of(2026, 5, 17, 18, 0), "Innovation Hub",
                        "234 Tech Street", "https://picsum.photos/seed/startup1/600/400",
                        10.00, "USD", 60, 23, new Organizer("Startup League", "info@startupleague.com")),

                createEvent("Wine & Cheese Tasting", "Premium wine and cheese pairing event",
                        "Food", LocalDateTime.of(2026, 5, 24, 19, 30), "Vineyard Estate",
                        "789 Wine Road", "https://picsum.photos/seed/wine1/600/400",
                        65.00, "USD", 50, 18, new Organizer("Gourmet Experiences", "hello@gourmet.com")),

                createEvent("Street Art Tour", "Guided tour of city murals and graffiti",
                        "Art", LocalDateTime.of(2026, 5, 19, 14, 0), "Meet at City Square",
                        "Downtown Plaza", "https://picsum.photos/seed/streetart1/600/400",
                        0.00, "USD", 25, 10, new Organizer("Urban Arts", "tours@urbanarts.org")),

                createEvent("High-Intensity Training", "45-minute HIIT workout session",
                        "Fitness", LocalDateTime.of(2026, 5, 21, 8, 0), "Fitness First Gym",
                        "123 Health Way", "https://picsum.photos/seed/hiit1/600/400",
                        15.00, "USD", 30, 19, new Organizer("FitLife", "classes@fitlife.com")),

                createEvent("Classical Music Gala", "Orchestra performance of classical masterpieces",
                        "Music", LocalDateTime.of(2026, 6, 1, 20, 0), "Symphony Hall",
                        "300 Music Lane", "https://picsum.photos/seed/classical1/600/400",
                        75.00, "USD", 300, 210, new Organizer("City Symphony", "boxoffice@symphony.org")),

                createEvent("Blockchain Expo", "Learn about blockchain and crypto",
                        "Tech", LocalDateTime.of(2026, 5, 30, 10, 0), "Tech Plaza",
                        "456 Digital Ave", "https://picsum.photos/seed/blockchain1/600/400",
                        50.00, "USD", 150, 95, new Organizer("Crypto World", "events@cryptoworld.com")),

                createEvent("Sushi Making Class", "Learn to make authentic sushi rolls",
                        "Food", LocalDateTime.of(2026, 5, 23, 18, 0), "Japanese Cultural Center",
                        "67 Sakura Street", "https://picsum.photos/seed/sushi1/600/400",
                        40.00, "USD", 20, 14, new Organizer("Culinary Institute", "classes@culinary.edu")),

                createEvent("Photography Workshop", "Master composition and lighting",
                        "Art", LocalDateTime.of(2026, 5, 26, 13, 0), "Art Space Studio",
                        "22 Creative Lane", "https://picsum.photos/seed/photo1/600/400",
                        35.00, "USD", 15, 8, new Organizer("Photo Masters", "workshops@photomasters.com")),

                createEvent("Marathon Training Run", "Group run for marathon preparation",
                        "Fitness", LocalDateTime.of(2026, 5, 29, 7, 0), "Community Track",
                        "50 Sports Complex", "https://picsum.photos/seed/marathon1/600/400",
                        0.00, "USD", 100, 62, new Organizer("Run Club", "info@runclub.org"))
        );
    }

    private Event createEvent(String name, String description, String category, LocalDateTime date,
                              String venue, String address, String coverImage, double price,
                              String currency, int totalSpots, int spotsRemaining, Organizer organizer) {
        Event event = new Event();
        event.setName(name);
        event.setDescription(description);
        event.setCategory(category);
        event.setDate(date);
        event.setVenue(venue);
        event.setAddress(address);
        event.setCoverImage(coverImage);
        event.setPrice(price);
        event.setCurrency(currency);
        event.setTotalSpots(totalSpots);
        event.setSpotsRemaining(spotsRemaining);
        event.setOrganizer(organizer);
        return event;
    }
}
