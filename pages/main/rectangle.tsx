import React from "react";
import Image from "next/image";

const Rectangle: React.FC = () => {
  const publicClass: string = "relative flex flex-col";

  return (
    <div>
      <div id="img-cnt" className="w-screen h-screen flex items-center justify-center opacity-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-[832px] h-[832px]">
          <div className={`${publicClass}`}>
            <div className={` `}>
              <Image src="/img/Rectangle-first.png" alt="첫번째 블록" width={400} height={1} />
            </div>
            <div className={` absolute top-[36.5%]`}>
              <Image src="/img/Rectangle-second.png" alt="두번째 블록" width={400} height={1} />
            </div>
          </div>
          <div className={`${publicClass}`}>
            <div className={` `}>
              <Image src="/img/Rectangle-third.png" alt="세번째 블록" width={250} height={1} />
            </div>
            <div className={` absolute right-[1.5%]`}>
              <Image src="/img/Rectangle-fourth.png" alt="네번째 블록" width={250} height={1} />
            </div>
          </div>
          <div className={`${publicClass}`}>
            <div className={` `}>
              <Image src="/img/Rectangle-fifth.png" alt="다섯번째 블록" width={250} height={1} />
            </div>
            <div className={` absolute left-[36.6%]`}>
              <Image src="/img/Rectangle-sixth.png" alt="여섯번째 블록" width={250} height={1} />
            </div>
          </div>
          <div className={`${publicClass}`}>
            <div className={` `}>
              <Image src="/img/Rectangle-seventh.png" alt="일곱번째 블록" width={400} height={1} />
            </div>
            <div className={` absolute bottom-[2.1%]`}>
              <Image src="/img/Rectangle-eighth.png" alt="여덟번째 블록" width={400} height={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
