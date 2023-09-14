import images56 from "../../../public/Images/Rectangle16.png";
import images57 from "../../../public/Images/Rectangle19.png";
import images58 from "../../../public/Images/Curve67.PNG";
import Image from "next/image";
function About1() {
  return (
    <div className="flex pl-24 gap-9 pt-16">
      <Image className="w-[247px] h-[259px] relative top-12" src={images56} />
      <Image className="w-[288px] h-[306px]" src={images57} />
      <div className="w-[565px] h-[318px]">
        <h2 className="text-[25px] text-[#1090CB] font-normal font-[Poppins] pt-6">
          About us
        </h2>
        <h3 className="text-[40px] font-semibold text-[#252525] w-[540px] h-[128px]  pt-6">
          Lorem Ipsum is simply dummy text of the printing.
        </h3>
        <p className="text-[#868686] font-[Poppins] font-normal text-[18px] w-[380px] h-[128px] leading-6 pt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>
      <Image className="relative left-20 bottom-52" src={images58} />
    </div>
  );
}

export default About1;
