import logo from "../../assets/pr-volt-icon.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header ">
      <div className="container">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <nav className="header__nav">
          <div className="header__link">How it works</div>
          <div className="header__link">Pricing</div>
          <div className="header__link">Customers</div>
          <div className="header__link">about</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
