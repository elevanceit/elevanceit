import withPlugins from "next-compose-plugins"
import withBundleAnalyzer from "@next/bundle-analyzer"
import createMDX from "@next/mdx"
import { env } from "./env.mjs"

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withPlugins(
  [
    [
      withBundleAnalyzer({ enabled: env.ANALYZE }),
      createMDX({
        enabled: true,
      }),
    ],
  ],
  {
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
  }
)

export default nextConfig
