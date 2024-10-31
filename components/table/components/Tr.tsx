import { FC, HTMLAttributes } from "react"
import { cn } from "../../../utils"
import { Consumer } from "../utils"
import { TrInner } from "./TrInner"

interface Props extends HTMLAttributes<HTMLTableRowElement> {}

export const Tr: FC<Props> = ({ className, ...rest }) => {
  return (
    <Consumer>
      {(data) => (
        <TrInner className={cn("border-border border text-left font-inherit", className)} data={data} {...rest} />
      )}
    </Consumer>
  )
}
