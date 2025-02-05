"use client";
import { useEvents } from "@/contexts/EventContext";
import React from "react";

export default function Home() {
  const { events } = useEvents();

  console.log(events);
  return <div>Home</div>;
}
