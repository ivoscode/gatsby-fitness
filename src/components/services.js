import React from "react"
import Tiles from "./tiles"

const Services = () => {
  return (
    <div className="services">
      <Tiles />

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