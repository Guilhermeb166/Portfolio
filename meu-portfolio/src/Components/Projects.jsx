import styles from './css-modules/Projects.module.css'
import Highlights from './Projects/Highlights'
function Projects() {
    return(
        <section className={styles.Container}>
            <h1>Meus projetos</h1>
            <div className={styles.card_projects}>
                <div className={styles.highlights}>
                    <h1 className={styles.title}>Destaques</h1>
                    <Highlights/>
                </div>
                <div className={styles.all_projects}>
                <h1 className={styles.title}>Todos os projetos</h1>
                </div>
            </div>
        </section>
    )
}

export default Projects