import { TRPCError, initTRPC } from "@trpc/server"
import { Context } from "./context"

const trpc = initTRPC.context<Context>().create({})

const performanceMiddleware = trpc.middleware(async ({ path, type, ctx, next, input }) => {
  const startTime = performance.now()

  const result = await next({ ctx })

  const endTime = performance.now()

  const name = `[${result.ok ? "SUCCESS" : "ERROR"}] ${type.toUpperCase()} '${path}'`

  const duration = endTime - startTime

  if (result.ok) console.log(name, `${duration.toFixed(2)} ms / ${(duration / 1000).toFixed(4)} s`, input, undefined)
  else
    console.error(name, `${duration.toFixed(2)} ms / ${(duration / 1000).toFixed(4)} s`, input, result.error?.message)

  return result
})

const isAuthenticatedMiddleware = trpc.middleware(({ ctx, next }) => {
  if (!ctx.auth.userId)
    throw new TRPCError({
      code: "UNAUTHORIZED",
    })

  return next()
})

export const router = trpc.router
export const publicProcedure = trpc.procedure.use(performanceMiddleware)
export const protectedProcedure = trpc.procedure.use(performanceMiddleware).use(isAuthenticatedMiddleware)
