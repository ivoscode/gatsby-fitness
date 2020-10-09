import React from "react"
import Tiles from "./tiles"
import Tiless from "./tiles2"

const Services = ({ data }) => {
  return (
    <div className="services">
      <Tiles />
      <Tiless data={data} />
      <div className="button-wraper">
        <a
          target="blank"
          href="https://www.facebook.com/MarinaMuraskins/services/?ref=page_internal"
          className="myButton"
        >
          BOOK NOW
        </a>
      </div>
    </div>
  )
}

export default Services
