import { HambergerWitdhProps } from '@/types/hambergerButton';
import React, { useEffect, useState } from 'react';

const HambergerButton: React.FC<HambergerWitdhProps> = ({ width }) => {
  const [widthNumber, setWidthNumber] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (width === undefined) {
      setWidthNumber(45);
    } else {
      setWidthNumber(Number(width));
    }
  }, [width]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{ width: `${widthNumber}px` }}
      className="h-full cursor-pointer"
      onClick={toggleMenu}
    >
      <div id="icon" className="h-full flex flex-col gap justify-evenly">
        <span
          className={`transition-transform duration-300 border-2 ${
            isOpen ? 'rotate-45 translate-y-[13.5px]' : ''
          }`}
          style={{ width: `${widthNumber}px` }}
        ></span>
        <span
          className={`transition-opacity duration-300 border-2 ${isOpen ? 'opacity-0' : ''}`}
          style={{ width: `${widthNumber}px` }}
        ></span>
        <span
          className={`transition-transform duration-300 border-2 ${
            isOpen ? '-rotate-45 -translate-y-[13.5px]' : ''
          }`}
          style={{ width: `${widthNumber}px` }}
        ></span>
      </div>
    </div>
  );
};

export default HambergerButton;
