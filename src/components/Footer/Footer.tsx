import mainStyle from "../../App.module.scss";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={mainStyle.container}>
      <div className={style.footerContainer}>
        <div className={style.socialsContainer}>
          <h3>Social share</h3>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className={style.infoContainer}>
          <h3>Event info</h3>
          <ul>
            <li>Enter Now</li>
            <li>Event info</li>
            <li>Course Maps</li>
            <li>Race Pack</li>
            <li>Results</li>
            <li>FAQs</li>
            <li>Am I Registered?</li>
          </ul>
        </div>
        <div className={style.infoContainer}>
          <h3>Registration</h3>
          <ul>
            <li>Volunteers</li>
            <li>Gallery</li>
            <li>Press</li>
            <li>Results</li>
            <li>Privacy Policy</li>
            <li>Service Plus</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className={style.infoContainer}>
          <h3>Schedule</h3>
          <ul>
            <li>Gallery</li>
            <li>About</li>
            <li>Videos</li>
            <li>Results</li>
            <li>FAQs</li>
            <li>Results</li>
            <li>Volunteers</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
