import { HiOutlineMail } from "react-icons/hi";
import { FiMoon } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import "./Header.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";

function Header() {
  const [words] = useState([<Name />, <Email />]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsHidden(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsHidden(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <header className="h-[13%] px-4 shadow-2xl shadow-black flex items-center justify-center relative">
      <div
        className={classNames(
          "w-1/4 relative h-full flex items-center justify-left transition-opacity",
          {
            "opacity-0": isHidden,
            "opacity-1": !isHidden,
          }
        )}
      >
        {words[currentIndex]}
      </div>
      <nav className="w-1/2 flex justify-center items-center">
        <ul className="flex gap-3">
          <li className="ul-li">Home</li>
          <li className="ul-li">Projects</li>
          <li className="ul-li">Experience</li>
          <li className="ul-li">Contact</li>
        </ul>
      </nav>
      <div className="w-1/4 flex items-center justify-end gap-4">
        <FiMoon className="text-[#1a1a1a] text-3xl hover:opacity-70 cursor-pointer transition-all active:opacity-90" />
        <TbWorld className="text-[#1a1a1a] text-3xl hover:opacity-70 cursor-pointer transition-all active:opacity-90" />
      </div>
    </header>
  );
}

function Name() {
  return (
    <div className="absolute">
      <div className="text-center">
        <h1 className="text-2xl leading-6">Gabriel Matiolli</h1>
        <h3 className="font-thin text-sm leading-4">Full-Stack Developer</h3>
      </div>
    </div>
  );
}

function Email() {
  return (
    <span className="flex items-center absolute gap-1">
      <HiOutlineMail size={30} />
      <h1 className="text-xl">gabrielmatiollif@gmail.com</h1>
    </span>
  );
}

export default Header;
