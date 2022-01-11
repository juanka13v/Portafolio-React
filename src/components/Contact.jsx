import "./contact.css";
import Title from "./Title";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";


const Contact = () => {
  return (
    <div className="container">
      <Title title="Contact" />
      <div className="contact_container">
        <div className="form_container">
          <form className="form">
            <p>
              <label>Nombre:</label>
              <input type="text" />
            </p>
            <p>
              <label>Email:</label>
              <input type="email" />
            </p>
            <p>
              <label>Asunto:</label>
              <input type="text" />
            </p>
            <p>
              <label>Tu Mensaje:</label>
              <textarea rows="3"></textarea>
            </p>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="desc_container">
          <div className="desc">
            <div className="desc_logo">
            <AiOutlineMail />
            </div>
            <h3>Enviame un Mensaje</h3>
            <p>
              Si quieres ponerte en contacto conmigo puedes enviarme un mensaje
              a mi correo o puedes enviarme a mis redes.
            </p>
            <div className="desc_social-media">
              <a href="#">
                <AiFillGithub />
              </a>
              <a href="#">
                <AiFillTwitterCircle />
              </a>
              <a href="#">
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
