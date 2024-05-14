export const Formatting = ({ templateTpRender }) => {
  return (
    <div className="">
      <div
        className={`${templateTpRender.backgroundfont} lg:w-[920px] w-[480px]  rounded-3xl  mt-6 ml-6 flex flex-col items-start justify-start`}
      >
        <div className="font-semibold lg:mt-12 lg:ml-12 ml-8 pb-1 lg:text-[18px] text-[21px] lg:mb-1 lg:pt-1 pt-8">
          <p>{templateTpRender.formattingHeader}</p>
        </div>
        <div className="lg:w-[590px] w-[400px] ml-8 mb-6 lg:ml-12 text-left lg:mb-4 text-[20px] lg:text-[15px]">
          <p>{templateTpRender.formattingpara}</p>
        </div>
        <div className="lg:w-[590px] w-[400px] lg:ml-12 ml-8 mb-10 text-left lg:mb-16 text-[20px] lg:text-[15px]">
          <p>{templateTpRender.formattingSubPara}</p>
        </div>
        <div className="lg:ml-20 ml-8">
          <img
            src={templateTpRender.formattingImg}
            alt=""
            className="object-fill lg:rounded-bl-none lg:rounded-tr-md rounded-br-[24px] lg:h-[450px] h-[250px] lg:w-[900px] w-[600px]"
          />
        </div>
      </div>
      
    </div>
  );
};
