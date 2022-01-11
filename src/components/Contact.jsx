import "./contact.css";
import Title from "./Title";

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
              <textarea  rows="3"></textarea>
            </p>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="desc_container">
          <h4>Mensaje</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
