"use client";

import React from "react";
import { useEvents } from "@/contexts/EventContext";
import EventList from "@/components/events/EventList";
import Hero from "@/components/hero/Hero";

export default function Home() {
  const { showEventList } = useEvents();

  return (
    <div>
      <Hero />
      <div className="flex flex-col items-center justify-center"></div>
      {showEventList ? (
        <div className="container mx-auto">
          <EventList />
        </div>
      ) : (
        <div>
          <div className="container mx-auto">
            {/* Upcoming events slider */}
            <div>Upcoming events slider</div>
            {/* Download the app section */}
            <div>Download the app section</div>
            {/* Recommended events slider */}
            <div>Recommended events slider</div>
          </div>
        </div>
      )}
    </div>
  );
}
