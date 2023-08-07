import { css } from "@emotion/react"
import { Colors } from "./Colors"

// sans font is primary for small texts
// mono font is a secondary font for long texts, used for coding
// serif is a secondary font for long texts of blogging.
export const Fonts = {
    sans: "system-ui, sans-serif",
    // sans400, sans500, etc...
    mono: "Menlo, monospace"
    // mono400, mono500, etc...
}

export const header32px = css`
  line-height: 23px;
  font-size: 32px;
  font-family: ${Fonts.sans};
  font-weight: bold;
  color: ${Colors.foreground};
`
export const header16px = css`
  line-height: 16px;
  font-size: 16px;
  font-family: ${Fonts.sans};
  font-weight: bold;
  color: ${Colors.foreground};
`

// body text may have different font family and color than headers
export const body16px = css`
  line-height: 16px;
  font-size: 16px;
  font-family: ${Fonts.mono};
  color: ${Colors.body};
`
export const body32px = css`
  line-height: 20px;
  font-size: 32px;
  font-family: ${Fonts.mono};
  color: ${Colors.body};
`

