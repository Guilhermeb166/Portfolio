import styles from '../Components/css-modules/Contacts.module.css'
import { FaGithub,FaEnvelope,FaPhone ,FaLinkedin} from 'react-icons/fa'
export default function Contacts(){
    return(
        <div className={styles.contacts_wrapper}>
            <h1>Contatos</h1>
            <div className={styles.social_wrapper}>
                <div className={styles.social_control}>
                    <a href="">
                        <FaEnvelope/>
                        <p>G-Mail</p>
                        <p>guilhermebarroso166@gmail.com</p>
                    </a>
                </div>
                <div className={styles.social_control}>
                    <a href="">
                        <FaPhone/>
                        <p>Telefone</p>
                        <p>(85) 99740-7364</p>
                    </a>
                </div>
                <div className={styles.social_control}>
                    <a href="">
                        <FaGithub/>
                        <p>Github</p>
                        <p>@Guilhermeb166</p>
                    </a>
                </div>
                <div className={styles.social_control}>
                    <a href="">
                        <FaLinkedin/>
                        <p>Linkedin</p>
                        <p>Guilherme Barroso</p>
                    </a>
                </div>
            </div>
        </div>
    )
}