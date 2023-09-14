import images31 from "../../../public/Images/Human.png";

import images32 from "../../../public/Images/VECTOR.png";
import images33 from "../../../public/Images/Curve.png";
import Circle4 from "../../../public/Images/Ellip4.png";

import Circle5 from "../../../public/Images/Circle.png";
import Image from "next/image";

function Home2() {
  return (
    <div className=" h-[743px] bg-[rgba(16,144,203,0.10)] flex">
      <Image className="absolute z-30" src={Circle5} />

      <div className="w-[630px] h-[450px] ">
        <h2 className="w-[630px] h-[193px]  text-black text-[40px]  font-semibold leading-normal ml-32 mt-32 font-[Poppins]">
          Experienced
          <span className="text-[40px]  font-semibold leading-normal text-[#1090CB] pl-4">
            mobile and web
          </span>
          applications and website
          <p>builders measuring.</p>
        </h2>
        <p className="w-[613px] h-[125px] text-[16px] font-normal leading-8 text-[#5C5C5C] ml-32 font-[Poppins] pr-9">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>

        <div className="flex ml-32 gap-5">
          <button className="w-[193px] h-[51px] bg-[#1090CB] rounded-lg text-[#FFF] text-[16px] font-[Poppins] font-normal leading-[204.3%]">
            Contact us
          </button>
          <button className="w-[193px] h-[51px] text-[#1090CB] rounded-lg bg-[#FFF] text-[16px] font-[Poppins] font-normal border-2 border-[#1090CB]  leading-[204.3%]">
            View more
          </button>
        </div>
      </div>
      <Image className="absolute left-[60%]" src={Circle4} />
      <Image className="relative bottom-20 left-28" src={images31} />
      <Image className="relative left-40 top-36" src={images32} />
      <Image className="relative right-[88%] top-48" src={images33} />
    </div>
  );
}

export default Home2;
