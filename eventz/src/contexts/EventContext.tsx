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

// Defining the EventContext type and providing the context value to children components
interface EventContextType {
  events: any[];
  isLoading: boolean;
  error: any;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  filteredEvents: any[];
  handleSubmit: () => void;
  handleClearSearch: () => void;
  showEventList: boolean;
  selectedLocation: string;
  setSelectedLocation: (selectedLocation: string) => void;
}

export const EventContext = createContext<EventContextType | undefined>(
  undefined
);

const EventProvider = ({ children }: { children: ReactNode }) => {
  // State to store events, loading state and error state
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showEventList, setShowEventList] = useState(false);
  // State to store search term
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  // State to store applied filters after submit
  const [appliedFilters, setAppliedFilters] = useState({
    searchTerm: "",
    selectedLocation: "",
  });

  // Filtering events based on the applied filters
  const filteredEvents = useMemo(() => {
    return events.filter((event: any) => {
      const matchesSearch = appliedFilters.searchTerm
        ? event.title
            .toLowerCase()
            .includes(appliedFilters.searchTerm.toLowerCase())
        : true;

      const matchesLocation = appliedFilters.selectedLocation
        ? event.location.toLowerCase() ===
          appliedFilters.selectedLocation.toLocaleLowerCase()
        : true;
      return matchesSearch && matchesLocation;
    });
  }, [events, appliedFilters]);

  const handleSubmit = () => {
    setIsLoading(true);
    setShowEventList(true);
    setAppliedFilters({ searchTerm, selectedLocation });
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  // Clearing the search term
  const handleClearSearch = () => {
    setSearchTerm("");
    setShowEventList(false);
    setSelectedLocation("");
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
        showEventList,
        selectedLocation,
        setSelectedLocation,
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
