import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
      <Home />
    </div>
  );
}

export default App;
