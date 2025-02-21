import React from "react";
import { useEvents } from "@/contexts/EventContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BiMap } from "react-icons/bi";

const EventLocation = () => {
  const { events, selectedLocation, setSelectedLocation } = useEvents();

  // Generating a list of unique locations from the future events
  const uniqueLocations = [
    // Add default location here
    "All locations",
    // Use Set to remove duplicates
    ...new Set(
      events
        .filter((event) => {
          const eventDate = new Date(event.date);
          const currentDate = new Date();

          // Events that occur after the current date
          if (eventDate > currentDate) return true;

          // Events happening today but not yet started/ time has not yet passed
          if (eventDate.toDateString() === currentDate.toDateString()) {
            const eventTime = eventDate.getTime(); // Get event time in milliseconds
            const currentTime = currentDate.getTime(); // Get current time in milliseconds
            return eventTime > currentTime; // Return true if event time is greater than current time
          }

          // Events that have already passed or are happening today but have already started
          return false;
        })
        .map((event) => event.location) // Extract location from the filtered events
    ),
  ];

  return (
    <div className="flex items-center gap-[10px] w-full xl:w-[190px] select-none">
      <div className="text-lg text-accent">
        <BiMap />
      </div>
      <Select
        value={selectedLocation === "" ? "all" : selectedLocation}
        onValueChange={(value) =>
          setSelectedLocation(value === "all" ? "" : value)
        }
      >
        <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-left p-0">
          <SelectValue placeholder="Event Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Location</SelectLabel>
            {uniqueLocations.map((location, index) => {
              return (
                <SelectItem
                  value={location === "All locations" ? "all" : location}
                  key={index}
                >
                  {location}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EventLocation;
