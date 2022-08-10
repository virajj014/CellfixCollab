import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Works from "./Components/Works/Works";
import Promise from "./Components/Promises/Promise";
import Testimonials from "./Components/Testimonials/Testimonials";
import Service from "./Components/Service/Service";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AndroidDevices from "./Components/Intro/AndroidDevice";
import IosDevices from "./Components/Intro/IosDevice";
import WindowsDevices from "./Components/Intro/WindowsDevice";
import AndroidIssue from "./Components/Intro/AndroidIssue";
import IosIssue from "./Components/Intro/IosIssue";
import WindowsIssue from "./Components/Intro/WindowsIssue";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/android-devices" element={<AndroidDevices />} />
          <Route path="/ios-devices" element={<IosDevices />} />
          <Route path="/windows-devices" element={<WindowsDevices />} />

          <Route path="/android-issue" element={<AndroidIssue />} />
          <Route path="/ios-issue" element={<IosIssue />} />
          <Route path="/windows-issue" element={<WindowsIssue />} />
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
