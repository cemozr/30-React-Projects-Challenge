import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Info } from "./Info";

export const ProjectEight = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
};
