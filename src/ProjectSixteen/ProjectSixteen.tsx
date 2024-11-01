import { useState } from "react";

export const ProjectSixteen = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="navbar">
      <button className="navbar__hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={`links ${isOpen ? "links--visible" : "links--invisible"}`}>
        <li className="links__item">Home</li>
        <li className="links__item">Info</li>
        <li className="links__item">Contact</li>
      </ul>
    </div>
  );
};
