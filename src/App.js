import "./App.css";
import { Template } from "./Components/Template";
import { Navbar } from "./Components/Navbar";
import { useState } from "react";
import { Sidebar } from "./Components/Sidebar";
import { Formatting } from "./Components/Formatting";
import { TemplateData } from "./data/data";
import { Fonts } from "./Components/Fonts";

function App() {
  const [activeTemplate, setActiveTemplate] = useState("creative");

  const templateTpRender = TemplateData.templates.find(
    ({ template }) => template.toLowerCase() === activeTemplate.toLowerCase()
  );

  return (
    <div className="App">
      <Navbar
        activeTemplate={activeTemplate}
        setActiveTemplate={setActiveTemplate}
      />
      <Template
        activeTemplate={activeTemplate}
        templateTpRender={templateTpRender}
      />
      <Sidebar />
      <div className="flex lg:flex-row flex-col">
        <Formatting
          activeTemplate={activeTemplate}
          templateTpRender={templateTpRender}
        />
        <Fonts templateTpRender={templateTpRender} />
      </div>
    </div>
  );
}

export default App;
