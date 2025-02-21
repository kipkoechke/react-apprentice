import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useEvents } from "@/contexts/EventContext";

import Link from "next/link";
import Event from "../events/Event";
import SkeletonGrid from "../skeleton/SkeletonGrid";

const RecommendedEvents = () => {
  const { events } = useEvents();

  const filterRecommendedEvents = events.filter(
    (event) => event.recommended === true
  );

  return (
    <section className="mb-16">
      <div className="mb-12 text-center">
        <div className="pretitle">Recommended For You</div>
        <h2 className="h2">Events You Might Like</h2>
      </div>
      {filterRecommendedEvents.length > 0 ? (
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
          {filterRecommendedEvents.map((event, index) => {
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

export default RecommendedEvents;
