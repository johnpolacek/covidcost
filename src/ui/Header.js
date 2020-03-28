/** @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
  <header sx={{ py: [4, 5], textAlign: "center" }}>
    <img src="/covid.svg" width="320" height="320" />
    <h1
      sx={{
        m: 0,
        py: 3,
        fontSize: 6,
        letterSpacing: 1,
      }}
    >
      The Cost of COVID-19
    </h1>
  </header>
)
