import styles from '../Components/css-modules/Contacts.module.css'
import { FaGithub,FaEnvelope,FaPhone ,FaLinkedin} from 'react-icons/fa'
export default function Contacts(){
    return(
        <div className={styles.contacts_wrapper}>
            <h1>Contatos</h1>
            <div className={styles.social_wrapper}>
                <div className={styles.social_control}>
                    <a href="mailto:guilhermebarroso166@gmail.com" target='_blank'>
                        <FaEnvelope className={styles.social_icon}/>
                        <p>G-Mail</p>
                        <p>guilhermebarroso166@gmail.com</p>
                    </a>
                </div>
                <div className={styles.social_control}>
                    <a href="https://wa.me/5585997407364" target='_blank'>
                        <FaPhone className={styles.social_icon}/>
                        <p>Telefone</p>
                        <p>(85) 99740-7364</p>
                    </a>
                </div>
                <div className={styles.social_control}>
                    <a href="https://github.com/Guilhermeb166" target='_blank'>
                        <FaGithub className={styles.social_icon}/>
                        <p>Github</p>
                        <p>@Guilhermeb166</p>
                    </a>
                </div>
                <div className={styles.social_control}>
                    <a href="https://www.linkedin.com/in/guilherme-barroso-98773b269/" target='_blank'>
                        <FaLinkedin className={styles.social_icon}/>
                        <p>Linkedin</p>
                        <p>Guilherme Barroso</p>
                    </a>
                </div>
            </div>
        </div>
    )
}