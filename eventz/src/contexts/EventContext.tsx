"use client";

import {
  createContext,
  ReactNode,
  use,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface EventContextType {
  events: any[];
  isLoading: boolean;
  error: any;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  filteredEvents: any[];
  handleSubmit: () => void;
  handleClearSearch: () => void;
}

export const EventContext = createContext<EventContextType | undefined>(
  undefined
);

const EventProvider = ({ children }: { children: ReactNode }) => {
  // State to store events, loading state and error state
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // State to store search term
  const [searchTerm, setSearchTerm] = useState("");
  // State to store applied filters after submit
  const [appliedFilters, setAppliedFilters] = useState({
    searchTerm: "",
  });

  // Filtering events based on the applied filters
  const filteredEvents = useMemo(() => {
    return events.filter((event: any) => {
      const matchesSearch = appliedFilters.searchTerm
        ? event.title
            .toLowerCase()
            .includes(appliedFilters.searchTerm.toLowerCase())
        : true;
      return matchesSearch;
    });
  }, [events, appliedFilters]);
  console.log(filteredEvents);

  const handleSubmit = () => {
    setAppliedFilters({ searchTerm });
    console.log(events);
  };

  // Clearing the search term
  const handleClearSearch = () => {
    setSearchTerm("");
    setAppliedFilters({ searchTerm: "" });
  };

  // Fetching events from the server
  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:8000/events");
        if (!res.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await res.json();
        setEvents(data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

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
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export function useEvents() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within EventProvider");
  }
  return context;
}

export default EventProvider;
