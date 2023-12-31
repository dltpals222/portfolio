import Image from "next/image";
import React, { useState } from "react";

const Nav = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <div className="absolute z-1 w-[825px] h-[825px] grid grid-rows-2 grid-cols-2 gap-[25px]">
        <div>
          <Image src="/img/Rectangle-Group-1.png" alt="첫번째 블록" width={400} height={400} />
        </div>
        <div>
          <Image src="/img/Rectangle-Group-2.png" alt="두번째 블록" width={400} height={400} />
        </div>
        <div>
          <Image src="/img/Rectangle-Group-3.png" alt="세번째 블록" width={400} height={400} />
        </div>
        <div>
          <Image src="/img/Rectangle-Group-4.png" alt="네번째 블록" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
