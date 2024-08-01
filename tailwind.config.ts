
// Custom Configs
import fontFamily from "./config/tailwind/fontFamily"
import daisyui from "./config/tailwind/daisyui"

// Types
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./resources/**/*.{ts,tsx,blade,php}"],
  daisyui,
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily
    },
  },
  plugins: [
    require('daisyui')
  ],
}

export default config

