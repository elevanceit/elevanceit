"use client"

import { HTMLAttributes, forwardRef } from "react"
import { useQueryState } from "nuqs"
import { trpc } from "../trpc/client"
import { cn } from "../utils"

type Props = HTMLAttributes<HTMLDivElement>

export const Servers = forwardRef<HTMLDivElement, Props>(function Header({ className, ...rest }, ref) {
  const [name, setName] = useQueryState("name")

  const { data, isLoading } = trpc.examples.get.useQuery({
    a: 1,
    b: "2",
    c: "3",
  })

  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      <h1>Hello, {name || "anonymous visitor"}!</h1>
      Servers {isLoading && "Loading..."}
      {JSON.stringify(data, null, 2)}
      <input value={name || ""} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName(null)}>Clear</button>
    </div>
  )
})
