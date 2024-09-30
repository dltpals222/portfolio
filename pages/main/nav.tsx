import RedirectButton from "@/components/redirectButton";
import React from "react";

const Navigator: React.FC = () => {
  return (
    <div className="w-screen flex">
      <div className="w-40vw border-solid border-black border p-2.5">
        <RedirectButton path="main" text={"LSM'S PortFolio"} className="pretendard-800 text-2xl"></RedirectButton>
      </div>
      <div className="w-60vw border-solid border-black border">박스 2</div>
    </div>
  )
}

export default Navigator