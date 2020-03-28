/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

export default props => (
  <div sx={{ pb: 4, display: "flex", flexWrap: "wrap" }}>
    {React.Children.map(props.children, child => (
      <div sx={{ width: ["100%", "33.33%"] }}>{child}</div>
    ))}
  </div>
)
