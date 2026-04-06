import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
    <a                 
                href="https://linkedin.com/in/aniketagicha"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn - aniketagicha
              </a>
            </p>
            <h4>Education</h4>
            <p>B.S. Computer Science, SFSU - 2023-2027</p>
            <p>GPA: 3.5 - Graduating May 2027</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
    <a           
              href="https://github.com/aniketagicha21-code"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
    <a           
              href="https://linkedin.com/in/aniketagicha"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
    <a            
              href="mailto:aniketagicha21@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aniket Agicha</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;