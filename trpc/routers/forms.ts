import { z } from "zod"
import { publicProcedure, router } from "../trpc"

export const formsRouter = router({
  contactUs: publicProcedure
    // .use(withRecaptchaV3Check)
    .input(
      z.object({
        token: z.string(),
        name: z.string(),
        email: z.string().email(),
        subject: z.string(),
        message: z.string(),
        file: z.string().url().startsWith("https://s3.amazonaws.com/eit/").optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // await ctx.telegramContacts.message(
      //   [
      //     `NEW CONTACT:`,
      //     `NAME: ${input.name}`,
      //     `EMAIL: ${input.email}`,
      //     `SUBJECT: ${input.subject}`,
      //     `MESSAGE: ${input.message}`,
      //     `FILE: ${input.file || ""}`,
      //     `TYPE: ${MessageType.CONTACT}`,
      //     `USER: ${ctx?.user?.id || "-"}`,
      //   ].join("\n")
      // );
      //
      // return ctx.prisma.message.create({
      //   data: {
      //     name: input.name,
      //     email: input.email,
      //     subject: input.subject,
      //     message: input.message,
      //     file: input.file,
      //     type: MessageType.CONTACT,
      //     user_id: ctx?.user?.id,
      //   },
      // });
    }),

  joinUs: publicProcedure
    // .use(withRecaptchaV3Check)
    .input(
      z.object({
        token: z.string(),
        name: z.string(),
        email: z.string().email(),
        subject: z.string(),
        message: z.string(),
        file: z.string().url().startsWith("https://s3.amazonaws.com/eit/").optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // await ctx.telegramContacts.message(
      //   [
      //     `NEW JOIN:`,
      //     `NAME: ${input.name}`,
      //     `EMAIL: ${input.email}`,
      //     `SUBJECT: ${input.subject}`,
      //     `MESSAGE: ${input.message}`,
      //     `FILE: ${input.file || ""}`,
      //     `TYPE: ${MessageType.JOIN}`,
      //     `USER: ${ctx?.user?.id || "-"}`,
      //   ].join("\n")
      // );
      //
      // return ctx.prisma.message.create({
      //   data: {
      //     name: input.name,
      //     email: input.email,
      //     subject: input.subject,
      //     message: input.message,
      //     file: input.file,
      //     type: MessageType.JOIN,
      //     user_id: ctx?.user?.id,
      //   },
      // });
    }),
})
