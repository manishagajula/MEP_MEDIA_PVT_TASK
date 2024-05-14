
import { HiOutlineArrowRight } from "react-icons/hi2";
import { GrDownload } from "react-icons/gr";
import { Formatting } from "./Formatting";

export const Template = ({ templateTpRender }) => {
  // const templateTpRender = TemplateData.templates.find(
  //   ({ template }) => template.toLowerCase() === activeTemplate.toLowerCase()
  // );

  return (
    <div>
      <div className="flex flex-col items-start justify-start lg:pt-32 pt-14">
        <p className="font-bold lg:text-[40px] text-[30px] lg:ml-16 ml-14">
          {templateTpRender.outerHeader}
        </p>

        <p className="font-medium lg:text-xl text-[24px] text-gray-500 lg:ml-16 ml-14 lg:mb-1 mb-8 lg:w-[620px] w-[420px] text-left lg:pb-8">
          {templateTpRender.subheader}
        </p>
      </div>
      {/* for first part */}
      <div className="flex lg:flex-row flex-col">
        <div
          className={`${templateTpRender.backgroundcolor} lg:w-[460px] w-[480px] lg:ml-6 rounded-tr-[30px] lg:rounded-tr-none rounded-tl-[30px] lg:rounded-bl-3xl ml-6`}
        >
          <div className="lg:flex flex-col items-start justify-start gap-6">
            <p className="font-bold lg:text-[40px] text-[30px] text-white lg:w-[450px] w-[500px] pl-8 pt-8 pr-10 lg:pt-12 lg:pl-12 text-left leading-10">
              {templateTpRender.header}
            </p>

            <div className="lg:w-[410px] font-sans lg:text-[15px] w-[440px] flex flex-col gap-6 items-start justify-start lg:pl-12 pl-8 pt-8 pb-6 text-wrap text-xl">
              <p className="text-white text-left ">
                {" "}
                {templateTpRender.paragraph}
              </p>
              <p className="text-white text-left">{templateTpRender.subpara}</p>
            </div>
          </div>
          <div className="lg:mt-20 lg:mb-0 mt-8 mb-10 lg:p-8">
            <button className="bg-white px-[92px] py-4 lg:rounded-lg rounded-xl font-bold lg:py-3 lg:text-[15px] text-[20px]">
              {" "}
              Start with this template{" "}
            </button>
          </div>
          <div className="flex flex-row gap-14 items-center justify-center">
            <div className="lg:flex lg:flex-row gap-2 items-center justify-center text-white lg:text-lg flex flex-row text-2xl transition-all duration-500 hover:scale-105">
              Web resume{" "}
              <div className="text-xl  ">
                <HiOutlineArrowRight />
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center text-white lg:text-lg text-2xl transition-all duration-500 hover:scale-105">
              PDF{" "}
              <div className="text-xl">
                <GrDownload />
              </div>
            </div>
          </div>
        </div>
        {/* for image */}
        <div className=" lg:ml-0 w-[480px] lg:w-[935px] ml-6">
          <img
            src={templateTpRender.image_url}
            alt=""
            className="object-fill rounded-bl-[30px] lg:rounded-bl-none lg:rounded-tr-3xl rounded-br-[30px]"
          />
        </div>
      </div>
    </div>
  );
};
