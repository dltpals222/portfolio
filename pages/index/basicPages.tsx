import React, {useRef} from "react";
import {Parallax, ParallaxLayer, IParallax} from '@react-spring/parallax'

interface pageProps {
  offset: number;
  gradient : string;
  onClick: () => void;
}

const Page =  ({offset, gradient, onClick}:pageProps) => {
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <div className="slopeBegin" />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <div className={`slopeBegin ${gradient}`} />
      </ParallaxLayer>

      <ParallaxLayer className="text number" offset={offset} speed={0.3}>
        <span>0{offset + 1}</span>
      </ParallaxLayer>
    </>
  )
}

const IndexPopup = () => {
  const innerParallax = useRef<IParallax>(null)

  const scroll = (to : number) => {
    if(innerParallax.current){
      innerParallax.current.scrollTo(to)
    }
  }
  return (
    <>
      <div className="bg-[#dfdfdf]">
        <Parallax className="container" ref={innerParallax} pages={3} horizontal>
          <Page offset={0} gradient="pink" onClick={() => scroll(1)}></Page>
          <Page offset={1} gradient="teal" onClick={() => scroll(2)}></Page>
          <Page offset={2} gradient="tomato" onClick={() => scroll(0)}></Page>
        </Parallax>
      </div>
    </>
  )
}

export default IndexPopup