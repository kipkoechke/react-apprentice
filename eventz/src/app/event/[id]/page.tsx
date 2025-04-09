"use client";

import BuyTicket from "@/components/buy_ticket/BuyTicket";
import CustomSelect from "@/components/custom_select/CustomSelect";
import EventSchedule from "@/components/events/EventSchedule";
import Organizers from "@/components/organizers/Organizers";
import Timer from "@/components/timer/Timer";
import { fetchEventById } from "@/lib/event";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

const EventDetails = () => {
  const params = useParams();
  const id = params.id as string;

  const {
    data: event,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["event", id],
    queryFn: () => fetchEventById(id),
    staleTime: 1000 * 60 * 10,
  });

  if (isLoading) {
    return (
      <div className="mx-auto container h-screen flex  justify-center items-center">
        Loading
      </div>
    );
  }

  if (error) {
    return <div>Error loading event: {(error as Error).message}</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

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
              <div>
                <CustomSelect event={event} />
              </div>
              <div>
                <BuyTicket event={event} />
              </div>
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
            <div className="w-full max-w-[460px]">
              <Organizers event={event} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
