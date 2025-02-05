"use client";

import React from "react";
import { useEvents } from "@/contexts/EventContext";
import SearchBar from "@/components/searchbar/SearchBar";

export default function Home() {
  const { events } = useEvents();

  console.log(events);
  return (
    <div>
      <SearchBar />
    </div>
  );
}
