import { prop } from "@typegoose/typegoose"
import { nanoid } from "nanoid"

export class User {
  @prop({ default: () => nanoid() })
  _id: string

  @prop()
  id: string
}
