import React from "react";
import Image from "next/image";
import { BiCalendar, BiTime, BiMap } from "react-icons/bi";

interface EventProps {
  event: {
    title: string;
    img_sm: string;
    type: string;
    date: string;
    hour: string;
    location: string;
  };
}

const Event: React.FC<EventProps> = ({ event }) => {
  return (
    <div className="bg-white/5 hover:bg-white/10 transition-all h-[440px] rounded-3xl flex flex-col justify-start p-4 w-[320px] sm:w-full mx-auto sm:mx-0">
      <div className="relative h-[320px] w-full mb-10">
        <Image
          src={event.img_sm}
          fill
          alt=""
          quality={100}
          className="rounded-2xl object-cover"
        />
        <div className="absolute -bottom-[24px] left-4 bg-accent w-[110px] h-[48px] text-[13px] uppercase font-medium rounded-full flex items-center justify-center">
          {event.type}
        </div>
      </div>
      <div className="pl-4 flex flex-col h-[50%]">
        <div>
          <div className="flex items-center gap-3 text-accent mb-2">
            <div className="flex items-center gap-1">
              <BiCalendar />
              <div className="text-[15px]">{event.date}</div>
            </div>
            <div className="flex items-center gap-1">
              <BiTime />
              <div className="text-[15px]">{event.hour}</div>
            </div>
          </div>
        </div>
        <h4 className="h4"> {event.title}</h4>
      </div>
      <div className="flex items-center gap-2 pb-2">
        <BiMap className="text-accent text-xl" />
        <p className="text-sm font-light text-white/70">{event.location}</p>
      </div>
    </div>
  );
};

export default Event;
