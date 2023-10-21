import React from "react";
import Image from "next/image";

const Rectangle: React.FC = () => {
  const publicClass: string = "relative flex w-[400px] h-[400px] flex-col";
  const divImgClass = "absolute top-0 left-0 overflow-hidden w-full";
  const ImageClass: string = "absolute";
  const ImageLarge = {
    first: 400,
    second: 400,
  };

  return (
    <div>
      <div id="img-cnt">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={`${publicClass}`}>
            <div style={{ height: "initial" }} className={divImgClass}>
              <Image src="/img/Rectangle-first.png" alt="첫번째 블록" fill={true} />
            </div>
            <div style={{ top: "37%" }} className={divImgClass}>
              <Image src="/img/Rectangle-second.png" alt="두번째 블록" fill={true} />
            </div>
          </div>
          <div className={`${publicClass}`}>
            <div className={divImgClass}>
              <Image src="/img/Rectangle-third.png" alt="세번째 블록" fill={true} />
            </div>
            <div style={{ left: "37%" }} className={divImgClass}>
              <Image src="/img/Rectangle-fourth.png" alt="네번째 블록" fill={true} />
            </div>
          </div>
          <div className={`${publicClass}`}>
            <div className={divImgClass}>
              <Image src="/img/Rectangle-fifth.png" alt="다섯번째 블록" fill={true} />
            </div>
            <div style={{ left: "37%" }} className={divImgClass}>
              <Image src="/img/Rectangle-sixth.png" alt="여섯번째 블록" fill={true} />
            </div>
          </div>
          <div className={`${publicClass}`}>
            <div className={divImgClass}>
              <Image src="/img/Rectangle-seventh.png" alt="일곱번째 블록" fill={true} />
            </div>
            <div style={{ top: "37%" }} className={divImgClass}>
              <Image src="/img/Rectangle-eighth.png" alt="여덟번째 블록" fill={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
