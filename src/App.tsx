import Header from "./components/Header";
import background from "./assets/backgroundhome.png";

function App() {
  return (
    <main>
      <div className="w-screen h-screen">
        <Header />
        <img className="h-[87%] brightness-50" src={background} alt="Home background" />
      </div>
    </main>
  );
}

export default App;
