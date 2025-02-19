"use client";

import React from "react";
import { useEvents } from "@/contexts/EventContext";
import EventList from "@/components/events/EventList";
import Hero from "@/components/hero/Hero";
import UpcomingEvents from "@/components/upcoming_events/UpcomingEvents";
import RecommendedEvents from "@/components/recommended_events/RecommendedEvents";
import DownloadApp from "@/components/download_app/DownloadApp";

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
            <div>
              <UpcomingEvents />
            </div>
            {/* Download the app section */}
            <div>
              <DownloadApp />
            </div>
            {/* Recommended events slider */}
            <div>
              <RecommendedEvents />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
