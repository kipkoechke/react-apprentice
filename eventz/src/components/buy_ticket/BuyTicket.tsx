"use client";
import { useTickets } from "@/contexts/TicketContext";
import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

import { HiTicket } from "react-icons/hi";

const BuyTicket = ({ event }) => {
  const { buyNow, itemAmount, totalPrice, increaseAmount, decreaseAmount } =
    useTickets();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleBuyNow = () => {
    console.log("Event:", event); // Debugging
    if (!event) {
      console.error("Error: event is undefined");
      return;
    }

    setIsLoading(true);
    buyNow(event);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-4">
      <div className="w-[200px] md:w-[300px] flex items-center justify-between bg-secondary p-2 rounded-full">
        <div
          onClick={decreaseAmount}
          className="cursor-pointer bg-accent w-[48px] h-[48px] flex items-center justify-center select-none rounded-full"
        >
          <BiMinus className="text-lg" />
        </div>
        <div>{itemAmount}</div>
        <div
          onClick={increaseAmount}
          className="cursor-pointer bg-accent w-[48px] h-[48px] flex items-center justify-center select-none rounded-full"
        >
          <BiPlus className="text-lg" />
        </div>
      </div>
      <button
        onClick={handleBuyNow}
        className="bg-accent hover:bg-accent-hover transition-all p-4 rounded-full w-full"
      >
        <div className="flex items-center justify-center">
          {isLoading ? (
            <div>Processing</div>
          ) : (
            <div className="flex items-center gap-4">
              <HiTicket className="text-2xl" />
              <div>{`Ksh. ${itemAmount} - x ticket - Ksh. ${totalPrice}`}</div>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default BuyTicket;
