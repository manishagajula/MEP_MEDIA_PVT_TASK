export const Fonts = ({ templateTpRender }) => {
  return (
    <div
      className={`${templateTpRender.backgroundformat} lg:w-[450px] w-[480px]  rounded-3xl mt-6 ml-6 flex flex-col items-start justify-start`}
    >
      <h1 className="text-white font-md lg:pt-10 pt-6 lg:ml-12 ml-8 lg:text-lg text-[24px]">
        {templateTpRender.formattingFont}
      </h1>
      <p className="text-white lg:ml-12 ml-8 text-left lg:w-[400px] mt-2 lg:text-[16px] text-[20px]">
        {templateTpRender.formattingsubheading}
        <span className="font-bold">
          {" "}
          {templateTpRender.formattingFontWord}
        </span>
        <span> {templateTpRender.formattingAddWord} </span>
      </p>
      <div className="lg:ml-12 ml-8 text-sky-500 transition-all duration-500 hover:scale-105 hover:text-cyan-300 lg:text-[16px] text-[20px]">
        {templateTpRender.formattingFontLastWord}
      </div>
      <img
        src={templateTpRender.formattingFontImg}
        alt=""
        className="object-fill lg:h-[280px] lg:w-[350px] w-[420px] lg:ml-12 lg:mt-12 mt-16 ml-8"
      />
      <p className="lg:mt-12 mt-8 ml-14 lg:text-[15px] text-[20px] text-left text-gray-400 lg:ml-16 lg:w-[320px] w-[360px] mb-8">
        {templateTpRender.formattingFontdes}
      </p>
    </div>
  );
};
