import { z } from "zod"
import { publicProcedure, router } from "../trpc"

export const examplesRouter = router({
  get: publicProcedure
    .input(
      z.object({
        a: z.number(),
        b: z.string(),
        c: z.string().nullable(),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.auth
    }),

  set: publicProcedure
    .input(
      z.object({
        a: z.number(),
        b: z.string(),
        c: z.string().nullable(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return input
    }),
})
