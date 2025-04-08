import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "bg-primary focus:border-accent focus-visible:ring=1 focus-visible:ring-accent flex min-h-[80px] w-full rounded-md border border-white/10 px-4 py-5 text-base placeholder:text-white/60 focus:outline-none focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
