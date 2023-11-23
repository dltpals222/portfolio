import React from "react";
import {Parallax, ParallaxLayer } from '@react-spring/parallax'

const IndexPopup = () => {
  const alignCenter = "flex items-center"
  const centerText = `text-center my-4`
  return (
    <div>
      <div className="background">
        <Parallax pages={5}>
          <ParallaxLayer offset={0} speed={0.5} className={`justify-center ${alignCenter}`}>
            <div className="flex flex-col justify-around items-center w-full h-full">
              <p>
                <div className={`scrollText ${centerText}`}>안녕하세요</div>
                <div className={`scrollText ${centerText}`}>이세민입니다.</div>
              </p>
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