export interface Event {
  id: string;
  name: string;
  description: string;
  category: "Music" | "Tech" | "Food" | "Art" | "Fitness";
  date: string;
  venue: string;
  address: string;
  coverImage: string;
  price: number;
  currency: string;
  totalSpots: number;
  spotsRemaining: number;
  organizer: { name: string; email: string };
}
