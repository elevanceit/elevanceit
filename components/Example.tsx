import { forwardRef, HTMLAttributes } from "react";
import { cn } from "../utils";

type Props = HTMLAttributes<HTMLDivElement>;

export const Example = forwardRef<HTMLDivElement, Props>(function Header(
  { className, ...rest },
  ref,
) {
  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      Example
    </div>
  );
});
