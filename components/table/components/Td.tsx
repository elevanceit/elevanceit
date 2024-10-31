import { FC, TdHTMLAttributes } from "react"
import { cn } from "../../../utils"
import { Consumer } from "../utils"
import { TdInner } from "./TdInner"

interface Props extends Omit<TdHTMLAttributes<HTMLTableDataCellElement>, "headers"> {
  column?: string
}

export const Td: FC<Props> = ({ className, ...rest }) => {
  return (
    <Consumer>
      {(data) => (
        <TdInner className={cn("border-border border px-2 text-left font-normal", className)} {...rest} data={data} />
      )}
    </Consumer>
  )
}
