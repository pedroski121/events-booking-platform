"use client";

import { EventPage } from "@/components/event/EventPage";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <EventPage />
    </Suspense>
  );
}
