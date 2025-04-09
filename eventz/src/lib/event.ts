import { EventDetails } from "@/types/types";

export async function fetchEventById(id: string) {
  const res = await fetch(
    "https://raw.githubusercontent.com/kipkoechke/react-apprentice/refs/heads/main/db.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await res.json();

  // Find the specific event by ID
  const event = data.events.find((event: EventDetails) => event.id === id);

  if (!event) {
    throw new Error(`Event with ID ${id} not found`);
  }

  return event;
}
