import { Metadata } from "next"
import { pick } from "lodash"
import colors from "tailwindcss/colors"
import { Card } from "../../../components/Card"
import { Color } from "../../../components/Color"
import { Headline } from "../../../elements/Headline"
import tailwind from "../../../tailwind.config"

export const metadata: Metadata = {
  title: "",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "",
    images: [
      {
        width: 1200,
        height: 630,
        url: "",
      },
    ],
  },
}

const themeColors = tailwind?.theme?.extend?.colors || {}

const tailwindColors = pick(colors, [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
])

export default function Page() {
  return (
    <section className="flex w-full flex-col gap-6">
      <Headline title="Colors">
        Extensive color system that themes our styles and components. This enables more comprehensive customization and
        extension for any project.
      </Headline>

      <Card header="Theme Colors">
        <div className="flex w-full flex-col gap-3">
          {Object.entries(themeColors).map(([name, colors]) => (
            <div key={name} className="flex w-full gap-3">
              <div className="flex h-10 w-20 items-center text-xs font-semibold capitalize text-slate-900 dark:text-slate-200">
                {name}
              </div>

              <div className="flex w-full flex-wrap gap-3">
                {Object.entries(colors).map(([value, color]) => (
                  <Color key={value} color={color as string} name={name} value={value} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card header="Tailwind Colors">
        <div className="flex w-full flex-col gap-3">
          {Object.entries(tailwindColors).map(([name, colors]) => (
            <div key={name} className="flex w-full gap-3">
              <div className="flex h-10 w-20 items-center text-xs font-semibold capitalize text-slate-900 dark:text-slate-200">
                {name}
              </div>

              <div className="flex w-full flex-wrap gap-3">
                {Object.entries(colors).map(([value, color]) => (
                  <Color key={value} color={color} name={name} value={value} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}
