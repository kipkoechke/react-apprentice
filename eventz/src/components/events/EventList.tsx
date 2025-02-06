import { useEvents } from "@/contexts/EventContext";
import React from "react";
import Event from "./Event";

const EventList = () => {
  const { filteredEvents, isLoading, error } = useEvents();

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (filteredEvents.length === 0 && !isLoading) {
    return <div>No events available</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {filteredEvents.map((event: any, index) => {
          return (
            <div key={index}>
              <Event event={event} />
            </div>
          );
        })}
      </div>
    );
  }
};

export default EventList;
