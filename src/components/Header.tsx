import { HiOutlineMail } from "react-icons/hi";
import { FiMoon } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import "./Header.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { BsFillMoonFill } from "react-icons/bs";

function Header() {
  const {
    isOpen: isLang,
    onOpen: onLang,
    onClose: closeLang,
  } = useDisclosure();

  const {
    isOpen: isDark,
    onOpen: onDark,
    onClose: closeDark,
  } = useDisclosure();

  const [words] = useState([<Name direction={"left"} />, <Email />]);
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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsChecked(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsChecked(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <header className="h-[13%] px-4 shadow-2xl shadow-black flex items-center justify-center relative bg-white dark:bg-[#1a1a1a]">
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
        <FiMoon
          className="text-[#1a1a1a] dark:text-white text-3xl hover:opacity-70 cursor-pointer transition-all active:opacity-90"
          onClick={onDark}
        />
        <TbWorld
          className="text-[#1a1a1a] dark:text-white text-3xl hover:opacity-70 cursor-pointer transition-all active:opacity-90"
          onClick={onLang}
        />
      </div>

      <Modal isOpen={isDark} onClose={closeDark}>
        <ModalOverlay />
        <ModalContent borderRadius={1000} width="fit-content">
          <div className="dark:bg-zinc-900 bg-zinc-300 py-8 flex justify-evenly items-center rounded-md w-[80vw] lg:w-[20vw]">
            <BsFillMoonFill className="dark:text-zinc-300 text-zinc-900 text-xl" />
            <p className="dark:text-zinc-300 text-zinc-900">Dark mode</p>
            <label className="flex cursor-pointer select-none items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                />
                <div
                  className={`box block h-6 w-10 rounded-full dark:bg-zinc-300 bg-zinc-900`}
                ></div>
                <div
                  className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition dark:bg-zinc-900 bg-zinc-300 ${
                    isChecked ? "translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </ModalContent>
      </Modal>

      <Modal isOpen={isLang} onClose={closeLang}>
        <ModalOverlay />
        <ModalContent borderRadius={1000} width="fit-content">
          <div className="dark:bg-zinc-900 bg-zinc-300 py-8 flex justify-evenly items-center rounded-md w-[80vw] lg:w-[20vw]">
            <BsFillMoonFill className="dark:text-zinc-300 text-zinc-900 text-xl" />
            <p className="dark:text-zinc-300 text-zinc-900">Dark mode</p>
            <label className="flex cursor-pointer select-none items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                />
                <div
                  className={`box block h-6 w-10 rounded-full dark:bg-zinc-300 bg-zinc-900`}
                ></div>
                <div
                  className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition dark:bg-zinc-900 bg-zinc-300 ${
                    isChecked ? "translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </ModalContent>
      </Modal>
    </header>
  );
}

export function Name({ direction }: { direction: string }) {
  return (
    <div className={classNames("absolute", { "left-4": direction === "left" })}>
      <div className="text-center">
        <h1 className="text-2xl leading-6 dark:text-white">Gabriel Matiolli</h1>
        <h3 className="font-thin text-sm leading-4 dark:text-white">Full-Stack Developer</h3>
      </div>
    </div>
  );
}

function Email() {
  return (
    <span className="flex items-center absolute gap-1 dark:text-white">
      <HiOutlineMail size={30} />
      <h1 className="text-xl">gabrielmatiollif@gmail.com</h1>
    </span>
  );
}

export default Header;
