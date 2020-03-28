/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useEffect } from "react"
import { populationData, marketData, toCountryData } from "../data"
import Section from "../ui/Section"
import Heading from "../ui/Heading"
import Stat from "../ui/Stat"
import StatRow from "../ui/StatRow"

export default props => {
  const [data, setData] = useState(false)

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then(response => {
        if (!response.ok) {
          throw Error(response.json())
        }
        return response.json()
      })
      .then(json => {
        setData(toCountryData(json))
      })
      .catch(err => {
        console.log("err", err)
      })
  }, [])

  return (
    <div sx={{ width: "100%" }}>
      <div sx={{ textAlign: "center", maxWidth: "1100px", mx: "auto" }}>
        {data && (
          <>
            <Section>
              <Heading>...in human lives</Heading>
              <Stat number={data.totalLives} label="Global" fontSize={9} />
              <StatRow>
                {Object.keys(data.areas).map(area => (
                  <Stat
                    number={data.areas[area].TotalDeaths}
                    label={area === "europe" ? "europe*" : area}
                  />
                ))}
              </StatRow>
              <Heading>
                ...per capita <br />
                <small sx={{ fontSize: 2 }}>(deaths per million)</small>
              </Heading>
              <StatRow>
                {Object.keys(data.areas).map(area => (
                  <Stat
                    number={parseFloat(
                      data.areas[area].TotalDeaths / populationData[area]
                    ).toFixed(2)}
                    label={area}
                  />
                ))}
              </StatRow>
            </Section>
            <Section sx={{ pb: 5 }}>
              <Heading>...and to the economy.</Heading>
              <StatRow>
                {Object.keys(data.areas).map(area => (
                  <Stat
                    number={(
                      ((marketData.countries[area].current -
                        marketData.countries[area].start) /
                        marketData.countries[area].start) *
                      100
                    ).toFixed(2)}
                    label={area}
                    isPercent={true}
                  />
                ))}
              </StatRow>
            </Section>
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
                <a href="https://covid19api.com/">covid19api.com</a> and is
                sourced from{" "}
                <a href="https://systems.jhu.edu/research/public-health/ncov/">
                  Johns Hopkins CSSE.
                </a>
              </p>
              <p>
                European COVID-19 statistics are for the 5 most populated
                regions only (Germany, France, UK, Italy and Spain). Per capita
                calculation based on population data from{" "}
                <a href="https://www.worldometers.info/world-population/population-by-country/">
                  Worldometer
                </a>
                .
              </p>
              <p>
                Economic statistics are based on the performance YTD of the{" "}
                {marketData.countries.china.index},{" "}
                {marketData.countries.europe.index} and{" "}
                {marketData.countries.us.index} (updated {marketData.updated}).
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
