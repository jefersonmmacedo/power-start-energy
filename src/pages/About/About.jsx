import "./about.css";
import { AboutCompany } from "../../Components/AboutCompany/AboutCompany";
import { Footer } from "../../Components/Footer/Footer";
import Navbar from "../../Components/Nav/Navbar";

export function About() {
    return (
        <dev className="About">
             <Navbar />
             <div className="topPage"></div>
             <AboutCompany />
             <Footer />
        </dev>
    )
}