import "./App.css";
import { Routes, Route } from "react-router-dom";
import Ukraine from "./components/Ukraine/Ukraine";
import About from "./components/About/Index";
import { Document, Page } from "react-pdf";
import CV from "./images/Anastasiia_Romanova_CVf.pdf";
import base64String from "./Anastasiia_Romanova_CVf.txt";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Ukraine />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/resume.pdf"
        element={
          <Document file={`CV;base64,${base64String}`}>
            <Page pageNumber={1} />
          </Document>
        }
      />
    </Routes>
  );
};

export default App;
