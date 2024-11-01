"use client"

import { HTMLAttributes } from "react"
import Link from "next/link"
import { SocialLinks } from "../components/SocialLinks"
import { WEBSITE } from "../constants"
import { useDatetimeCountdown } from "../hooks/useDatetimeCountdown"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {}

const date = new Date("Mon Nov 18 2024 00:06:11 GMT-0400 (Atlantic Standard Time)")

export const Soon = ({ className, ...rest }: Props) => {
  const { seconds, minutes, hours, days } = useDatetimeCountdown(date)

  return (
    <div
      className={cn(
        "w-full flex-1 text-center p-12 gap-12 flex flex-col justify-center items-center text-white",
        className
      )}
      {...rest}
    >
      <h1 className="w-full text-center text-6xl">
        We are <span className="text-hooloovoo-blue font-bold">Almost</span> there!
      </h1>
      <p className="text-2xl">Stay tuned for something amazing!!!</p>
      <div className="flex w-full flex-wrap items-center justify-center gap-12">
        <div className="border bg-transparent text-center">
          <p className="px-10 py-5 text-5xl">{days}</p>
          <hr />
          <p className="px-10 py-5">days</p>
        </div>
        <div className="border bg-transparent text-center">
          <p className="px-10 py-5 text-5xl">{hours}</p>
          <hr />
          <p className="px-10 py-5">hours</p>
        </div>
        <div className="border bg-transparent text-center">
          <p className="px-10 py-5 text-5xl">{minutes}</p>
          <hr />
          <p className="px-10 py-5">mins</p>
        </div>
        <div className="border bg-transparent text-center">
          <p className="px-10 py-5 text-5xl">{seconds}</p>
          <hr />
          <p className="px-10 py-5">secs</p>
        </div>
      </div>
      <Link
        href={WEBSITE.github}
        target="_blank"
        className="hover:text-hooloovoo-blue transition-all duration-300 hover:underline"
      >
        More information about our mission and commitment to developers and clients can be found at{" "}
        <span className="font-bold">link</span>
      </Link>

      <SocialLinks />
    </div>
  )
}
