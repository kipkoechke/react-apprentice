"use client";

import {
  createContext,
  ReactNode,
  use,
  useContext,
  useEffect,
  useState,
} from "react";

interface EventContextType {
  events: any[];
}
export const EventContext = createContext<EventContextType | undefined>(
  undefined
);

const EventProvider = ({ children }: { children: ReactNode }) => {
  // State to store events, loading state and error state
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    <EventContext.Provider value={{ events }}>{children}</EventContext.Provider>
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
