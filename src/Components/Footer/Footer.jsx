import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import LogoImg from '../../assets/images/Logo.png'
import "./footer.css"

export function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className="Footer">
            <div className="top">
            <div className="image">
                <a href='/'>
                <img src={LogoImg} alt="Logo Sua Chave" />
                </a>
            </div>

            <div className="icons">
                <a className="unicIconMenu" href="https://instagra.com" target='_Blank'><IoLogoInstagram /></a>
                <a className="unicIconMenu" href="https://facebook.com" target='_Blank'><IoLogoFacebook /></a>
                <a className="unicIconMenu" href="https://linkedin.com" target='_Blank'><IoLogoLinkedin /></a>
            </div>
            </div>


            <div className="copy">
            <h5>© Power Start Energy {date}. Todos os direitos reservados</h5>
            </div>

        </div>
    )
}