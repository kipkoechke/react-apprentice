"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
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
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  selectedType: string;
  setSelectedType: (selectedType: string) => void;
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

  // Filtering events based on the applied filters
  const filteredEvents = useMemo(() => {
    const today = new Date();

    return events.filter((event: any) => {
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
    setIsLoading(true);
    setShowEventList(true);
    setAppliedFilters({
      searchTerm,
      selectedLocation,
      selectedDate,
      selectedType,
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  // Clearing the search term
  const handleClearSearch = () => {
    setSearchTerm("");
    setShowEventList(false);
    setSelectedLocation("");
    setSelectedDate(null);
    setSelectedType("");
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
        selectedDate,
        setSelectedDate,
        selectedType,
        setSelectedType,
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
