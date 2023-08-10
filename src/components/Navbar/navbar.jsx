import Cartwidget from "../CartWidget/CartWidget";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles["navbar-custom"]}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          DLevante
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Remeras de Partido
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shorts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Remeras de Entrenamiento
              </a>
            </li>
          </ul>
        </div>
        <Cartwidget />
      </div>
    </nav>
  );
};

export default Navbar;