
import styles from './Highlights.module.css'
import { FaCss3Alt, FaReact, FaSass, FaFigma } from 'react-icons/fa'
export default function Highlights() {


    return (
        <div className={styles.highlights_cards}>
            <div className={`${styles.box}`}>
                <div className={styles.card_details}>
                    <img src="./img-projects/agendamentos.png" alt="site de agendamentos" />
                    <div className={styles.details}>
                        <p>Sistema de agendamento</p>
                        <p><FaCss3Alt /><FaReact /><FaSass /><FaFigma /></p>
                    </div>
                </div>
                <div className={styles.description_wrapper}>
                    <p>2 de Julho de 2024</p>
                    <button>Ver Mais</button>
                </div>
            </div>
            <div className={`${styles.box}`}>
                <div className={styles.card_details}>
                    <img src="./img-projects/calculadora.png" alt="site de agendamentos" />
                    <div className={styles.details}>
                        <p>Calculadora Windows</p>
                        <p><FaCss3Alt /><FaReact /><FaSass /><FaFigma /></p>
                    </div>
                </div>
                <div className={styles.description_wrapper}>
                    <p>15 de Agosto de 2024</p>
                    <button>Ver Mais</button>
                </div>
            </div>
            <div className={`${styles.box}`}></div>
        </div>
    )
}