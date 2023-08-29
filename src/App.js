import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import Skill from "./components/Skills/skill";
import Portfolio from "./components/Porfolio/portfolio";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Skill/>
    <Portfolio/>
    </div>
  );
}

export default App;
