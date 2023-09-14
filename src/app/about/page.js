import React from "react";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";
import About4 from "./About4";
import About5 from "./About5";
import About6 from "./About6";

function about() {
  return (
    <div className="bg-[rgb(229,229,229)]   ">
      <div className=" w-[1440px]  bg-[rgba(255,255,255,1)]  ml-60 ">
        <About1 />
        <About2 />
        <About3 />
        <About4 />
        <About5 />
        <About6 />
      </div>
    </div>
  );
}

export default about;
