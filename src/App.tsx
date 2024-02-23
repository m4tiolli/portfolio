import Header from "./components/Header";
import "./App.scss";
import Scroll from "./components/Scroll.tsx";
import HeaderMobile from "./components/HeaderMobile.tsx";
import { useEffect, useState } from "react";
import Loader from "./components/Loader.tsx";

function App() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const font = new FontFace('Emoji', 'url(./src/assets/AppleColorEmoji.ttf)');
    font.load()
      .then(() => {
        document.fonts.add(font);
        setFontLoaded(true);
      })
      .catch((error) => {
        console.error('Erro ao carregar fonte:', error);
      });
  }, []);

  return (
    <main>
      {
        fontLoaded ? (
          <div className="w-dvw h-svh relative">
            {mobile ? (
              <>
                <HeaderMobile />
                <div className="h-[13%]"></div>
              </>
            ) : (
              <Header />
            )}
            <div className="bg-home"></div>
            <div className="container-home relative p-10 xl:p-24">
              <h3 className="text-white font-normal text-lg -mt-20 sm:mb-4 sm:text-[2rem] md:text-[2.5rem] md:mb-6 2xl:text-[3.5rem] 2xl:mb-12">
                Hello everyone!<span className="emoji">✌🏻</span>
              </h3>
              <h1 className="text-white font-semibold text-xl mb-10 sm:text-[2.6rem] md:text-[3rem] md:mb-16 2xl:text-[4rem] 2xl:mb-32">
                I'm a <span className="text-[#B0FF4D]">full-stack</span> developer.
                <span className="emoji">🚀</span>
              </h1>
              <h2 className="text-white font-medium text-lg sm:text-[1.5rem] md:text-[2rem] 2xl:text-[3rem]">
                Scroll down to know about me and my career.
                <span className="emoji">💼</span>
              </h2>
              <div className="text-center fixed left-1/2 -translate-x-1/2 bottom-4 animate-pulse">
                <p className="text-white font-light">scroll</p>
                <Scroll />
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )
      }
    </main>
  );
}

export default App;
