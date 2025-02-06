import React from "react";
import EventSearch from "./EventSearch";
import { useEvents } from "@/contexts/EventContext";

function SearchBar() {
  const { handleSubmit } = useEvents();
  return (
    <div className="bg-white/5 w-[90vw] sm:v-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-max p-8 xl:pl-8 xl:pr-2 h-auto xl:h-[70px] rounded-3xl xl:rounded-full backdrop-blur-[20px] flex flex-col xl:flex-row items-center gap-6 mx-auto text-sm">
      <div>
        <EventSearch />
      </div>
      <div>Event Location</div>
      <div>Event Date</div>
      <div>Event Type</div>
      <button className="btn btn-accent" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default SearchBar;
