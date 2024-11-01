import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"
import { Montserrat } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import { Call2Action } from "../components/Call2Action"
import { Cursor } from "../components/Cursor"
import { Preloader } from "../components/Preloader"
import { ToTop } from "../components/ToTop"
import { HAS_CALL2ACTION, HAS_CURSOR, HAS_PRELOADER, HAS_TOTOP, toaster } from "../constants"
import { ProgressProviders } from "../providers/progress"
import { ThemeProvider } from "../providers/theme"
import { TRPCProvider } from "../providers/trpc"
import { cn } from "../utils"
import "../styles/styles.css"

// import {usePathname} from "next/navigation";

const font = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  display: "block",
  variable: "--font-inter",
})

export default function RootLayout({ children }: { children: ReactNode }) {
  // const pathname = usePathname()

  return (
    <ClerkProvider dynamic>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "group/page relative min-h-screen antialiased", "flex w-full flex-col")}>
          {HAS_PRELOADER && <Preloader />}

          <ClerkProvider
            // afterSignInUrl={pathname}
            // signInForceRedirectUrl={pathname}
            // signInFallbackRedirectUrl={pathname}
            // afterSignUpUrl={pathname}
            // signUpForceRedirectUrl={pathname}
            // signUpFallbackRedirectUrl={pathname}
            // redirectUrl={pathname}
            // afterSignOutUrl={pathname}
            appearance={{
              elements: {
                headerTitle: "text-2xl",
                headerSubtitle: "text-xl",
                formFieldLabel: "text-base",
                formFieldAction: "text-base",
                footerActionText: "text-base",
                footerActionLink: "text-base",
                formButtonPrimary: "bg-blue1",
              },
            }}
          >
            <TRPCProvider>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <NuqsAdapter>
                  <ProgressProviders>
                    <Toaster position="top-center" {...toaster} />

                    {HAS_CURSOR && <Cursor />}

                    {HAS_TOTOP && <ToTop />}

                    {HAS_CALL2ACTION && <Call2Action />}

                    {children}
                  </ProgressProviders>
                </NuqsAdapter>
              </ThemeProvider>
            </TRPCProvider>
          </ClerkProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
