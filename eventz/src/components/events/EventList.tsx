import { useEvents } from "@/contexts/EventContext";
import React from "react";
import Event from "./Event";
import SkeletonGrid from "../skeleton/SkeletonGrid";

const EventList = () => {
  const { filteredEvents, isLoading, error } = useEvents();

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (filteredEvents.length === 0 && !isLoading) {
    return (
      <div className="h-[80vh]">
        <p className="text-white/80 text-center">No events available</p>
      </div>
    );
  }
  if (isLoading) {
    return <SkeletonGrid itemCount={filteredEvents.length} />;
  } else {
    return (
      <div>
        <h4 className="h4 mb-6">{filteredEvents.length} results found.</h4>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-[30px] mb-32 ">
          {filteredEvents.map((event: any, index) => {
            return (
              <div key={index}>
                <Event event={event} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default EventList;
