import React from "react";
import { cn } from "../../lib/utils.js";

export const GridPattern = () => {
  return (
    <div
      className={cn(
        "absolute inset-0",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#46ecd5_1px,transparent_1px),linear-gradient(to_bottom,#46ecd5_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#314158_1px,transparent_1px),linear-gradient(to_bottom,#314158_1px,transparent_1px)]",
      )}
    />
  );
};
