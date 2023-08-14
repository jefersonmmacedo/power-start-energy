import "./servicesCompany.css";
import { Footer } from "../../Components/Footer/Footer";
import Navbar from "../../Components/Nav/Navbar";
import { ServicesBox } from "../../Components/ServicesBox/ServicesBox";

export function ServicesCompany() {
    return (
        <dev className="ServicesCompany">
             <Navbar />
             <div className="topPage"></div>
             <div className="textSections">
              <h2>Nossos serviços</h2>
            </div>

           <ServicesBox />
             <Footer />
        </dev>
    )
}