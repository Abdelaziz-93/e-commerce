import logoAdidas from "../assets/image/adidas-removebg-preview.png";
import logoNike from "../assets/image/gratis-png-logotipo-de-nike-swoosh-nike-removebg-preview.png"
import logoNewBalance from "../assets/image/new_balance-removebg-preview.png"
import logoPuma from "../assets/image/Symbole-Puma-removebg-preview.png"

export default function Logo() {
    return (
      <>
      <section className="section-logo">
      <div className="container">
        <div className="row justify-content-around align-items-center logo-brands">
          
             <div className="col-md-3 cool-log py-4">
            <img src={logoAdidas} alt="adidas" className="w-sm-50" />
            </div>
            <div className="col-md-3 cool-log py-4">
            <img src={logoNike} alt="nike" className="w-sm-50" />
            </div>
            <div className="col-md-3 cool-log py-4">
            <img src={logoNewBalance} alt="new balnace" className="" />
            </div>
            <div className="col-md-3 cool-log py-4">
            <img src={logoPuma} alt="puma" className=""/>
            </div> 
        </div>
      </div>
      </section>
      </>
  
    )
  }