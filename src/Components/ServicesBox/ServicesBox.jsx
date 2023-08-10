import "./servicesBox.css";
import image01 from '../../assets/images/slider/01.jpg';
import image02 from '../../assets/images/slider/02.jpg';
import image03 from '../../assets/images/slider/03.jpg';
import image04 from '../../assets/images/slider/04.jpg';
import image05 from '../../assets/images/slider/05.jpg';
import image06 from '../../assets/images/slider/06.jpg';
import {GiElectricalResistance, GiLightningArc, GiLightningTrio, GiPowerGenerator } from 'react-icons/gi';
import { IoChevronForwardOutline } from "react-icons/io5";

export function ServicesBox() {

    function handleContact() {
        window.open("https://wa.me/+5521984129435")
      }


    return (
        <div className="ServicesBox">
            <div className="boxUnic">
                <div className="text">
                    <GiElectricalResistance />
                    <h3>Quadros elétricos.</h3>
                    <h5>Sistema de Proteção Contra Descargas Atmosféricas</h5>
                </div>
                <button onClick={handleContact}> <IoChevronForwardOutline /> Mais detalhes</button>
                <div className="image">
                    <img src={image03} alt="" />
                </div>
            </div>
            <div className="boxUnic">
                <div className="text">
                    <GiLightningTrio />
                    <h3>SPDA</h3>
                    <h5>Texto sobre energia elétrica</h5>
                </div>
                <button onClick={handleContact}> <IoChevronForwardOutline /> Mais detalhes</button>
                <div className="image">
                    <img src={image01} alt="" />
                </div>
            </div>
            <div className="boxUnic">
                <div className="text">
                    <GiLightningArc />
                    <h3>Subestação</h3>
                    <h5>Texto sobre energia elétrica</h5>
                </div>
                <button onClick={handleContact}> <IoChevronForwardOutline /> Mais detalhes</button>
                <div className="image">
                    <img src={image04} alt="" />
                </div>
            </div>
            <div className="boxUnic">
                <div className="text">
                    <GiPowerGenerator />
                    <h3>Grupos Geradores</h3>
                    <h5>Inspeções e manutenções de geradores</h5>
                </div>
                <button onClick={handleContact}> <IoChevronForwardOutline /> Mais detalhes</button>
                <div className="image">
                    <img src={image02} alt="" />
                </div>
            </div>
        </div>
    )
}

