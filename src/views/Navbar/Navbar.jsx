import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        <span>Mori</span>Service
      </NavLink>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Início
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/servicos"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Serviços
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
