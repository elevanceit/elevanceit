import { env } from "../env"

export const URL = env.NEXT_PUBLIC_APP_URL
  ? env.NEXT_PUBLIC_APP_URL
  : env.VERCEL_URL
    ? `https://${env.VERCEL_URL}`
    : "http://localhost:3000" // Default local URL

export const WEBSITE = {
  url: URL,
  image: `${URL}/image.png`,
  color: "#000",
  name: "Elevance Innovation Technology",
  title: "Elevance Innovation Technology",
  email: "dmitrii.selikhov@gmail.com",
  telegram: "https://t.me/ElevanceIT",
  description: "Elevance Innovation technologies",
  keywords: [].join(", "),
  about: "Elevance Innovation technologies",
  phone: null,
  discord: "",
  twitter: "https://x.com/elevanceit",
  facebook: "",
  instagram: "",
  pinterest: "",
  linktr: "",
  youtube: "",
  linkedin: "https://www.linkedin.com/company/elevance-innovation-technology",
  github: "https://github.com/elevanceit",
}

export const HAS_CURSOR = false
export const HAS_TOTOP = false
export const HAS_CALL2ACTION = false
export const HAS_PRELOADER = true

export const FILE_SIZE_LIMIT = 2
export const FILES_COUNT_LIMIT = 10

export * from "./elements"
export * from "./footers"
export * from "./headers"
export * from "./socials"
export * from "./toaster"
