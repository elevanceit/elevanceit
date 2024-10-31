"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "../utils";
import { trpc } from "../trpc/client";

type Props = HTMLAttributes<HTMLDivElement>;

export const Servers = forwardRef<HTMLDivElement, Props>(function Header(
  { className, ...rest },
  ref,
) {
  const { data, isLoading } = trpc.examples.get.useQuery({
    a: 1,
    b: "2",
    c: "3",
  });

  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      Servers {isLoading && "Loading..."}
      {JSON.stringify(data, null, 2)}
    </div>
  );
});
