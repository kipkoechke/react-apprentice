"use client";
import React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { BiCalendar, BiChevronDown } from "react-icons/bi";
import { useEvents } from "@/contexts/EventContext";

const EventDate = () => {
  const { selectedDate, setSelectedDate } = useEvents();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <div className="flex w-full items-center gap-[10px] xl:w-[190px]">
      <BiCalendar className="text-lg text-accent" />
      <Popover>
        <PopoverTrigger asChild>
          <Button className="w-full justify-start p-0 bg-transparent hover:bg-transparent">
            {selectedDate ? (
              format(selectedDate, "PPP")
            ) : (
              <span>Pick Date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-secondary text-white border-0 ">
          <Calendar
            mode="single"
            selected={selectedDate || undefined}
            onSelect={() => handleDateChange}
            initialFocus
          />
        </PopoverContent>
        <div className="text-[26px]">
          <BiChevronDown />
        </div>
      </Popover>
    </div>
  );
};

export default EventDate;
