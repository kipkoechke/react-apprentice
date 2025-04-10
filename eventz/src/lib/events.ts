export const fetchEvents = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/kipkoechke/react-apprentice/refs/heads/main/eventz/db.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await res.json();
  return data.events;
};
