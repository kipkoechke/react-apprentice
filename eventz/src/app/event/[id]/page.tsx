import EventSchedule from "@/components/events/EventSchedule";
import Timer from "@/components/timer/Timer";
import Image from "next/image";
import React from "react";

import { FaCheckCircle } from "react-icons/fa";

const EventDetails = async ({ params }) => {
  const { id } = await params;

  // fetch event based on the id
  const fetchEvent = async (id) => {
    const res = await fetch(`http://localhost:8000/events/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch event");
    }
    const data = await res.json();
    return data;
  };

  const event = await fetchEvent(id);

  return (
    <section className="min-h-screen flex items-center py-8 sm:py-48">
      <div className="container mx-auto">
        <div className="w-full max-w-[600px] xl:max-w-none mx-auto">
          <div className="flex flex-col gap-8 xl:gap-24 xl:flex-row pt-28 pb-12 sm:py-0 xl:mb-24">
            <div className="relative w-full h-[320px] xl:max-w-[670px] xl:h-[500px] rounded-2xl overflow-hidden mb-12 xl:mb-0">
              <Image
                src={event.img_lg}
                alt=""
                fill
                className="object-cover mix-blend-lighten"
                quality={100}
              />
            </div>
            <div className="flex w-full max-w-[670px] flex-col justify-center gap-8 flex-1 sm:mb-12 xl:mb-0">
              <div>
                <h2 className="h2 mb-4">{event.title}</h2>
                <div>
                  <EventSchedule event={event} />
                </div>
              </div>
              <div>
                <Timer event={event} />
              </div>
              <div>custom select</div>
              <div>buy ticket</div>
            </div>
          </div>
          <div className=" flex flex-col xl:flex-row gap-8 xl:gap-24">
            <div className="w-full xl:max-w-[670px] flex flex-col gap-8 xl:gap-12">
              <p className="text-grey">{event.description}</p>
              <div>
                <h3 className="h3">Requirements for the event</h3>
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-3 items-center">
                    <span className="text-accent text-xl">
                      <FaCheckCircle />
                    </span>
                    <p className="text-grey">
                      Lorem ipsum dolo sit amet, xonseca adis aa
                    </p>
                  </li>{" "}
                  <li className="flex gap-3 items-center">
                    <span className="text-accent text-xl">
                      <FaCheckCircle />
                    </span>
                    <p className="text-grey">
                      Lorem ipsum dolo sit amet, xonseca adis aa
                    </p>
                  </li>{" "}
                  <li className="flex gap-3 items-center">
                    <span className="text-accent text-xl">
                      <FaCheckCircle />
                    </span>
                    <p className="text-grey">
                      Lorem ipsum dolo sit amet, xonseca adis aa
                    </p>
                  </li>{" "}
                  <li className="flex gap-3 items-center">
                    <span className="text-accent text-xl">
                      <FaCheckCircle />
                    </span>
                    <p className="text-grey">
                      Lorem ipsum dolo sit amet, xonseca adis aa
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full max-w-[460px]">Organizers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
