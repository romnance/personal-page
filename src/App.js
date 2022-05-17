import "./App.css";
import { Routes, Route } from "react-router-dom";
import Ukraine from "./components/Ukraine/Ukraine";
import About from "./components/About/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Ukraine />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
