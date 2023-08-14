import { Footer } from "../../Components/Footer/Footer";
import Navbar from "../../Components/Nav/Navbar";
import "./contact.css";
import {IoMailOpenOutline, IoCallOutline, IoPhonePortraitOutline, IoMapOutline, IoLocateOutline, IoLocationOutline} from "react-icons/io5"

export function Contact() {
    return (
        <div className="Contact">
            <Navbar />
            <div className="topPage"></div>
                <h2>Fale conosco</h2>
                <h4>Entre em contato conosco, estamos prontos para atendê-lo.</h4>

            <div className="BlocksContact">
                <div className="blockContact">
                        <h3><IoMailOpenOutline /> Email</h3>
                        <h5>contato@powerstartenergy.com.br</h5>
                </div>
                <div className="blockContact">
                        <h3><IoCallOutline  /> Telefone</h3>
                        <h5>21 98412-9435</h5>
                </div>
                <div className="blockContact">
                    <h3><IoLocationOutline /> Endereço </h3>
                    <h5>Rua João Caetano, 500 Sala 213, <br /> Alcântara, São Gonçalo RJ.</h5>
                </div>
            </div> 

            <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2139.76450820369!2d-43.00520648590191!3d-22.823186681595956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99908dd6a0e0c3%3A0xf3137c64c3c6571!2sR.%20Jo%C3%A3o%20Caetano%2C%20500%20-%20Alcantara%2C%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ%2C%2024710-405!5e0!3m2!1spt-BR!2sbr!4v1692026891762!5m2!1spt-BR!2sbr"
                    width="100%" height="300" style={{border:"0px", borderRadius: "20px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

            <Footer />
        </div>
    )
}