import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Works from "./Components/Works/Works";
import Promise from "./Components/Promises/Promise";
import Testimonials from "./Components/Testimonials/Testimonials";
import Service from "./Components/Service/Service";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import AndroidRepair from "./Components/Intro/AndroidRepair";
import WindowsRepair from "./Components/Intro/WindowsRepair";
import Defects from "./Components/Intro/Defects";

function App() {
  return (
      <div className="App">
        <Navbar></Navbar>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/android-repair" element={<AndroidRepair/>}/>
          <Route path="/windows-repair" element={<WindowsRepair/>}/>
          <Route path="/windows-repair/defects" element={<Defects/>}/>
          <Route path="/android-repair/defects" element={<Defects/>}/>
        </Routes>
        </BrowserRouter>
        <Works></Works>
        <Promise></Promise>
        <Testimonials></Testimonials>
        <Service></Service>
        <Footer></Footer>
      </div>
  );
}

export default App;
