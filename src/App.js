import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import Skill from "./components/Skills/skill";
import Portfolio from "./components/Porfolio/portfolio";
import Clients from "./components/Clients/clients";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Skill/>
    <Portfolio/>
    <Clients/>
    <Contact/>
    </div>
  );
}

export default App;
