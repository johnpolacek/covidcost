/** @jsx jsx */
import { jsx } from "theme-ui"
import { marketData } from "../data"

export default props => (
  <div
    sx={{
      pb: 6,
      fontSize: 3,
      opacity: 0.9,
      textAlign: "left",
      px: 3,
      mx: "auto",
      maxWidth: "780px",
      fontFamily: "serif",
    }}
  >
    <p>
      COVID-19 data is provided by{" "}
      <a href="https://covid19api.com/">covid19api.com</a> and is sourced from{" "}
      <a href="https://systems.jhu.edu/research/public-health/ncov/">
        Johns Hopkins CSSE.
      </a>
    </p>
    <p>
      European COVID-19 statistics are for the 5 most populated regions only
      (Germany, France, UK, Italy and Spain). Per capita calculation based on
      the 2020 population data from{" "}
      <a href="https://www.worldometers.info/world-population/population-by-country/">
        Worldometer
      </a>
      .
    </p>
    <p>
      Economic statistics are based on the year-to-date performance of the{" "}
      {marketData.countries.china.index}, {marketData.countries.europe.index}{" "}
      and {marketData.countries.us.index} (updated {marketData.updated}).
    </p>
  </div>
)
