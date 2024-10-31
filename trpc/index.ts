import { examplesRouter } from "./routers/examples";
import { router } from "./trpc";

export const appRouter = router({
  examples: examplesRouter,
});

export type AppRouter = typeof appRouter;
