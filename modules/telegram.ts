import TelegramBot from "node-telegram-bot-api"
import * as Stream from "stream"

export class Telegram {
  private telegram: TelegramBot

  constructor(
    private readonly token: string,
    private readonly chat: string
  ) {
    this.telegram = new TelegramBot(token)
  }

  public async message(text: string, options?: TelegramBot.SendMessageOptions): Promise<TelegramBot.Message | null> {
    try {
      const message: TelegramBot.Message | null = await this.telegram.sendMessage(this.chat, text, options)

      // console.log(`>>>>>>>>>> SUCCESS Telegram:message`, message);

      return message
    } catch (error: any) {
      console.error(`>>>>>>>>>> ERROR Telegram:message`, error.message)
    }

    return null
  }

  public async document(
    doc: string | Stream | Buffer,
    options?: TelegramBot.SendDocumentOptions | undefined,
    fileOptions?: TelegramBot.FileOptions | undefined
  ): Promise<TelegramBot.Message | null> {
    try {
      const message: TelegramBot.Message | null = await this.telegram.sendDocument(this.chat, doc, options, fileOptions)

      // console.error(`>>>>>>>>>> ERROR Telegram:document`, message);

      return message
    } catch (error: any) {
      console.error(`>>>>>>>>>> ERROR Telegram:document`, error.message)
    }

    return null
  }
}
