import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./Header.module.css";
import { useState,useEffect } from "react";

function Header() {
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    // Seleciona a imagem que precisa ser carregada
    const img = new Image();
    img.src = '/img/workfundo.jpg';
    img.onload = () => {
      setLoading(false); // Define o carregamento como concluído
    };
  }, []);


  function Download() {
    const link = document.createElement('a')
    link.href = './CurrículoFront-end - Guilherme Barroso.pdf';
    link.download = 'currículoguilhermebarroso.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (

    <>
    {loading?(
      <div className={styles.preloader}>
        <AiOutlineLoading3Quarters className={styles.loadingIcon}/>
      </div>
      
    ):(
    <header>
      <nav>
        <button id="downloadBtn" className={styles.downloadBtn} onClick={Download}>Download CV</button>
        <div className={styles.Links}>
          <p><span onClick={() => scrollToSection('Header')}>Home</span></p>
          <p><span onClick={() => scrollToSection('projects')}>Meus Projetos</span></p>
          <p><span onClick={() => scrollToSection('contacts')}>Contato</span></p>
          <p><span onClick={() => scrollToSection('skills')}>Skills</span></p>
        </div>
      </nav>
      <div className={styles.Presentation}>
        <h1>Guilherme Barroso</h1>
        <h3>Front end Developer</h3>
      </div>

    </header>
  )}
  </>
  );
}

export default Header;
