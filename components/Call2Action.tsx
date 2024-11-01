"use client"

import { FC, HTMLAttributes } from "react"
import { usePathname } from "next/navigation"
import { SignInButton } from "@clerk/nextjs"
import { cn } from "../utils"

// import { useMe } from "../contexts";

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export const Call2Action: FC<Props> = ({ className, ...rest }: Props) => {
  const pathname = usePathname()
  // const { me, isLoading } = useMe();

  const me = false
  const isLoading = false

  return !me && !isLoading ? (
    <SignInButton
      mode="modal"
      forceRedirectUrl={pathname}
      fallbackRedirectUrl={pathname}
      signUpForceRedirectUrl={pathname}
      signUpFallbackRedirectUrl={pathname}
    >
      <button
        aria-label="Hire Top 1% Talent"
        className={cn(
          "fixed bottom-0 right-0 z-10 flex cursor-pointer items-center justify-center gap-2 overflow-hidden",
          "text-ellipsis whitespace-nowrap rounded-tl-lg rounded-tr-lg bg-blue-500 px-2 py-2 text-center text-sm xs:px-6",
          "transition-all duration-300 ease-in-out xs:right-[86px] xs:text-base",
          className
        )}
        {...rest}
      >
        Hire Top 1% Talent
      </button>
    </SignInButton>
  ) : null
}
