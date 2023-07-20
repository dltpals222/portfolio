import Image from "next/image";
import React, { useState } from "react";

const StartImg = () => {
  return (
    <div className="w-screen h-screen grid grid-rows-2 grid-cols-2 gap-2">
      <Image src="/img/Rectangle-first-second.png" alt="첫번째 블록" width={400} height={400} />
      <Image src="/img/Rectangle-thrid-fourth.png" alt="두번째 블록" width={400} height={400} />
      <Image src="/img/Rectangle-thrid-fourth.png" alt="네번째 블록" width={400} height={400} />
      <Image src="/img/Rectangle-first-second.png" alt="세번째 블록" width={400} height={400} />
    </div>
  );
};

export default StartImg;
