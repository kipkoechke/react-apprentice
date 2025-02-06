import React from "react";

interface EventProps {
  event: {
    title: string;
  };
}

const Event: React.FC<EventProps> = ({ event }) => {
  return <div className="container">{event.title}</div>;
};

export default Event;
