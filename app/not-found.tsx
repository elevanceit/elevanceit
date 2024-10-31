import React from "react"
import { Button } from "../components/Button"

export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center gap-5 px-4 text-center">
      <div>
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight sm:text-4xl">Uh-oh!</p>

        <p className="text-gray-500">We can&apos;t find that page.</p>
      </div>

      <Button href="/">Go Back Home</Button>
    </div>
  )
}
