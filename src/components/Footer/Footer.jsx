import logoFooter from "../../assets/pr-volt-icon-footer.png";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <a href="/" className="footer__logo">
          <img src={logoFooter} alt="logo" />
        </a>
        <a href="mailto: KolisnykAleksv@gmail.com" className="footer__contacts">
          KolisnykAleksv@gmail.com
        </a>
        <a href="tel:+38-066-207-74-34" className="footer__contacts">
          +38-066-207-74-34
        </a>
      </div>
    </div>
  );
};

export default Footer;
