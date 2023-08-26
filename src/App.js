
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import About from './Components/About';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
