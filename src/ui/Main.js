/** @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
  <main
    sx={{
      display: "flex",
      flex: 1,
      px: [3, 4],
      pb: 4,
      alignItems: "center",
      transition: "background-color 200ms linear, border-color 200ms linear",
      borderBottom: "solid 1px",
      borderColor: "#EEE",
    }}
    {...props}
  />
)
