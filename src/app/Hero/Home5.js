import images42 from "../../../public/Images/Ellipse 3.png";
import images43 from "../../../public/Images/happy.png";
import images44 from "../../../public/Images/Recent.png";
import images45 from "../../../public/Images/New.png";
import Circle1 from "../../../public/Images/Ellip1.png";
import Image from "next/image";

function Home5() {
  return (
    <div>
      <Image className="absolute ml-24 mt-36" src={images45} />
      <div className="h-[534px] flex gap-40 pt-28">
        <div className="w-[516px] h-[389px]">
          <div className="w-[391px] h-[58px] ml-36 flex">
            <Image src={images42} />

            <Image
              className="relative top-4 right-10  w-[26px] h-[26px]"
              src={images43}
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
          <Image className="absolute z-30 ml-[24%] " src={Circle1} />
          <Image className="relative bottom-20" src={images44} />
        </div>
      </div>
    </div>
  );
}

export default Home5;
