import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Name } from "./Header.tsx";
import { useState } from "react";
import classNames from "classnames";
import { FiMoon } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";

function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="h-[13%] w-screen shadow-lg flex items-center justify-center fixed z-10 t-0">
      <Name direction="left" />
      <div className="flex items-center justify-center fixed z-20 right-4 transition-all">
        {!menuOpen ? (
          <RxHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <IoClose className="text-2xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>
      <div
        className={classNames(
          "bg-black fixed top-[13%] right-0 h-full  transition-opacity w-full",
          { "opacity-50": menuOpen, "opacity-0": !menuOpen }
        )}
      ></div>
      <nav
        className={classNames(
          "fixed right-0 top-[13%] h-[87%] z-50 bg-white transition-all",
          { "w-2/3": menuOpen, "w-0": !menuOpen }
        )}
      >
        <ul
          className={classNames("flex flex-col items-end transition-all pt-2", {
            "opacity-0": !menuOpen,
          })}
        >
          <li className="ul-li pr-4">Home</li>
          <li className="ul-li pr-4">Projects</li>
          <li className="ul-li pr-4">Experience</li>
          <li className="ul-li pr-4">Contact</li>
          <li className="ul-li pr-4"><FiMoon /></li>
          <li className="ul-li pr-4"><TbWorld /></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMobile;
