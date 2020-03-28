/** @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
  <header sx={{ py: 5, textAlign: "center" }}>
    <img src="/covid.svg" width={["240", "320"]} height={["240", "320"]} />
    <h1
      sx={{
        m: 0,
        p: 3,
        fontSize: 6,
        letterSpacing: 1,
      }}
    >
      The Cost of <span sx={{ display: "inline-block" }}>COVID-19</span>
    </h1>
  </header>
)
