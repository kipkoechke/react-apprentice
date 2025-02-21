"use client";
import { EventDetails } from "@/types/types";

import React, { useEffect, useMemo, useState } from "react";

const Timer = ({ event }: { event: EventDetails }) => {
  // calculate the target event date and time
  const eventDate = useMemo(
    () => new Date(`${event.date} ${event.hour}`),
    [event.date, event.hour]
  );

  // state to track the remaining time in milliseconds
  const [timeRemaining, setTimeRemaining] = useState(
    eventDate.getTime() - new Date().getTime()
  );

  // handle the countdown timer logic
  useEffect(() => {
    // set up an interval that updates every second
    const interval = setInterval(() => {
      const now = new Date();
      const remainingTime = eventDate.getTime() - now.getTime();

      if (remainingTime <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(remainingTime);
      }
    }, 1000);

    // clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [eventDate]);

  if (timeRemaining <= 0) {
    return <div>The event has already passed!</div>;
  }

  // calculate the remaining time in days, hours, minutes, and seconds from timeRemaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        <div className="text-center border-[3px] border-accent rounded-full w-[100px] h-[100px] flex items-center justify-center">
          <div>
            <div className="text-3xl font-semibold">{days}</div>
            <div className="text-sm uppercase font-medium">Days</div>
          </div>
        </div>
        <div className="text-center border-[3px] border-accent rounded-full w-[100px] h-[100px] flex items-center justify-center">
          <div>
            <div className="text-3xl font-semibold">{hours}</div>
            <div className="text-sm uppercase font-medium">Hours</div>
          </div>
        </div>
        <div className="text-center border-[3px] border-accent rounded-full w-[100px] h-[100px] flex items-center justify-center">
          <div>
            <div className="text-3xl font-semibold">{minutes}</div>
            <div className="text-sm uppercase font-medium">Minutes</div>
          </div>
        </div>{" "}
        <div className="text-center border-[3px] border-accent rounded-full w-[100px] h-[100px] flex items-center justify-center">
          <div>
            <div className="text-3xl font-semibold">{seconds}</div>
            <div className="text-sm uppercase font-medium">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
