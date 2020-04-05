const toCountryData = json => {
  console.log('toCountryData', json)
  let d = { totalLives: 0, areas: { europe: { TotalDeaths: 0 } } }
  json.Countries.forEach(country => {
    d.totalLives += country.TotalDeaths
    if (country.Slug === "united-states") {
      d.areas.us = country
    }
    if (country.Slug === "china") {
      d.areas.china = country
    }
    if (
      country.Slug === "italy" ||
      country.Slug === "france" ||
      country.Slug === "spain" ||
      country.Slug === "germany" ||
      country.Slug === "united-kingdom"
    ) {
      d.areas.europe.TotalDeaths += country.TotalDeaths
    }
  })
  return d
}

// In millions (Source: https://www.worldometers.info/world-population)
// Europe = Germany 83.7 + UK 67.8 + France 65.2 + Italy 60.4 + Spain 46.7
const populationData = {
  china: 1439.3,
  us: 331.0,
  europe: 323.8,
}

// Europe 5 most populated regions:
// Germany 82.79 million
// France 66.99 million
// UK 66.44 million (2018
// Italy 60.48 million
// Spain 46.66 million

// TODO: Automate
// https://tradingeconomics.com/stocks
const marketData = {
  countries: {
    china: {
      start: 3085.2,
      current: 2764,
      index: "Shanghai Stock Exchange (SSE) Composite Index",
      link: "https://www.google.com/search?q=SHA:+000001",
    },
    us: {
      start: 28868.8,
      current: 21053,
      index: "Dow Jones Industrial Average",
      link: "https://www.google.com/search?q=dow+jones",
    },
    europe: {
      start: 1158.26,
      current: 820,
      index: "Euronext 100 Index",
      link: "https://www.google.com/search?q=INDEXEURO:+N100",
    },
  },
  updated: "4/4/2020",
}

module.exports = {
  populationData,
  marketData,
  toCountryData,
}
