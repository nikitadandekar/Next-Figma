import images2 from "../../../public/Images/Ellipse1.png.png";
import images1 from "../../../public/Images/img1.png";
import Image from "next/image";

function Services1() {
  return (
    <div className="h-[15%] bg-[rgba(232,244,250,1)]">
      <div className="w-80 h-60 ml-[500px] ">
        <Image className="relative  left-20 top-10" src={images2} />
        <Image className="relative left-28 bottom-16" src={images1} />
        <h2 className="w-[254px] h-[60px] text-3xl  font-medium text-[rgba(0,0,0,1)] leading-[60px] ml-[60px]">
          Our
          <a className="w-[254px] h-[60px] text-3xl font-medium text-[rgba(16,144,203,1)] leading-[60px] ml-4">
            Services
          </a>
        </h2>
        <div className="w-[350px] h-[96px] font-normal leading-[31px] text-[rgba(105,105,105,1)]  text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </div>
      </div>
    </div>
  );
}

export default Services1;
