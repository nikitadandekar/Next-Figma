import React from "react";
import Contact1 from "./Contact1";
import Contact2 from "./Contact2";
import Contact3 from "./Contact3";

function contact() {
  return (
    <div className="bg-[rgb(229,229,229)]  ">
      <div className=" w-[1440px]  bg-[rgba(255,255,255,1)] ml-60 ">
        <Contact1 />
        <Contact2 />
        <Contact3 />
      </div>
    </div>
  );
}

export default contact;
