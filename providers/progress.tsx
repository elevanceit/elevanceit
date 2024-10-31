"use client"

import { ReactNode } from "react"
import { AppProgressBar as ProgressBar, ProgressBarProps } from "next-nprogress-bar"

type Props = ProgressBarProps & { children: ReactNode }

export const ProgressProviders = ({ children }: Props) => {
  return (
    <>
      {children}
      <ProgressBar height="4px" color="#fffd00" options={{ showSpinner: false }} shallowRouting />
    </>
  )
}
