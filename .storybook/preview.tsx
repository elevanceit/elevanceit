import { withThemeByClassName } from "@storybook/addon-styling"
import type { Preview } from "@storybook/react"
import "../styles/styles.css"

// @ts-ignore
// @ts-ignore
// @ts-ignore
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    // @ts-ignore
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
}

export default preview
