import { HiOutlineMail } from "react-icons/hi";
import "./Header.scss"
function Header() {
  return (
    <header className="h-[13%] shadow-2xl shadow-black flex items-center justify-center relative">
      <div className="w-1/4 relative">
        <h1 className="logo name">Gabriel Matiolli</h1>
        <span className="logo mail flex items-center">
          <HiOutlineMail />
          <h1>gabrielmatiollif@gmail.com</h1>
        </span>
      </div>
      <div className="w-1/2"></div>
      <div className="w-1/4"></div>
    </header>
  );
}

export default Header;
