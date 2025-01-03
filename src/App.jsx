import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Myprofile from "./pages/Myprofile";
import MyApointments from "./pages/MyApointments";
import Appointment from "./pages/Appointment";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="mx-4 sm:mx-[10%]">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctors/:speciality" element={<Doctors />} />
                <Route path="/login" element={<Login />} />
                <Route path="/my-profile" element={<Myprofile />} />
                <Route path="/My-Apoiments" element={<MyApointments />} />
                <Route path="/appoiment/:docId" element={<Appointment />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
