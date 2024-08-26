import styles from './Description.module.css'
import { FaTimes } from "react-icons/fa";
export default function Description({ isVisible, content, title, tools, site, repository, onClose }) {

    if (!isVisible) {
        return null; // Não renderiza nada se isVisible for false
    }
    return (
        <div className={styles.Description_container}>
            <div className={`${styles.info_container} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.aboutProject}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.content}>{content}</p>
                </div>
                <div className={styles.tools_control}>
                    <div>
                        <h2>Tecnologias utilizadas:</h2>
                        <p className={styles.tools}>{tools}</p>
                    </div>
                    <div className={styles.btn_control}>
                        <button><a href={site} target='_blank' rel='external'>Acesse o Projeto</a></button>
                        <button><a href={repository} target='_blank' rel='external'>Repositório do Projeto</a></button>
                    </div>
                </div>
                <div className={styles.Closebtn}>
                    <button className={styles.closeInfo} onClick={onClose}><FaTimes /></button>
                </div>
            </div>
        </div>
    )
}