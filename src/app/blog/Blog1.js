import React from "react";

function Blog1() {
  return (
    <div className="w-[432px] h-[348px] m-auto  pt-14">
      <div className="w-[432px] h-[247px]">
        <div className="w-[318px] h-[135px] text-[42px] text-[rgba(0,0,0,1)] font-bold text-right">
          Latest news
          <div className="text-[rgba(16,144,203.1)] text-center pl-24">
            Updates
          </div>
        </div>
        <div className="w-[432px] h-[71px] text-[rgba(119,119,118,1)] text-[20px] font-medium text-center">
          Lorem Ipsum is simply dummy text of the printing .
        </div>
        <input
          className="w-[400px] h-[49px] bg-[rgba(241,241,241,1)] text-[rgba(114,114,114,1)] text-[16px] font-normal text-left rounded-md mt-12 pl-7"
          type="Search"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default Blog1;
