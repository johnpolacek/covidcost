/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import React from "react"

const formatNumber = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const Stat = props => (
  <div sx={{ pb: 4 }}>
    <div sx={{ fontSize: props.fontSize || 8, fontWeight: 900 }}>
      {formatNumber(props.number)}
      {props.isPercent && <sup sx={{ fontSize: "60%" }}>%</sup>}
    </div>
    <div sx={{ fontSize: 1, textTransform: "uppercase" }}>{props.label}</div>
  </div>
)

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}

export default Stat
