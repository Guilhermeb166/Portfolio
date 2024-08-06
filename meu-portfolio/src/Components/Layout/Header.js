import styles from "../css-modules/Header.module.css";
function Header() {

  function Download(){
    const link = document.createElement('a')
    link.href = './CurrículoFront-end - Guilherme Barroso.pdf';
    link.download = 'currículoguilhermebarroso.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  return (
    <header>
      <nav>
        <button id="downloadBtn" className={styles.downloadBtn} onClick={Download}>Download CV</button>
        <div className={styles.Links}>
          <p><a href="" >Home</a></p>
          <p><a href="" >Meus Projetos</a></p>
          <p><a href="" >Contato</a></p>
          <p><a href="" >Sobre mim</a></p>
        </div>
      </nav>
        <div className={styles.Presentation}>
          <h1>Guilherme Barroso</h1>
          <h3>Front end Developer</h3>
        </div>
        
    </header>
    
  );
}

export default Header;
