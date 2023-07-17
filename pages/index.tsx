import React from "react";
import { motion } from "framer-motion";

const StartImg = () => {
  const [divRotate, setDivRotate] = React.useState<number>(0);
  const [randomNumber, setRandomNumber] = React.useState<number>(0);
  const [randomNumberTwo, setRandomNumberTwo] = React.useState<number>(0);

  function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function rotate() {
    setDivRotate(divRotate + 90);
    setRandomNumber(random(1, 900));
    setRandomNumberTwo(random(1, 900));
  }

  return (
    <div style={{ width: 1000, height: 1000 }} className="flex align-center relative">
      {/* <Block blockNumber="first" colorStyle="signiture-color-red"></Block> */}
      <motion.div
        onMouseOver={() => {
          rotate();
        }}
        animate={{
          rotate: divRotate,
          left: randomNumber,
          top: randomNumberTwo,
        }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "blueviolet",
          left: 0,
          top: 0,
        }}
        className="absolute"
      />
    </div>
  );
};

export default StartImg;
