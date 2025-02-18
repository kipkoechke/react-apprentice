import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { useEvents } from "@/contexts/EventContext";

const Hero = () => {
  const { handleClearSearch } = useEvents();
  return (
    <section className="h-screen xl:h-[800px] mb-16 relative">
      <div className="container mx-auto h-full flex flex-col justify-center items-center pt-80 xl:pt-0">
        <div className="w-full max-w-[684px] text-center mx-auto gap-2">
          <div className="pretitle">Uncover New Moments</div>
          <h1 className="h1">
            Discover events <br /> & Experiences
          </h1>
          <p className="text-sm xl:text-lg font-light text-white/80 mb-4 xl:mb-12 max-w-[480px] xl:max-w-none mx-auto">
            Join a vibrant community where you can explore global happenings and
            share memorable moments with friends and family.
          </p>
        </div>
        <div>
          <SearchBar />
          <div className="flex flex-col justify-center w-full mt-3 relative">
            <p className="text-sm italic font-light text-white/70 text-center mb-2 xl:md-0">
              Please select one field or leave them empty to see all events.
            </p>
            <button
              className="text-accent text-sm xl:absolute right-0"
              onClick={handleClearSearch}
            >
              Clear Search
            </button>
          </div>
        </div>
        <div className="absolute bg-primary  top-0 left-0 w-[50vw] h-full bg-hero_1 bg-blend-color-dodge bg-cover bg-no-repeat -z-10 opacity-50"></div>
        <div className="absolute bg-primary  top-0 right-0 w-[50vw] h-full bg-hero_2 bg-blend-lighten bg-cover bg-no-repeat -z-10 opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
