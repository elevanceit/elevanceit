import { useCallback } from "react"
import { Metadata } from "next"
import Link from "next/link"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
  faBell,
  faCheck,
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faClose,
  faTriangleExclamation,
} from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Alert } from "../../../components/Alert"
import { Card } from "../../../components/Card"
import { Headline } from "../../../elements/Headline"
import { ALERT_VARIANTS } from "../../../enums"

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

const Icons: Record<ALERT_VARIANTS, IconProp> = {
  [ALERT_VARIANTS.PRIMARY]: faCheck,
  [ALERT_VARIANTS.SECONDARY]: faCheck,
  [ALERT_VARIANTS.SUCCESS]: faCircleCheck,
  [ALERT_VARIANTS.DANGER]: faCircleExclamation,
  [ALERT_VARIANTS.WARNING]: faTriangleExclamation,
  [ALERT_VARIANTS.INFO]: faCircleInfo,
  [ALERT_VARIANTS.DARK]: faBell,
  [ALERT_VARIANTS.LIGHT]: faBell,
}

export default function Page() {
  const handleDismiss = useCallback((variant: string) => () => {}, [])

  return (
    <section className="flex w-full flex-col gap-6">
      <Headline title="Alerts">
        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert
        messages.
      </Headline>

      <Card header="Basic Alerts">
        <div className="flex flex-col gap-3">
          {Object.entries(ALERT_VARIANTS).map(([key, value]) => (
            <Alert className="text-left text-sm" key={key} variant={value}>
              A simple {value} alert — check it out!
            </Alert>
          ))}
        </div>
      </Card>

      <div className="flex gap-6">
        <Card header="Link Alerts">
          <div className="flex flex-col gap-3">
            {Object.entries(ALERT_VARIANTS).map(([key, value]) => (
              <Alert className="text-left text-sm" key={key} variant={value}>
                A simple primary alert with{" "}
                <Link className="font-bold hover:underline" href="#">
                  an example link
                </Link>
                . Give it a click if you like.
              </Alert>
            ))}
          </div>
        </Card>

        <Card header="Dismissing">
          <div className="flex flex-col gap-3">
            {Object.entries(ALERT_VARIANTS).map(([key, value]) => (
              <Alert className="pr-10 text-left text-sm" key={key} variant={value}>
                You should check in on some of those fields below.
                <button className="absolute right-2 top-2 flex size-7 items-center justify-center rounded text-inherit hover:bg-inherit">
                  <FontAwesomeIcon icon={faClose} className="size-4" />
                </button>
              </Alert>
            ))}
          </div>
        </Card>
      </div>

      <div className="flex gap-6">
        <Card header="Content">
          <div className="flex flex-col gap-3">
            <Alert className="flex flex-col items-start gap-1.5 text-left text-sm" variant="success">
              <div className="text-xl font-bold">Well done!</div>
              Aww yeah, you successfully read this important alert message. This example text is going to run a bit
              longer so that you can see how spacing within an alert works with this kind of content.
              <hr className="my-1.5 w-full border-inherit" />
              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </Alert>
          </div>
        </Card>

        <Card header="Icons">
          <div className="flex flex-col gap-3">
            {Object.entries(ALERT_VARIANTS).map(([key, value]) => (
              <Alert className="flex items-center gap-1.5 text-left text-sm" key={key} variant={value}>
                <FontAwesomeIcon icon={Icons[value]} className="size-6" /> An example {value} with an icon
              </Alert>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
