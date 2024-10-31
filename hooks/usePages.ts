import { useMemo } from "react"
import { useRouter } from "next/router"

export const usePages = () => {
  const router = useRouter()

  return useMemo(() => {
    const pathname = router.pathname

    return {
      APPLY: !!pathname.match(/\/apply/),
      HIRE: !!pathname.match(/\/hire/),
    }
  }, [router.pathname])
}
