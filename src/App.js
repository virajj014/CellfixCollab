import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Works from "./Components/Works/Works";
import Promise from "./Components/Promises/Promise";
import Testimonials from "./Components/Testimonials/Testimonials";
import Service from "./Components/Service/Service";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Works></Works>
      <Promise></Promise>
      <Testimonials></Testimonials>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
}

export default App;
