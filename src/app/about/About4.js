import images62 from "../../../public/Images/Rectangle1.png";
import images63 from "../../../public/Images/apps.png";
import images64 from "../../../public/Images/Rectangle2.png";
import images65 from "../../../public/Images/startup.png";
import images66 from "../../../public/Images/Rectangle4.png";
import images67 from "../../../public/Images/coding.png";
import images68 from "../../../public/Images/Rectangle3.png";
import images69 from "../../../public/Images/Cloud.png";
import image from "../../../public/Images/Rectangle 20.png";
import Image from "next/image";

function About4() {
  return (
    <div className="pl-32">
      <Image className="relative top-44" src={image} />
      <div className="flex mt-48 ">
        <div className="w-[499px] h-[437px]">
          <h2 className="w-[499px] h-[109px] font-[Poppins] text-[rgba(0,0,0,1)] text-[30px] font-semibold">
            Lorem Ipsum is simply dummy text of the printing.
          </h2>
          <p className="w-[] h-[] text-[rgba(88,88,88,1)] font-[Poppins] font-normal text-[20px]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects.
          </p>
          <button className="w-[193px] h-[51px] font-[Poppins] mt-11 text-[16px] text-[rgba(16,144,203,1)] rounded-lg border-solid border-[2px] border-[rgba(16,144,203,1)]">
            Contact us
          </button>
        </div>
        <div className="w-[766px] h-[395px] bg-[rgb(249,244,244)] ml-16">
          <div className=" flex mt-11 ml-9">
            <Image src={images62} />
            <Image
              className=" w-12 h-12 relative right-16 top-5"
              src={images63}
            />
            <p className="text-[rgba(46,13,100,1)] text-[25px] font-[Poppins] font-medium ">
              Web Application
            </p>
            <Image className="ml-24" src={images64} />
            <Image
              className="relative right-16 w-12 h-12 top-5"
              src={images65}
            />
            <p className="text-[rgba(46,13,100,1)] text-[25px] font-[Poppins] font-medium  ">
              SEO
            </p>
          </div>
          <div className="flex mt-12 ml-9">
            <Image src={images66} />
            <Image
              className=" w-12 h-12 relative right-16 top-5"
              src={images67}
            />
            <p className="text-[rgba(46,13,100,1)] text-[25px] font-[Poppins] font-medium ">
              Mobile Applications
            </p>
            <Image className="ml-14" src={images68} />
            <Image
              className=" w-12 h-12 relative right-16 top-5"
              src={images69}
            />
            <p className="text-[rgba(46,13,100,1)] text-[25px] font-[Poppins] font-medium  ">
              AR/VR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About4;
