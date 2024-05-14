import { TemplateData } from "../data/data";

export const Navbar = ({ activeTemplate, setActiveTemplate }) => {
  return (
    <div className="flex flex-row lg:w-[500px] w-[450px] items-center justify-center bg-gray-950 bg-opacity-5 backdrop-blur-md	rounded-full mt-10 lg:mr-[450px] lg:ml-[450px] ml-[8px] lg:py-1 py-2 lg:px-2 px-1 sticky top-10">
      {TemplateData.templates.map(({ template }, index) => (
        <button
          key={index}
          onClick={() => setActiveTemplate(template)}
          className={`${
            template.toLowerCase() === activeTemplate.toLowerCase()
              ? "bg-white"
              : ""
          } text-lg rounded-full lg:w-[150px] lg:py-2 py-2 lg:px-6 px-4 font-bold`}
        >
          {template}
        </button>
      ))}
    </div>
  );
};
