import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import SingleCharacter from "./pages/SingleCharacter.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Characters />
        <SingleCharacter />
      </main>
    </div>
  );
}

export default App;
