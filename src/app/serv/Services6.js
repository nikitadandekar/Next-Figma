import images21 from "../../../public/Images/Pai1.png";
import images22 from "../../../public/Images/Star.png";
import Image from "next/image";

function Services6() {
  return (
    <div className="w-[1440] h-[578px] mt-12">
      <Image className="relative left-48 top-11" src={images22} alt="" />
      <div className="w-[1440] h-[534px] bg-[rgba(232,244,250,1)] bg-fixed mr-auto">
        <Image className="relative left-[900px] top-20" src={images21} alt="" />
        <div className="w-[719px] h-[238px]   m-auto relative top-32">
          <h2 className="w-[455px] h-[91px] text-3xl text-black font-semibold pl-8 text-center">
            Lorem Ipsum is simply dummy text of the printing.
          </h2>
          <div className="flex gap-5 ">
            <input
              className="w-[532px] h-14 pl-9 mt-12 text-[16px] rounded-md font-normal text-[#787878]"
              type=""
              placeholder="Enter your email"
            />
            <button className="w-[173px]  h-14 rounded-md text-[16px] font-medium bg-black text-[#FFF4F4] mt-12">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services6;
