import images52 from "../../../public/Images/beneoshop.png";
import images53 from "../../../public/Images/caspio.png";
import images54 from "../../../public/Images/HyperGrid.png";
import images55 from "../../../public/Images/leotrippi.png";
import Circle3 from "../../../public/Images/Ellip3.png";
import Image from "next/image";

function Home9() {
  return (
    <div className=" h-[234px] pt-14 ">
      <Image className="absolute z-30 mb-[30%]" src={Circle3} />
      <h2 className="text-[24px] h-[38px] w-[353px] text-[#000000] font-[Poppins] font-medium text-center ml-[36%] ">
        You will be in good Company
      </h2>
      <div className=" ml-48 flex gap-24">
        <Image src={images52} />
        <Image src={images53} />
        <Image src={images54} />
        <Image src={images55} />
      </div>
    </div>
  );
}

export default Home9;
