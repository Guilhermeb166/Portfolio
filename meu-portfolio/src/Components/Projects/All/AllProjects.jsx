import styles from './AllProjects.module.css'
import { FaCss3Alt, FaReact, FaSass, FaFigma,FaJsSquare,FaHtml5 } from 'react-icons/fa'
export default function AllProjects(){
    return(
        <div className={styles.allProjects_cards}>
            <div className={`${styles.box}`}>
                <div className={styles.card_details}>
                    <img src="./img-projects/x-men.png" alt="site de agendamentos" />
                    <div className={styles.details}>
                        <p>Sistema de agendamento</p>
                        <p><FaCss3Alt /><FaHtml5 /><FaJsSquare/></p>
                    </div>
                </div>
                <div className={styles.description_wrapper}>
                    <p>2 de Julho de 2024</p>
                    <button>Ver Mais</button>
                </div>
            </div>
        </div>
    )
}