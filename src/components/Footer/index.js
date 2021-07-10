import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-col">
        <h3>Ubicación</h3>
        <hr />
        <ul>
          <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
          <li>Alphavile SP</li>
          <li>brasil@corebiz.ag</li>
          <li>+55 11 3090 1039</li>
        </ul>
      </div>
      <div className="footer-col footer-btn-container">
        <button>
          <img src="./icons/message.svg" alt="icon-message" width="24px" />
          CONTÁCTANOS
        </button>
        <button>
          <img src="./icons/headphones.svg" alt="icon-headphones" width="24px" />
          HABLA CON UN CONSULTOR
        </button>
      </div>
      <div className="footer-col footer-credits">
        <div>
          <span>Powered by</span>
          <img src="./icons/logo-corebiz.svg" alt="icon-logo-corebiz" />
        </div>
        <div>
          <span>Powered by</span>
          <img src="./icons/vector.svg" alt="icon-vector" width="24px"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
