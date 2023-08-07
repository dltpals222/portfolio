import React, { useState, useEffect } from "react";
import Nav from "./nav";

const ExampleComponent = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    setScrollPosition(currentScrollPosition);

    if (currentScrollPosition > 92) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("현재 스크롤 위치", scrollPosition);

  return (
    <div>
      <div className="w-screen h-110vh">시작페이지 입니다.</div>
      {isNavVisible && <Nav />}
    </div>
  );
};

export default ExampleComponent;
