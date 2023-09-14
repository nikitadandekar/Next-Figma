import images59 from "../../../public/Images/Rectangle20.png";
import images60 from "../../../public/Images/Rectangle21.png";
import images61 from "../../../public/Images/vector5.png";
import Image from "next/image";

function About2() {
  return (
    <div>
      <div className="flex pl-32 gap-8">
        <Image className="w-[521px] h-[346px]" src={images59} />
        <Image className="w-[521px] h-[346px]" src={images60} />
        <Image className="relative right-[94%]" src={images61} />
      </div>
    </div>
  );
}

export default About2;
