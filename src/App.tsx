import Header from "./components/Header";
import "./App.scss";
import Scroll from "./components/Scroll.tsx";
function App() {
  return (
    <main>
      <div className="w-screen h-screen">
        <Header />
        <div className="bg-home"></div>
        <div className="container-home relative">
          <h3 className="text-white font-normal text-[2.5rem] -mb-2 -mt-20">
            Hello everyone!<span className="emoji">✌🏻</span>
          </h3>
          <h1 className="text-white font-semibold text-[3.5rem] mb-10">
            I'm a <span className="text-[#B0FF4D]">full-stack</span> developer.
            <span className="emoji">🚀</span>
          </h1>
          <h2 className="text-white font-medium text-[2.5rem] w-3/5">
            Scroll down to know about me and my career.
            <span className="emoji">💼</span>
          </h2>
          <div className="text-center fixed left-1/2 -translate-x-1/2 bottom-4 animate-pulse">
            <p className="text-white font-light">scroll</p>
            <Scroll />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
