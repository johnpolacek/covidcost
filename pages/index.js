import Router from "next/router"
import Wrapper from "../src/layout/Wrapper"
import Home from "../src/views/Home"

export default () => {
  return (
    <Wrapper
      url="/"
      title="The Cost of COVID-19"
      description="Tracking the cost of COVID-19 across China, Europe and the United States in human lives and to their economies."
    >
      <Home />
    </Wrapper>
  )
}
