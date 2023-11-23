import React from "react";
import {Parallax, ParallaxLayer } from '@react-spring/parallax'

const IndexPopup = () => {
  const alignCenter = "flex items-center"
  return (
    <div>
      <div className="background">
        <Parallax pages={5}>
          <ParallaxLayer offset={0} speed={0.5} className={`justify-center ${alignCenter}`}>
            <div>
              <p className="scrollText">안녕하세요 </p>
            </div>
            <div>
              <p className="scrollText">scroll down</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer sticky={{start:1, end:3}} className={`${alignCenter} justify-start`}>
            <div className={`card sticky`}>
              <p>나는 멈춰있다 1에서 3까지만</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.5} speed={1.5} className={`justify-end ${alignCenter}`}>
            <div className='card parallax purple'>
              <p>난 아니야</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2.5} speed={1.5} className={`justify-end ${alignCenter}`}>
            <div className="card parallax blue">
              <p>나도 아니야</p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}

export default IndexPopup