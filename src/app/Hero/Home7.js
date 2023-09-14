import images49 from "../../../public/Images/focus.png";
import images50 from "../../../public/Images/purple.png";
import images51 from "../../../public/Images/happy.png";
import Circle2 from "../../../public/Images/Ellip2.png";
import Image from "next/image";

function Home7() {
  return (
    <div className=" h-[534px] flex  gap-16 pt-28">
      <div className="w-[516px] h-[389px]">
        <div className="w-[391px] h-[58px] ml-36 flex">
          <Image src={images50} />

          <Image
            className="relative top-4 right-10  w-[26px] h-[26px]"
            src={images51}
          />
          <div className="w-[308px] h-[55px]  ">
            <h2 className="w-[308px] h-[30px] font-medium text-[17px] text-[rgba(0,0,0,1)] font-[Poppins]">
              Lorem Ipsum is simply dummy text
            </h2>
            <h2 className="font-[Poppins] text-[14px] font-normal text-[rgba(134,134,134,1)]">
              Lorem Ipsum is simply dummy text
            </h2>
          </div>
        </div>
        <h2 className="w-[516px] h-[91px] text-[30px] font-[Poppins] text-[rgba(37,37,37,1)] ml-36 font-semibold mt-10">
          <span className="text-[rgba(16,144,203,1)]">Lorem Ipsum </span>is
          simply dummy text of the printing.{" "}
        </h2>

        <p className="text-[16px] font-normal font-[Poppins] text-[rgba(84,84,84,1)] ml-36 w-[476px] h-[141px] mt-8 leading-8 ">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>
      </div>
      <div className="">
        <Image className="absolute z-30 ml-[21%]" src={Circle2} />
        <Image className="relative bottom-20 right-36" src={images49} />
      </div>
    </div>
  );
}

export default Home7;
