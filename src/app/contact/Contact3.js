import React from "react";

function Contact3() {
  return (
    <div className="w-[1440px] h-[858px] bg-[rgba(232,244,250,1)] mt-16">
      <div className="w-[671px] h-[741px] ml-[400px] relative top-20">
        <div className="w-[432px] h-[83px]">
          <h2 className="font-normal text-[32px] text-[rgba(0,0,0,1)] text-right">
            Say Hello
          </h2>
          <p className="text-[13px] font-medium text-[rgba(119,119,119,1)] text-right relative left-16">
            Lorem Ipsum is simply dummy text of the printing .
          </p>
        </div>
        <div className="w-[671px] h-[471px]  pt-16 ">
          <div className="flex gap-7">
            <div className="w-[322px] h-[87px]">
              <div>
                <label className="text-[14px] font-medium text-[rgba(79,79,79,1)]">
                  First Name
                </label>
              </div>
              <div>
                <input className="w-[322px] h-[56px] rounded-md"></input>
              </div>
            </div>

            <div className="w-[322px] h-[87px]">
              <div>
                <label className="text-[14px] font-medium text-[rgba(79,79,79,1)]">
                  Last Name
                </label>
              </div>
              <div>
                <input className="w-[322px] h-[56px] rounded-md"></input>
              </div>
            </div>
          </div>
          <div>
            <label className="text-[14px] font-medium text-[rgba(79,79,79,1)] relative top-2">
              Email Address
            </label>
          </div>
          <div>
            <input className="w-[671px] h-[56px] rounded-md mt-6"></input>
          </div>

          <div>
            <label className="text-[14px] font-medium text-[rgba(79,79,79,1)] relative top-2">
              Message
            </label>
          </div>
          <div>
            <input className="w-[671px] h-[260px] rounded-md mt-6"></input>
          </div>
        </div>
        <button className="w-[193px] h-[51px]  bg-[rgba(10,144,203,1)] text-[rgba(255,255,255,1)] rounded-lg relative left-[480px] top-28">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default Contact3;
