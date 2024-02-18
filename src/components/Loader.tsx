import { useEffect } from "react";

function Loader() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div className="grid place-items-center h-screen w-full dark:bg-[#1a1a1a] bg-white">
      <div className="animate-spin w-10 h-10 rounded-full bg-transparent border-4 dark:border-b-[#1a1a1a] dark:border-white border-b-white border-[#1a1a1a]"></div>
    </div>
  );
}

export default Loader;
