import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Index: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      console.log({
        scrollPosition: scrollPosition,
        windowHeight: windowHeight,
        docHeight: docHeight,
      });

      // 아래로 스크롤시 (200px)
      if (docHeight - (scrollPosition + windowHeight) < 200) {
        router.push("nav.tsx");
      }

      window.addEventListener("scroll", handleScroll);

      // 컴포넌트 unmounts시 이벤트 제거
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  }, [router]);

  const publicClass: string = "w-full w-50vh relative flex";
  const ImageClass: string = "absolute";
  const ImageLarge = {
    first: 400,
    second: 400,
  };

  return (
    <div>
      <div id="img-cnt">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={`pl-4 pt-4 ${publicClass} flex-col`}>
            <Image
              src="/img/Rectangle-first.png"
              alt="첫번째 블록"
              width={ImageLarge.first}
              height={ImageLarge.second}
              layout="responsive"
            />
            <Image
              className={`${ImageClass} top-[25%] pr-4`}
              src="/img/Rectangle-second.png"
              alt="두번째 블록"
              width={ImageLarge.first}
              height={ImageLarge.second}
              layout="responsive"
            />
          </div>
          <div className={`pr-4 pt-4 ${publicClass}`}>
            <Image
              src="/img/Rectangle-third.png"
              alt="세번째 블록"
              width={ImageLarge.second}
              height={ImageLarge.first}
              layout="responsive"
            />
            <Image
              className={`${ImageClass} left-[60%]`}
              src="/img/Rectangle-fourth.png"
              alt="네번째 블록"
              width={ImageLarge.second}
              height={ImageLarge.first}
              layout="responsive"
            />
          </div>
          <div className={`pl-4 pb-4 ${publicClass}`}>
            <Image
              src="/img/Rectangle-fifth.png"
              alt="다섯번째 블록"
              width={ImageLarge.second}
              height={ImageLarge.first}
              layout="responsive"
            />
            <Image
              className={`${ImageClass} left-[60%]`}
              src="/img/Rectangle-sixth.png"
              alt="여섯번째 블록"
              width={ImageLarge.second}
              height={ImageLarge.first}
              layout="responsive"
            />
          </div>
          <div className={`pr-4 pb-4 ${publicClass} flex-col`}>
            <Image
              src="/img/Rectangle-seventh.png"
              alt="일곱번째 블록"
              width={ImageLarge.second}
              height={ImageLarge.first}
              layout="responsive"
            />
            <Image
              className={`${ImageClass} top-[25%] pr-4`}
              src="/img/Rectangle-eighth.png"
              alt="여덟번째 블록"
              width={ImageLarge.second}
              height={ImageLarge.first}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
