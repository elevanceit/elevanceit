import { awsRouter } from "./routers/aws"
import { examplesRouter } from "./routers/examples"
import { formsRouter } from "./routers/forms"
import { router } from "./trpc"

export const appRouter = router({
  aws: awsRouter,
  examples: examplesRouter,
  forms: formsRouter,
})

export type AppRouter = typeof appRouter
