"use client";

import React from "react";
import { useEvents } from "@/contexts/EventContext";
import SearchBar from "@/components/searchbar/SearchBar";
import Event from "@/components/events/Event";
import EventList from "@/components/events/EventList";

export default function Home() {
  const { showEventList, handleClearSearch } = useEvents();

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <SearchBar />
        <button className="text-accent" onClick={handleClearSearch}>
          Clear Search
        </button>
      </div>
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
