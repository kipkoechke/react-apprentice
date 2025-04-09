"use client";
import { fetchEvents } from "@/lib/events";
import { EventContextType, EventDetails } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export const EventContext = createContext<EventContextType | undefined>(
  undefined
);

const EventProvider = ({ children }: { children: ReactNode }) => {
  const [showEventList, setShowEventList] = useState(false);

  // State to store filter inputs
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedType, setSelectedType] = useState("");

  // State to store applied filters after submit
  const [appliedFilters, setAppliedFilters] = useState<{
    searchTerm: string;
    selectedLocation: string;
    selectedDate: Date | null;
    selectedType: string;
  }>({
    searchTerm: "",
    selectedLocation: "",
    selectedDate: null,
    selectedType: "",
  });

  // Fetch events using React Query
  const {
    data: events = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    staleTime: 1000 * 60 * 5,
  });

  // Filtering events based on the applied filters
  const filteredEvents = useMemo(() => {
    const today = new Date();

    return events.filter((event: EventDetails) => {
      // Check past events
      const eventDate = new Date(event.date);
      if (eventDate < today) return false;

      const matchesSearch = appliedFilters.searchTerm
        ? event.title
            .toLowerCase()
            .includes(appliedFilters.searchTerm.toLowerCase())
        : true;

      const matchesLocation = appliedFilters.selectedLocation
        ? event.location.toLowerCase() ===
          appliedFilters.selectedLocation.toLocaleLowerCase()
        : true;

      const matchesDate = appliedFilters.selectedDate
        ? eventDate.toDateString() ===
          appliedFilters.selectedDate.toDateString()
        : true;

      const matchesType = appliedFilters.selectedType
        ? event.type.toLowerCase() === appliedFilters.selectedType.toLowerCase()
        : true;

      return matchesSearch && matchesLocation && matchesDate && matchesType;
    });
  }, [events, appliedFilters]);

  const handleSubmit = () => {
    setShowEventList(true);
    setAppliedFilters({
      searchTerm,
      selectedLocation,
      selectedDate,
      selectedType,
    });
  };

  // Clearing the search term
  const handleClearSearch = () => {
    setSearchTerm("");
    setShowEventList(false);
    setSelectedLocation("");
    setSelectedDate(null);
    setSelectedType("");
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      year: "numeric",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  // Providing the context value to children components
  return (
    <EventContext.Provider
      value={{
        events,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        filteredEvents,
        handleSubmit,
        handleClearSearch,
        showEventList,
        selectedLocation,
        setSelectedLocation,
        selectedDate,
        setSelectedDate,
        selectedType,
        setSelectedType,
        formatDate,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

// Custom hook to use the EventContext value in functional components
export function useEvents() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within EventProvider");
  }
  return context;
}

export default EventProvider;
