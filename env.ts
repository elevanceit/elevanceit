import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
    NEXT_PUBLIC_RECAPTHA_SITE_KEY: z.string(),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  },
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    MONGODB_URI: z.string(),
    DATABASE_URL: z.string(),
    RECAPTHA_SECRET_KEY: z.string(),
    TELEGRAM_BOT: z.string(),
    TELEGRAM_CHAT: z.string(),
    CLERK_SECRET_KEY: z.string(),
    AWS_ACCESS_KEY_ID: z.string().optional(),
    AWS_SECRET_ACCESS_KEY: z.string().optional(),
    AWS_REGION: z.string().optional(),
    AWS_BUCKET_NAME: z.string().optional(),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    MONGODB_URI: process.env.MONGODB_URI,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_RECAPTHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY,
    RECAPTHA_SECRET_KEY: process.env.RECAPTHA_SECRET_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    TELEGRAM_BOT: process.env.TELEGRAM_BOT,
    TELEGRAM_CHAT: process.env.TELEGRAM_CHAT,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
  },
})
