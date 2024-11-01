import { NextRequest } from "next/server"
import { getAuth } from "@clerk/nextjs/server"
import { type FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"
import { env } from "../env"
import { Telegram } from "../modules/telegram"

export const createContext = async ({ req }: FetchCreateContextFnOptions) => {
  const telegram = new Telegram(env.TELEGRAM_BOT, env.TELEGRAM_CHAT)

  return { auth: getAuth(req as NextRequest), telegram }
}

export type Context = Awaited<ReturnType<typeof createContext>>
