import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";

import "../style/components/informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(62)9840-7863</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p className="email">felipeand.webdev@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localizaçao</h3>
          <p>Guanambi/BA</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
