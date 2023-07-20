import Image from "next/image";
import React, { useState } from "react";

const StartImg = () => {
  return (
    <div className="w-screen h-screen grid grid-rows-2 grid-cols-2 gap-2">
      <Image src="/img/Rectangle-first.png" alt="첫번째 블록" width={606.06} height={378.79} />
      <Image src="/img/Rectangle-second.png" alt="두번째 블록" width={606.06} height={378.79} />
      <Image src="/img/Rectangle-fourth.png" alt="네번째 블록" width={378.79} height={606.06} />
      <Image src="/img/Rectangle-thrid.png" alt="세번째 블록" width={378.79} height={606.06} />
    </div>
  );
};

export default StartImg;
