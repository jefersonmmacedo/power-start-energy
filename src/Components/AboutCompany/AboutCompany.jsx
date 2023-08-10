import "./aboutCompany.css"
import Simbol2 from '../../assets/images/Simbol2.png'


export function AboutCompany() {

    function handleContact() {
        window.open("https://wa.me/+5521984129435")
      }


    return (
        <div className="AboutCompany">
            <div className="boxComany">
                <h5>Sobre nós</h5>
                <h1>Bem vindo à nossa empresa, Power Start Energy</h1>
                <div className="boxLogo">
                    <img src={Simbol2} alt="Sombolo logo" />
                </div>
            </div>

            <div className="textCompany">
                <h2>Segurança elétrica residencial e comercial</h2>
                <h4>A Power Start Energy empresa especializada em SPDA, Reparos, Manutenção e
                Instalação de Equipamentos elétricos, eletrônicos, instrumentação e
                Automação na Residencial e Industrial.
                <br />
                <br />
                Prestamos serviços à condomínios, prédios residenciais, prédios comerciais,
                supermercados e empresas em geral.
                <br />
                <br />
                Entre em contato com nossa equipe.
                Agenda uma visita para análise preventiva de suas instalações elétricas, garantindo segurança e prevenindo acidentes futuros.    
            </h4>
            <button onClick={handleContact}>Fale conosco</button>
            </div>
        </div>
    )
}