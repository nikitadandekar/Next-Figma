import images70 from "../../../public/Images/Rectangle15.png";
import images71 from "../../../public/Images/Rectangle17.png";
import images72 from "../../../public/Images/Rectangle18.png";
import images73 from "../../../public/Images/Rectangle14.png";
import images74 from "../../../public/Images/Ellipse 2.png";
import images75 from "../../../public/Images/Rectangle.png";
import Image from "next/image";

function About5() {
  return (
    <div className="pl-32">
      <h1 className="text-[rgba(0,0,0,1)] font-semibold text-[25px] font-[Poppins]">
        Our Team
      </h1>
      <div className=" h-[453px] flex mt-11 gap-11">
        <div>
          <Image src={images70} />
          <h3 className="text-[16px] text-[rgba(106,106,106,1)] font-medium font-[Poppins] pt-3 leading-10">
            CEO
          </h3>
          <h4 className="font-[Poppins] text-[18px] text-[rgba(0,0,0,1)] font-semibold ">
            John kabras
          </h4>
        </div>
        <div>
          <Image src={images71} />
          <h3 className="text-[16px] text-[rgba(106,106,106,1)] font-medium font-[Poppins] pt-3  leading-10">
            COO
          </h3>
          <h4 className="font-[Poppins] text-[18px] text-[rgba(0,0,0,1)] font-semibold ">
            Philips shene moris
          </h4>
        </div>
        <div>
          <Image src={images72} />
          <h3 className="text-[16px] text-[rgba(106,106,106,1)] font-medium font-[Poppins] pt-3  leading-10">
            Tech lead
          </h3>
          <h4 className="font-[Poppins] text-[18px]  font-semibold  ">
            Equarn shamir mohomad
          </h4>
        </div>
        <div>
          <Image src={images73} />
          <h3 className="text-[16px] text-[rgba(106,106,106,1)] font-medium font-[Poppins] pt-3  leading-10">
            Head of UX
          </h3>
          <h4 className="font-[Poppins] text-[18px]  font-semibold ">
            Janka indrajith
          </h4>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={images74} />
        <Image src={images74} />
        <Image src={images74} />
        <Image src={images75} />
      </div>
    </div>
  );
}

export default About5;
