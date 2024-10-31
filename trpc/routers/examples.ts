import { z } from "zod"
import { UserModel, mongoConnect } from "../../databases/mongo"
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
      await mongoConnect()

      const count = await UserModel.countDocuments()

      return {
        auth: ctx.auth,
        count,
      }
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
