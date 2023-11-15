import React from "react";
import Rectangle from "./index/rectangle";
import IndexPopup from "./index/popup";

const Index: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <IndexPopup></IndexPopup>
      <Rectangle></Rectangle>
    </div>
  );
};

export default Index;
