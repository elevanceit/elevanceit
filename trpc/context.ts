import { NextRequest } from "next/server"
import { getAuth } from "@clerk/nextjs/server"
import { type FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"

export const createContext = async ({ req }: FetchCreateContextFnOptions) => {
  return { auth: getAuth(req as NextRequest) }
}

export type Context = Awaited<ReturnType<typeof createContext>>
