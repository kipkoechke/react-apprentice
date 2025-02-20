"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface Seat {
  seat: string | null;
  price: number | null;
}

interface TicketData {
  eventId: any;
  eventName: any;
  ticketType: string | null;
  ticketPrice: number | null;
  amount: number;
  totalPrice: number;
}

interface TicketConextType {
  event: any;
  seat: Seat;
  showMenu: boolean;
  itemAmount: number;
  setSeat: Dispatch<SetStateAction<Seat>>;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  setItemAmount: (itemAmount: number) => void;
  totalPrice: number;
  handleSeat: ({ seat, price }: { seat: string; price: number }) => void;
  buyNow: (event: any) => void;
  checkoutData: TicketData | null;
  initializeEvent: (event: any) => void;
  handleClickOutside: (e: MouseEvent) => void;
  increaseAmount: () => void;
  decreaseAmount: () => void;
}

export const TicketContext = createContext<TicketConextType | undefined>(
  undefined
);

const TicketProvider = ({ children }: { children: ReactNode }) => {
  // State to store tickets, loading state and error state
  const [event, setEvent] = useState(null);
  const [seat, setSeat] = useState<Seat>({ seat: null, price: null });
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [itemAmount, setItemAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutData, setCheckoutData] = useState<TicketData | null>(null);

  const initializeEvent = (fetchedEvent: any) => {
    setEvent(fetchedEvent);

    // reset item amount when a new event is initialized
    setItemAmount(1);

    // initialize the front seat if it exists in the fetched event data
    const frontSeat = fetchedEvent?.seats.find(
      (seat: any) => seat.seat === "frontseat"
    );
    if (frontSeat) {
      setSeat({ seat: frontSeat.seat, price: frontSeat.price });
    }
  };

  // Function to handle click outside of the menu to close it
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!document.contains(target) || !target.closest(".custom-select")) {
      setShowMenu(false);
    }
  };

  // effect to handle click outside of the menu to close it
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // calculate the total price when the seat or the item amount changes
  useEffect(() => {
    setTotalPrice((seat.price ?? 0) * itemAmount);
  }, [seat.price, itemAmount]);

  // function to handle seat selection
  const handleSeat = (seat: Seat) => {
    setSeat(seat);
    setShowMenu(false);
  };

  // function to handle "Buy Now"
  const buyNow = (event) => {
    const ticketData = {
      eventId: event.id,
      eventName: event.title,
      ticketType: seat.seat,
      ticketPrice: seat.price,
      amount: itemAmount,
      totalPrice,
    };
    setCheckoutData(ticketData);
  };

  const increaseAmount = () => {
    setItemAmount((prevAmount) => prevAmount + 1);
  };

  const decreaseAmount = () => {
    setItemAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
  };

  return (
    <TicketContext.Provider
      value={{
        event,
        seat,
        setSeat,
        showMenu,
        setShowMenu,
        itemAmount,
        setItemAmount,
        totalPrice,
        handleSeat,
        buyNow,
        checkoutData,
        initializeEvent,
        handleClickOutside,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

// Custom hook to use the TicketContext value in functional components
export function useTickets() {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error("useTicketsContext must be used within TicketProvider");
  }
  return context;
}

export default TicketProvider;
