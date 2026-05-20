import React from "react";
import { cn } from "../../lib/utils.js";

export const DotPattern = () => {
  return (
    <div
      className={cn(
        "absolute inset-0",
        "[background-size:20px_20px]",
        "[background-image:radial-gradient(#46ecd5_1px,transparent_1px)]",
        "dark:[background-image:radial-gradient(#314158_1px,transparent_1px)]",
      )}
    />
  );
};
