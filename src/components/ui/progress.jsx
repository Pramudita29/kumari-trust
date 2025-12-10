"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "./utils"; // Assuming cn correctly handles class merging

function Progress({ className, value, ...props }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        // Use a visible color for the track background
        "bg-gray-200 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        // Use a specific, visible color for the progress bar fill
        className="bg-[#800000] h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
