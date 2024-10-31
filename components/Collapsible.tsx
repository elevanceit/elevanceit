import { ReactNode } from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

type Props = CollapsiblePrimitive.CollapsibleProps & {
  trigger: ReactNode
  triggerPrimitive?: CollapsiblePrimitive.CollapsibleTriggerProps
}

export const Collapsible = ({ trigger, triggerPrimitive, children, ...rest }: Props) => {
  return (
    <CollapsiblePrimitive.Root {...rest}>
      <CollapsiblePrimitive.Trigger asChild {...triggerPrimitive}>
        {trigger}
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Content>{children}</CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  )
}
