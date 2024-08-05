import "boxicons/css/boxicons.min.css";
import styles from "./css-modules/Nav.module.css";
function Nav() {
  return (
    <nav>
      <a href=""><i className="bx bxl-github"></i></a>
      
      <div className={styles.Links}>
        <p><a href="">Meus Projetos</a></p>
        <p><a href="" className={styles.Contato}>Fale Comigo</a></p>
      </div>
    </nav>
  );
}

export default Nav;
