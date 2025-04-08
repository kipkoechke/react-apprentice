import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "focus:border-accent bg-primary flex h-[48px] rounded-md border border-white/10 px-4 py-5 text-base font-light outline-none placeholder:text-white/60",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
