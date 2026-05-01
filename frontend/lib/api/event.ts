import { Base, PaginatedBase } from "./base";
import { get } from "./client";

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
  organizerName: string;
  organizerEmail: string;
  priceDisplay: string;
}

export type EventSummary = Pick<
  Event,
  | "id"
  | "name"
  | "date"
  | "venue"
  | "category"
  | "coverImage"
  | "priceDisplay"
  | "price"
>;

export const eventApi = {
  getAll: () => get<PaginatedBase<EventSummary[]>>("/events"),
  getSingle: (id: string) => get<Base<Event>>(`/events/${id}`),
};
