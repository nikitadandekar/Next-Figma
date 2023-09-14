import React from "react";
import images20 from "../../../public/Images/Group.png";
import Image from "next/image";
function Footer() {
  return (
    <div className=" w-[1440px] h-[268px]  ml-60 pt-20  ">
      <div className="flex m-auto w-[1219px] h-[161px] gap-11   ">
        <div>
          <div className="text-[16px] text-[#00329B] font-bold leading-[24px] pb-9">
            LOGO
          </div>
          <div className="text-[16px] font-normal text-[#515151] leading-[24px]">
            Lorem Ipsum is simply dummy text of the
          </div>
          <div className="text-[16px] font-normal text-[#515151] leading-[24px]">
            printing and typesetting industry.
          </div>
          <div className="text-[16px] font-normal text-[#515151] leading-[24px]">
            @Lorem
          </div>
        </div>

        <div>
          <div className="text-[17px] font-medium text-[#000000] leading-[25px] pb-9">
            About
          </div>
          <div className="text-[16px] font-normal text-[#515151] leading-[24px]">
            Lorem
          </div>
          <div className="text-[16px] font-normal text-[#515151] leading-[24px]">
            Portfolio
          </div>
          <div className="text-[16px] font-normal text-[#515151] leading-[24px]">
            Careers
          </div>
          <div className="text-[16px] font-normal text-[#515151] leading-[24px]">
            Contact us
          </div>
        </div>

        <div>
          <div className="text-[17px] font-medium text-[#000000] leading-[25px] pb-9">
            Contact us
          </div>
          <div className="text-[16px] font-normal text-[#515151] leading-[24px]">
            Lorem Ipsum is simply dummy text
          </div>
          <div className="text-[16px] font-normal text-[#515151] leading-[24px]">
            of the printing and typesetting
          </div>
          <div className="text-[16px] font-normal text-[#515151] leading-[24px]">
            industry.
          </div>
          <div className="text-[16px] font-normal text-[#515151] leading-[24px]">
            +908 89097 890
          </div>
        </div>
        <Image className="w-64 h-24 relative top-20" src={images20} alt="" />
      </div>

      <div className="text-[13px] font-normal text-[#686868] text-center pt-16 border-t-2 border-[rgba(#686868)] mt-14">
        Copyright ® 2021 Lorem All rights Rcervedr
      </div>
    </div>
  );
}

export default Footer;
