import "./sliderHome.css";
import {IoArrowBack, IoArrowForward} from 'react-icons/io5';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import image01 from '../../assets/images/slider/01.jpg';
import image02 from '../../assets/images/slider/02.jpg';
import image03 from '../../assets/images/slider/03.jpg';
import image04 from '../../assets/images/slider/04.jpg';
import image05 from '../../assets/images/slider/05.jpg';
import image06 from '../../assets/images/slider/06.jpg';

function SliderHome() {

    function handleContact() {
        window.open("https://wa.me/+5521984129435")
      }


    const data = [
        {
            id: "01",
            link: image03,
            title: "Instalação e Manutenção de Quadros elétricos",
            text: "A manutenção de quadros elétricos deve ser realizada de maneira recorrente, pois os quadros elétricos só realizam a distribuição de energia elétrica adequada quando estão em perfeitas condições."
        },
        {
            id: "02",
            link: image01,
            title: "SPDA",
            text: "Oferecemos toda consultoria necessária para implementação e atendimento da norma NBR 5419:2015 – SPDA – Sistema de Proteção Contra Descargas Atmosféricas."
        },
        {
            id: "03",
            link: image04,
            title: "Subestações",
            text: "Subestações são instalações elétricas de alta potência por onde a energia passa antes de atingir seu ponto final"
        },
        {
            id: "04",
            link: image02,
            title: "Grupos Geradores",
            text: "Manutenção periódica, que inclui ajustes, verificações elétricas e mecânicas"
        }
    ]

const buttonStyle = {
    width: '50px',
    height:'50px',
  padding: '10px',
  borderRadius: '50%',
  background: 'rgba(1235,188,35, 0.5)',
  color: '#fff',
  border: '0px',
  margin: '10px',
  fontSize: '20px'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><IoArrowBack/></button>,
  nextArrow: <button style={{ ...buttonStyle }}><IoArrowForward/></button>
}
   
    return (
      <Slide {...properties}>
          {data?.map((property) => {
            return (
                <div className="each-slide-effect" key={property.id}>
          <div className="imageTop">
            <div className="image">
                 <a href={`/imovel/${property.id}`}>
                    <img src={property.link} alt="" />
                </a>
            </div>

            <div className="blockSlider">
                <h1>{property.title}</h1>
                <h4>{property.text}</h4>

                <button onClick={handleContact}>Fale conosco</button>
            </div>

            </div>
          </div>
            )
          })
          }
      </Slide>
  );
};
  

  export { SliderHome }