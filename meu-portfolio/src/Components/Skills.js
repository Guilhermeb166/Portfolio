import { FaReact, FaHtml5, FaCss3Alt , FaJsSquare , FaSass,FaFigma } from "react-icons/fa";
import { useEffect, useRef } from 'react';
import styles from './css-modules/Skills.module.css'
function Skills(){

        const skillsRef = useRef(null);
        //Cria uma referência chamada skillsRef que inicialmente é null. Essa referência será usada para acessar o elemento DOM do contêiner de habilidades.

    
        useEffect(() => {//useEffect que executa a função fornecida após a renderização do componente. Este hook permite executar efeitos colaterais em componentes funcionais.

            const observer = new IntersectionObserver((entries) => {//Cria uma instância do IntersectionObserver, que observa quando os elementos entram ou saem da área visível da janela (viewport).
                
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.show);
                        entry.target.classList.remove(styles.hidden);
                        //Se o elemento (entry) estiver visível na viewport (isIntersecting), adiciona a classe show e remove a classe hidden do elemento (entry.target).
                    } else {
                        entry.target.classList.remove(styles.show);
                        entry.target.classList.add(styles.hidden);
                    }
                });
            });
    
            const { current } = skillsRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);



    return(
        <section  className={styles.skillsContainer}>
            
                <h1>Skills</h1>
                <div ref={skillsRef} className={`${styles.cards} ${styles.hidden} `}>
                    <div className={styles.fundo}></div>
                    <div className={styles.item}>
                        <p>HTML5</p>
                        <FaHtml5 className={styles.icon}/>
                        <p className={styles.barra}></p>
                    </div>
                    <div className={styles.item}>
                       <p>CSS3</p> 
                       <FaCss3Alt className={styles.icon}/>
                        <p className={styles.barra}></p>
                    </div>
                    <div className={styles.item}>
                        <p>JavaScript</p> <FaJsSquare className={styles.icon}/>
                        <p className={styles.barra}></p>
                    </div>
                    <div className={styles.item}>
                       <p>React js</p> <FaReact className={styles.icon}/>
                        <p className={styles.barra}></p>
                    </div>
                    <div className={styles.item}>
                       <p>SASS</p> <FaSass className={styles.icon}/>
                        <p className={styles.barra}></p>
                    </div>
                    <div className={styles.item}>
                        <p>Figma</p>
                        <FaFigma className={styles.icon}/>
                        <p className={styles.barra}></p>
                    </div>
                    
                </div>
            
       </section>
    )
}

export default Skills