import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/MAin/Main";
import { Routes, Route } from "react-router-dom";
import Reports from "./Components/Routes/Reports/Reports";
import Needs from "./Components/Routes/Needs/Needs";
import Team from "./Components/Routes/Team/Team";
import Donate from "./Components/Routes/Donate";

function App() {
  
  return (
    <div className=" flex flex-col  relative w-full h-full ">
      <Header  />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Reports" element={<Reports/>}/>
        <Route path="/Needs" element={<Needs/>}/>
        <Route path="/Team" element={<Team/>}/>
        <Route path="/Donate" element={<Donate/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
