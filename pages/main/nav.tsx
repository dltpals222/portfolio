import HambergerButton from "@/components/hambergerButton";
import RedirectButton from "@/components/redirectButton";
import React from "react";

const Navigator: React.FC = () => {
  return (
    <div className="w-screen flex">
      <div className="w-40vw border-solid border-black border p-2.5">
        <RedirectButton path="" text={"LSM's PortFolio"} className="pretendard-800 text-2xl"></RedirectButton>
      </div>
      <div className="w-60vw border-solid border-black border">
        <HambergerButton />
      </div>
    </div>
  )
}

export default Navigator