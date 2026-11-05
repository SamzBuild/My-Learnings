import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Popup from "./components/Popup";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <Navbar onLoginClick={() => setIsOpen(true)} />
      <Hero />
      {isOpen && <Popup onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default App;
