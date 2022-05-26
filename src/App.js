import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Ukraine from "./components/Ukraine/Ukraine";
import About from "./components/About/Index";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import BackButton from "./components/Buttons/BlueButton";
import CV from "./images/Anastasiia_Romanova_CVf.pdf";

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Routes>
      <Route path="/" element={<Ukraine />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/resume.pdf"
        element={
          <div className="resume">
            <a href="/about">
              <BackButton text="Back" />
            </a>
            <Document file={CV} onLoadSuccess={onDocumentLoadSuccess}>
              <Page size="A4" pageNumber={pageNumber} />
            </Document>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
