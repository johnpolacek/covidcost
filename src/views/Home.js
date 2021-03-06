/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useEffect } from "react"
import { populationData, marketData, toCountryData } from "../data"
import Section from "../ui/Section"
import Heading from "../ui/Heading"
import Stat from "../ui/Stat"
import StatRow from "../ui/StatRow"
import Notes from "../ui/Notes"

export default props => {
  const [data, setData] = useState(false)

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then(response => {
        if (!response.ok) {
          console.log(response.json())
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
              <Stat
                key="livesGlobal"
                number={data.totalLives}
                label="Global"
                fontSize={[8, 9]}
              />
              <StatRow>
                {Object.keys(data.areas).map(area => (
                  <Stat
                    key={"lives" + area}
                    number={data.areas[area].TotalDeaths}
                    label={area === "europe" ? "europe*" : area}
                  />
                ))}
              </StatRow>
            </Section>
            <Section>
              <Heading>
                ...per capita <br />
                <small sx={{ fontSize: 2 }}>(deaths per million)</small>
              </Heading>
              <StatRow>
                {Object.keys(data.areas).map(area => (
                  <Stat
                    key={"capita" + area}
                    number={parseFloat(
                      data.areas[area].TotalDeaths / populationData[area]
                    ).toFixed(2)}
                    label={area}
                  />
                ))}
              </StatRow>
            </Section>
            <Section>
              <Heading>...and to the economy.</Heading>
              <StatRow>
                {Object.keys(data.areas).map(area => (
                  <Stat
                    key={"economy" + area}
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
            <Notes />
          </>
        )}
      </div>
    </div>
  )
}
