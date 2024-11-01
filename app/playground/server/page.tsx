import { Suspense } from "react"
import { Metadata } from "next"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Servers } from "../../../components/Servers"

export const metadata: Metadata = {
  title: "Elevance Innovation Technology",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://elevanceit.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/elevanceit/elevanceit/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Page() {
  return (
    <section className="">
      <Suspense fallback={<div>Loading...</div>}>
        <Servers />
      </Suspense>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </section>
  )
}
