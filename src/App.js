import "./App.css";
import { Template } from "./Components/Template";
import { Navbar } from "./Components/Navbar";
import { useState } from "react";
import { Sidebar } from "./Components/Sidebar";
// import { Routes, Route } from "react-router-dom";

function App() {
  const [activeTemplate, setActiveTemplate] = useState("creative");
  return (
    <div className="App">
      <Navbar
        activeTemplate={activeTemplate}
        setActiveTemplate={setActiveTemplate}
      />
      <Template activeTemplate={activeTemplate} />
      <Sidebar />
    </div>
  );
}

export default App;
