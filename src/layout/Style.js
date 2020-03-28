/** @jsx jsx */
import { jsx } from "theme-ui"
import theme from "./Theme"

export default props => (
  <style jsx global>{`
    button,
    hr,
    input {
      overflow: visible;
    }
    progress,
    sub,
    sup {
      vertical-align: baseline;
    }
    [type="checkbox"],
    [type="radio"],
    legend {
      box-sizing: border-box;
      padding: 0;
    }
    html {
      line-height: 1.2;
      -webkit-text-size-adjust: 100%;
    }
    body {
      margin: 0;
      font-family: ${theme.fonts.body};
    }
    hr {
      box-sizing: content-box;
      height: 0;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: monospace, monospace;
      font-size: 14px;
    }
    pre {
      padding: 16px 32px 16px 16px;
      margin: 0 0 32px 0;
      background: #f4f4f4;
      display: inline-block;
    }
    pre code {
      padding: 0;
      background: none;
    }
    code {
      background: #f4f4f4;
      padding: 4px 6px;
    }
    a {
      background-color: transparent;
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted;
    }
    b,
    strong {
      font-weight: bolder;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }
    button,
    select {
      text-transform: none;
    }
    [type="button"],
    [type="reset"],
    [type="submit"],
    button {
      -webkit-appearance: button;
    }
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner,
    button::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring,
    button:-moz-focusring {
      outline: ButtonText dotted 1px;
    }
    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }
    legend {
      color: inherit;
      display: table;
      max-width: 100%;
      white-space: normal;
    }
    textarea {
      overflow: auto;
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    [type="search"] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    details {
      display: block;
    }
    summary {
      display: list-item;
    }
    [hidden],
    template {
      display: none;
    }
    html {
      box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    body {
      margin: 0;
      min-height: 100vh;
      height: 100%;
    }
    button,
    input[type="submit"] {
      cursor: pointer;
      background: ${theme.colors.primary};
      color: white;
      border-radius: 4px;
      border: none;
    }
    p {
      line-height: 1.5;
      margin: 0 0 16px;
    }
    ul {
      margin-top: 0;
    }
    select {
      padding: 8px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-rendering: optimizelegibility;
      line-height: 1.2;
      margin: 0 0 16px;
      font-weight: 400;
      text-align: center;
      font-family: ${theme.fonts.heading};
    }
    input,
    select,
    textarea {
      padding: 4px;
      border: solid 2px #aed7ff;
      font-size: 16px;
      font-family: inherit;
    }
    select {
      -webkit-appearance: menulist;
    }
    table {
      border-collapse: collapse;
    }
    input {
      text-align: inherit;
      padding-left: 4px;
    }
    a {
      color: ${theme.colors.primary};
    }

    .react-vis-magic-css-import-rule {
      display: inherit;
    }
    .rv-treemap {
      font-size: 12px;
      position: relative;
    }
    .rv-treemap__leaf {
      overflow: hidden;
      position: absolute;
    }
    .rv-treemap__leaf--circle {
      align-items: center;
      border-radius: 100%;
      display: flex;
      justify-content: center;
    }
    .rv-treemap__leaf__content {
      overflow: hidden;
      padding: 10px;
      text-overflow: ellipsis;
    }
    .rv-xy-plot {
      color: #c3c3c3;
      position: relative;
    }
    .rv-xy-plot canvas {
      pointer-events: none;
    }
    .rv-xy-plot .rv-xy-canvas {
      pointer-events: none;
      position: absolute;
    }
    .rv-xy-plot__inner {
      display: block;
    }
    .rv-xy-plot__axis__line {
      fill: none;
      stroke-width: 2px;
      stroke: #e6e6e9;
    }
    .rv-xy-plot__axis__tick__line {
      stroke: #e6e6e9;
    }
    .rv-xy-plot__axis__tick__text {
      fill: #6b6b76;
      font-size: 11px;
    }
    .rv-xy-plot__axis__title text {
      fill: #6b6b76;
      font-size: 11px;
    }
    .rv-xy-plot__grid-lines__line {
      stroke: #e6e6e9;
    }
    .rv-xy-plot__circular-grid-lines__line {
      fill-opacity: 0;
      stroke: #e6e6e9;
    }
    .rv-xy-plot__series,
    .rv-xy-plot__series path {
      pointer-events: all;
    }
    .rv-xy-plot__series--line {
      fill: none;
      stroke: #000;
      stroke-width: 2px;
    }
    .rv-crosshair {
      position: absolute;
      font-size: 11px;
      pointer-events: none;
    }
    .rv-crosshair__line {
      background: #47d3d9;
      width: 1px;
    }
    .rv-crosshair__inner {
      position: absolute;
      text-align: left;
      top: 0;
    }
    .rv-crosshair__inner__content {
      border-radius: 4px;
      background: #3a3a48;
      color: #fff;
      font-size: 12px;
      padding: 7px 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }
    .rv-crosshair__inner--left {
      right: 4px;
    }
    .rv-crosshair__inner--right {
      left: 4px;
    }
    .rv-crosshair__title {
      font-weight: bold;
      white-space: nowrap;
    }
    .rv-crosshair__item {
      white-space: nowrap;
    }
    .rv-hint {
      position: absolute;
      pointer-events: none;
    }
    .rv-hint__content {
      border-radius: 4px;
      padding: 7px 10px;
      font-size: 12px;
      background: #3a3a48;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      color: #fff;
      text-align: left;
      white-space: nowrap;
    }
    .rv-discrete-color-legend {
      box-sizing: border-box;
      overflow-y: auto;
      font-size: 12px;
    }
    .rv-discrete-color-legend.horizontal {
      white-space: nowrap;
    }
    .rv-discrete-color-legend-item {
      color: #3a3a48;
      border-radius: 1px;
      padding: 9px 10px;
    }
    .rv-discrete-color-legend-item.horizontal {
      display: inline-block;
    }
    .rv-discrete-color-legend-item.horizontal
      .rv-discrete-color-legend-item__title {
      margin-left: 0;
      display: block;
    }
    .rv-discrete-color-legend-item__color {
      display: inline-block;
      vertical-align: middle;
      overflow: visible;
    }
    .rv-discrete-color-legend-item__color__path {
      stroke: #dcdcdc;
      stroke-width: 2px;
    }
    .rv-discrete-color-legend-item__title {
      margin-left: 10px;
    }
    .rv-discrete-color-legend-item.disabled {
      color: #b8b8b8;
    }
    .rv-discrete-color-legend-item.clickable {
      cursor: pointer;
    }
    .rv-discrete-color-legend-item.clickable:hover {
      background: #f9f9f9;
    }
    .rv-search-wrapper {
      display: flex;
      flex-direction: column;
    }
    .rv-search-wrapper__form {
      flex: 0;
    }
    .rv-search-wrapper__form__input {
      width: 100%;
      color: #a6a6a5;
      border: 1px solid #e5e5e4;
      padding: 7px 10px;
      font-size: 12px;
      box-sizing: border-box;
      border-radius: 2px;
      margin: 0 0 9px;
      outline: 0;
    }
    .rv-search-wrapper__contents {
      flex: 1;
      overflow: auto;
    }
    .rv-continuous-color-legend {
      font-size: 12px;
    }
    .rv-continuous-color-legend .rv-gradient {
      height: 4px;
      border-radius: 2px;
      margin-bottom: 5px;
    }
    .rv-continuous-size-legend {
      font-size: 12px;
    }
    .rv-continuous-size-legend .rv-bubbles {
      text-align: justify;
      overflow: hidden;
      margin-bottom: 5px;
      width: 100%;
    }
    .rv-continuous-size-legend .rv-bubble {
      background: #d8d9dc;
      display: inline-block;
      vertical-align: bottom;
    }
    .rv-continuous-size-legend .rv-spacer {
      display: inline-block;
      font-size: 0;
      line-height: 0;
      width: 100%;
    }
    .rv-legend-titles {
      height: 16px;
      position: relative;
    }
    .rv-legend-titles__left,
    .rv-legend-titles__right,
    .rv-legend-titles__center {
      position: absolute;
      white-space: nowrap;
      overflow: hidden;
    }
    .rv-legend-titles__center {
      display: block;
      text-align: center;
      width: 100%;
    }
    .rv-legend-titles__right {
      right: 0;
    }
    .rv-radial-chart .rv-xy-plot__series--label {
      pointer-events: none;
    }
  `}</style>
)
