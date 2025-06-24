import mainStyle from "../../App.module.scss";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <header className={mainStyle.container}>
      <a href="#">
        <img src="../../../public/img/logo.png" alt="logo" />
      </a>
      <nav>
        <ul>
          <li>Home</li>
          <li>Bikes</li>
          <li>Gear</li>
          <li>Parts</li>
          <li>Tires</li>
          <li>Service-info</li>
          <li>Catalogues</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className={style.actionIcon}>
        <i className="fas fa-search"></i>
        <i className="fas fa-shopping-bag"></i>
      </div>
    </header>
  );
}
