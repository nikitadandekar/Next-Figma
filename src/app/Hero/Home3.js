import images34 from "../../../public/Images/Rectangle4.png";
import images35 from "../../../public/Images/website-content.png";
import images36 from "../../../public/Images/Rectangle 7.png";
import images37 from "../../../public/Images/seo-tag.png";
import images38 from "../../../public/Images/Rectangle 8.png";
import images39 from "../../../public/Images/immersive1.png";
// import images40 from "../../../public/Images/Rectangle 9.png";
import images41 from "../../../public/Images/coding1.png";
import images40 from "../../../public/Images/Rectangle1.png";
import Image from "next/image";

function Home3() {
  return (
    <div className="flex pt-16 pl-32 border-b-2 border-[#C7C7C7]">
      <div className="w-[1440px] h-[169px] bg-[#FFF] flex">
        <Image className="w-[83px] h-[83px] " src={images34} alt="" />
        <Image
          className="w-[41px] h-[41px] relative right-16 top-6"
          src={images35}
          alt=""
        />

        <div>
          <h2 className="text-[#000] font-[Poppins] text-[20px] font-semibold leading-[175%]">
            Web Application
          </h2>
          <h2 className=" font-[Poppins] text-[15px] font-normal leading-[175%] text-[#969696]">
            Lorem Ipsum is simply
          </h2>
        </div>
      </div>
      <div className="w-[1440px] h-[169px] bg-[#FFF] flex">
        <Image className="w-[83px] h-[83px] " src={images36} />
        <Image
          className="w-[41px] h-[41px] relative right-16 top-6"
          src={images37}
        />

        <div>
          <h2 className="text-[#000] font-[Poppins] text-[20px] font-semibold leading-[175%]">
            SEO
          </h2>
          <h2 className=" font-[Poppins] text-[15px] font-normal leading-[175%] text-[#969696]">
            Lorem Ipsum is simply
          </h2>
        </div>
      </div>
      <div className="w-[1440px] h-[169px] bg-[#FFF] flex">
        <Image className="w-[83px] h-[83px] " src={images38} />
        <Image
          className="w-[41px] h-[41px] relative right-16 top-6"
          src={images39}
        />

        <div>
          <h2 className="text-[#000] font-[Poppins] text-[20px] font-semibold leading-[175%]">
            AR/VR Solutions
          </h2>
          <h2 className=" font-[Poppins] text-[15px] font-normal leading-[175%] text-[#969696]">
            Lorem Ipsum is simply
          </h2>
        </div>
      </div>
      <div className="w-[1440px] h-[169px] bg-[#FFF] flex">
        <Image className="w-[83px] h-[83px] " src={images40} />
        <Image
          className="w-[41px] h-[41px] relative right-16 top-6"
          src={images41}
        />

        <div>
          <h2 className="text-[#000] font-[Poppins] text-[20px] font-semibold leading-[175%]">
            Mobile Applications
          </h2>
          <h2 className=" font-[Poppins] text-[15px] font-normal leading-[175%] text-[#969696]">
            Lorem Ipsum is simply
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home3;
