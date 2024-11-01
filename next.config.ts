import type { NextConfig } from "next"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import withPlugins from "next-compose-plugins"
import withBundleAnalyzer from "@next/bundle-analyzer"
import createMDX from "@next/mdx"
import { env } from "./env"

const nextConfig: NextConfig = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE }), createMDX()]], {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  rewrites() {
    return [
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
    ]
  },
})

export default nextConfig
