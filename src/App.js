import "./App.css";
import Home from "./Pages/Home.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./Pages/Start.jsx";
import About from "./Pages/About.jsx";
import Calculator from "./Pages/Calculator.jsx"
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Start" element={<Start />} />   
          <Route exact path="/about" element={<About />} />
      <Route exact path="/calculator" element={<Calculator />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
