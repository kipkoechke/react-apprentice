"use client";
import { useEvents } from "@/contexts/EventContext";
import { EventDetails } from "@/types/types";
import React from "react";
import { BiCalendar, BiMap } from "react-icons/bi";

const EventSchedule = ({ event }: { event: EventDetails }) => {
  const { formatDate } = useEvents();
  const dbDate = event.date;
  const formattedDate = formatDate(dbDate);

  return (
    <div className=" flex flex-col xl:flex-row gap-4 items-start justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <BiCalendar className="text-2xl text-accent" />
          <div>{formattedDate}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-center">.</div>
          <p>{event.hour}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <BiMap className="text-2xl text-accent" />
        <div>{event.location}</div>
      </div>
    </div>
  );
};

export default EventSchedule;
