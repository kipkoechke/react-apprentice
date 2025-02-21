import { Dispatch, SetStateAction } from "react";

// Seat Type
export interface Seat {
  seat: string | null;
  price: number | null;
}

// Social Link Type
export interface Social {
  icon: string;
  path: string;
}

// Organizer Type
export interface Organizer {
  img_avatar: string;
  name: string;
  job: string;
  social: Social[];
}

// Event Type
export interface EventDetails {
  id: string;
  type: string;
  img_sm: string;
  img_lg: string;
  date: string;
  hour: string;
  title: string;
  location: string;
  description: string;
  seats: Seat[];
  organizers: Organizer[];
  recommended: boolean;
}

// Ticket Data Type
export interface TicketData {
  eventId: EventDetails["id"];
  eventName: EventDetails["title"];
  ticketType: string | null;
  ticketPrice: number | null;
  amount: number;
  totalPrice: number;
}

// Ticket Context Type
export interface TicketContextType {
  event: EventDetails | null;
  seat: Seat;
  showMenu: boolean;
  itemAmount: number;
  setSeat: Dispatch<SetStateAction<Seat>>;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  setItemAmount: (itemAmount: number) => void;
  totalPrice: number;
  handleSeat: ({ seat, price }: Seat) => void;
  buyNow: (event: Event) => void;
  checkoutData: TicketData | null;
  initializeEvent: (event: Event) => void;
  handleClickOutside: (e: MouseEvent) => void;
  increaseAmount: () => void;
  decreaseAmount: () => void;
}

// Filtered Events Type
// export interface FilteredEvents {
//   id: number;
//   title: string;
//   location: string;
//   date: string;
//   type: string;
// }

// Event Context Type
export interface EventContextType {
  events: EventDetails[];
  isLoading: boolean;
  error: Error | null;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  filteredEvents: EventDetails[];
  handleSubmit: () => void;
  handleClearSearch: () => void;
  showEventList: boolean;
  selectedLocation: string;
  setSelectedLocation: (selectedLocation: string) => void;
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  selectedType: string;
  setSelectedType: (selectedType: string) => void;
  formatDate: (dateString: string) => string;
}
