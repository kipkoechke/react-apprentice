import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useEvents } from "@/contexts/EventContext";

import Link from "next/link";
import Image from "next/image";
import Event from "../events/Event";
import SkeletonGrid from "../skeleton/SkeletonGrid";

interface Event {
  id: string;
  type: string;
  title: string;
  img_sm: string;
  date: string;
  hour: string;
  location: string;
}

const UpcomingEvents = () => {
  const { events } = useEvents();
  const [eventValue, setEventValue] = useState("all");

  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    const filterEvents = () => {
      if (eventValue === "all") {
        setFilteredEvents(events);
      } else {
        const results = events.filter((event) => event.type === eventValue);
        setFilteredEvents(results);
      }
    };
    filterEvents();
  }, [eventValue, events]);

  return (
    <section className="mb-16">
      <div className="mb-12 text-center">
        <div className="pretitle">Upcoming</div>
        <h2 className="h2">Popular Events</h2>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center mb-12">
        <Tabs
          value={eventValue}
          onChange={() => setEventValue}
          className="bg-none w-full max-w-[600px] h-full flex items-center justify-center mb-12 xl:mb-0"
        >
          <TabsList className="flex flex-col lg:flex-row bg-transparent gap-6 w-full h-full">
            <TabsTrigger value="all" onClick={() => setEventValue("all")}>
              <Image
                src="/assets/upcoming/sport.svg"
                width={18}
                height={18}
                alt=""
              />
              All
            </TabsTrigger>
            <TabsTrigger value="music" onClick={() => setEventValue("music")}>
              <Image
                src="/assets/upcoming/music.svg"
                width={18}
                height={18}
                alt=""
              />
              Music
            </TabsTrigger>
            <TabsTrigger value="sports" onClick={() => setEventValue("sports")}>
              <Image
                src="/assets/upcoming/sport.svg"
                width={18}
                height={18}
                alt=""
              />
              Sport
            </TabsTrigger>
            <TabsTrigger value="food" onClick={() => setEventValue("food")}>
              <Image
                src="/assets/upcoming/food.svg"
                width={18}
                height={18}
                alt=""
              />
              Food
            </TabsTrigger>
            <TabsTrigger value="art" onClick={() => setEventValue("art")}>
              <Image
                src="/assets/upcoming/art.svg"
                width={18}
                height={18}
                alt=""
              />
              Art
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Link
          href="/events"
          className="uppercase border-b-2 border-accent text-sm text-accent font-semibold"
        >
          See All Events
        </Link>
      </div>
      {filteredEvents.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ dynamicBullets: true, clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Pagination]}
          className="w-full h-[500px]"
        >
          {filteredEvents.map((event, index) => {
            return (
              <SwiperSlide key={index} className="select-none">
                <Link href={`/event/${event.id}`}>
                  <Event event={event} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <SkeletonGrid itemCount={4} />
      )}
    </section>
  );
};

export default UpcomingEvents;
