import S3 from "aws-sdk/clients/s3"
import * as path from "path"
import { v4 as uuidv4 } from "uuid"
import { z } from "zod"
import { publicProcedure, router } from "../trpc"

export const awsRouter = router({
  s3CreatePresignedPost: publicProcedure
    .input(
      z.array(
        z.object({
          fileName: z.string(),
          fileType: z.string(),
        })
      )
    )
    .mutation(async ({ ctx, input }) => {
      const s3 = new S3({
        apiVersion: "2006-03-01",
      })

      return input.map((file) => {
        return s3.createPresignedPost({
          Bucket: process.env.BUCKET_NAME,
          Fields: {
            key: `${uuidv4()}${path.extname(file.fileName)}`,
            "Content-Type": file.fileType,
          },
          Expires: 60, // seconds
          Conditions: [
            ["content-length-range", 0, 2 * 1024 * 1024], // up to 2 MB
          ],
        })
      })
    }),
})
