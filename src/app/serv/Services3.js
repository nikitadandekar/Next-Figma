import images11 from "../../../public/Images/Rectangle9.png";
import Image from "next/image";

function Services3() {
  return (
    <div className="w-[1301px] h-[509px] ml-40 flex  ">
      <div className="w-[516px] h-[453px] ">
        <div className="w-[450px] h-[91px] text-[30px] font-semibold leading-[51px] text-[rgba(16,144,203,1)]">
          Lorem Ipsum
          <a className="text-[rgba(37,37,37,1)]">
            is simply dummy text of the printing.
          </a>
        </div>
        <div className="w-[450px] h-[306px] text-[rgba(84,84,84,1)] font-normal text-[16px] leading-6 pt-10">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
          <div className="pt-10 ">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens
          </div>
        </div>
        <button className="w-[193px] h-[51px] text-[rgba(16,144,203,1)] rounded-sm border-[rgba(16,144,203,1)] border-x-2 border-y-2">
          Contact us
        </button>
      </div>

      <div className="w-[905px] h-[509px] relative  right-36">
        <Image src={images11} alt="" />
      </div>
    </div>
  );
}

export default Services3;
