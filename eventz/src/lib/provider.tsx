"use client";
import EventProvider from "@/contexts/EventContext";
import TicketProvider from "@/contexts/TicketContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useState } from "react";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <EventProvider>
        <TicketProvider>{children}</TicketProvider>
      </EventProvider>
    </QueryClientProvider>
  );
}
