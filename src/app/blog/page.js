import React from "react";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Blog4 from "./Blog4";
import Blog5 from "./Blog5";
import Blog6 from "./Blog6";

function blog() {
  return (
    <div className="bg-[rgb(229,229,229)] ">
      <div className=" w-[1440px]  bg-[rgba(255,255,255,1)]  ml-60 ">
        <Blog1 />
        <Blog2 />
        <Blog3 />
        <Blog4 />
        <Blog5 />
        <Blog6 />
      </div>
    </div>
  );
}

export default blog;
