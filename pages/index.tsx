import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
      
    </div>
  );
};

export default Index;
