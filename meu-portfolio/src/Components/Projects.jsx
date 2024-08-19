import styles from './css-modules/Projects.module.css'
import { useEffect, useRef } from 'react';
import Highlights from './Projects/Highlights/Highlights'
import AllProjects from './Projects/All/AllProjects';
function Projects() {

    const projectsRef = useRef(null);
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

        const { current } = projectsRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);
    return (
        <section className={styles.Container}>
            <h1>Projetos</h1>
            <div ref={projectsRef} className={`${styles.card_projects} ${styles.hidden}`}>
                <div className={styles.highlights}>
                    <h1 className={styles.title}>Destaques</h1>
                    <Highlights />
                </div>
                <div className={styles.all_projects}>
                    <h1 className={styles.title}>Todos os projetos</h1>
                    <AllProjects/>
                </div>
            </div>
        </section>
    )
}

export default Projects