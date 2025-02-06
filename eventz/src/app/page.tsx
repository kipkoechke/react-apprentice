"use client";

import React from "react";
import { useEvents } from "@/contexts/EventContext";
import SearchBar from "@/components/searchbar/SearchBar";
import Event from "@/components/events/Event";
import EventList from "@/components/events/EventList";

export default function Home() {
  const { events } = useEvents();

  console.log(events);
  return (
    <div>
      <SearchBar />
      {/* <div className="container mx-auto">
        <EventList />
      </div> */}
    </div>
  );
}
