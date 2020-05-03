/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

const formatNumber = num =>
  num
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .split(",")
    .map((n, i, arr) => (
      <span key={"num" + i}>
        {n.split(".").map((num, i, arr) => (
          <span key={"num_" + i}>
            <span>{num}</span>
            {i === 0 && arr.length > 1 && (
              <span sx={{ fontSize: "75%", mx: "-2px" }}>.</span>
            )}
          </span>
        ))}
        {i !== arr.length - 1 && (
          <span
            key={"num_" + i}
            sx={{ fontSize: "75%", fontFamily: "Arial", mx: "-2px" }}
          >
            ,
          </span>
        )}
      </span>
    ))

const Stat = props => (
  <div sx={{ pb: 4 }}>
    <div sx={{ fontSize: props.fontSize || 8, fontWeight: 900 }}>
      {formatNumber(props.number)}
      {props.isPercent && <sup sx={{ fontSize: "60%" }}>%</sup>}
    </div>
    <div sx={{ fontSize: 1, textTransform: "uppercase" }}>{props.label}</div>
  </div>
)

export default Stat
