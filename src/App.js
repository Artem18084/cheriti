import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/MAin/Main";
import Reports from "./Components/Routes/Reports/Reports";
import Needs from "./Components/Routes/Needs/Needs";
import Team from "./Components/Routes/Team/Team";
import Donate from "./Components/Routes/Donate/Donate";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(toggleMenu);
  return (
    <div className=" flex flex-col  w-full h-full   text-xl  max-[1024px]:text-sm  	  ">
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Needs" element={<Needs />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
      <Footer />
      <Sidebar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu}/>
    </div>
  );
}

export default App;
