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
import { BiLayer } from "react-icons/bi";

const EventType = () => {
  const { events, selectedType, setSelectedType } = useEvents();
  const uniqueTypes = [
    "All type",
    ...new Set(events.map((event) => event.type)),
  ];
  return (
    <div className="flex items-center gap-[10px] w-full xl:w-[190px] select-none">
      <div className="text-lg text-accent">
        <BiLayer />
      </div>
      <Select
        value={selectedType === "" ? "all" : selectedType}
        onValueChange={(value) => setSelectedType(value === "all" ? "" : value)}
      >
        <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-left p-0">
          <SelectValue placeholder="Event Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="capitalize">Event Type</SelectLabel>
            {uniqueTypes.map((type, index) => {
              return (
                <SelectItem
                  value={type === "All type" ? "all" : type}
                  key={index}
                  className="capitalize"
                >
                  {type}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EventType;
