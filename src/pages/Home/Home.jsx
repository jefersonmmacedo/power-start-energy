import { AboutCompany } from "../../Components/AboutCompany/AboutCompany";
import { Footer } from "../../Components/Footer/Footer";
import Navbar from "../../Components/Nav/Navbar";
import { ServicesBox } from "../../Components/ServicesBox/ServicesBox";
import { SliderHome } from "../../Components/SliderHome/SliderHome";
import "./home.css";

export function Home() {
    return (
        <div className="Home">
            <Navbar />
           <SliderHome />

            <AboutCompany />


            <div className="textSections">
              <h2>Nossos serviços</h2>
            </div>

           <ServicesBox />
           <Footer />
        </div>
    )
}