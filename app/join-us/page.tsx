import { Metadata } from "next"
import { JoinUs } from "../../components/forms/JoinUs"

export const metadata: Metadata = {
  title: "Elevance Innovation Technology",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://elevanceit.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/elevanceit/elevanceit/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Page() {
  return (
    <section className="container py-12">
      <JoinUs />
    </section>
  )
}
