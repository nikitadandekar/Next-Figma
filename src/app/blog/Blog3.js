import images21 from "../../../public/Images/Rectangle10.png";
import images22 from "../../../public/Images/Ellipse4.png";
import Image from "next/image";

function Blog3() {
  return (
    <div className="w-[1130px] h-[340px] mt-24 ml-36 flex gap-5 ">
      <div className="w-[545px] h-[340px]">
        <Image src={images21} alt="" />
      </div>
      <div className="w-[500px] h-[230px]">
        <h2 className="text-[27px] text-[rgba(0,0,1)] font-semibold">
          Lorem Ipsum is simply dummy text of the printing.
        </h2>
        <p className="w-[450px] h-[105px] text-[rgba(66,66,66,1)] text-[16px] font-normal leading-8 pt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the .
        </p>
        <div className="flex">
          <div className="w-[177px] h-[60px] flex gap-4 mt-16">
            <Image src={images22} alt="" />
            <div>
              <div className="w-[102px] h-[30px] text-[18px] font-medium text-[rgba(0,0,0,1)]">
                Name here
              </div>
              <p className="text-[14px] font-normal text-[rgba(123,123,123,1)]">
                20.12.2020
              </p>
            </div>
          </div>
          <p className="text-left relative top-16 left-36">Read More</p>
        </div>
      </div>
    </div>
  );
}

export default Blog3;
