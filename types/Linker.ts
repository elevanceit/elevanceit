import { HTMLAttributeAnchorTarget, ReactNode } from "react";

export type Linker = {
  name: string;
  content?: ReactNode;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  inactive?: boolean;
  links?: Linker[];
};
