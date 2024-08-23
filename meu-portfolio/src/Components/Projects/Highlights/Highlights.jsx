
import { useState, useEffect } from 'react';
import styles from './Highlights.module.css'
import { FaCss3Alt, FaReact, FaSass, FaFigma, FaJsSquare, FaHtml5 } from 'react-icons/fa'
import Description from '../Description';
export default function Highlights() {
    const [visibleDescription, setVisibleDescription] = useState(null);
    const [overlay, setOverlay] = useState(false);

    // Função modificada para lidar com a visibilidade da descrição
    const handleViewDescription = (projectId) => {
        setVisibleDescription(visibleDescription === projectId ? null : projectId);
        setOverlay(true);

        // Impede o scroll quando o overlay está visível
        document.body.style.overflow = 'hidden';
    };

    // Função modificada para fechar a descrição
    const handleClose = () => {
        setVisibleDescription(null);
        setOverlay(false);

        // Permite o scroll novamente ao fechar o overlay
        document.body.style.overflow = 'auto'; // ou simplesmente remove a propriedade
    };

    useEffect(() => {
        // Limpa o estilo overflow quando o componente é desmontado
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className={styles.highlights_cards}>
            {visibleDescription && <div className={styles.overlay}></div>}
            <div className={`${styles.box}`} onClick={() => handleViewDescription('agendamentos')}>
                <div className={styles.card_details}>
                    <img src="./img-projects/agendamentos.png" alt="site de agendamentos" />
                    <div className={styles.details}>
                        <p>Sistema de agendamento</p>
                        <p><FaHtml5 /><FaCss3Alt /><FaJsSquare /><FaSass /><FaFigma /></p>
                    </div>
                </div>
                <div className={styles.description_wrapper}>
                    <p>2 de Julho de 2024</p>
                    <button onClick={() => handleViewDescription('agendamentos')}>Ver Mais</button>
                </div>

            </div>
            <div className={`${styles.box}`} onClick={() => handleViewDescription('calculadora')}>
                <div className={styles.card_details}>
                    <img src="./img-projects/calculadora.png" alt="calculadora" />
                    <div className={styles.details}>
                        <p>Calculadora Windows</p>
                        <p><FaCss3Alt /><FaReact /><FaSass /></p>
                    </div>
                </div>
                <div className={styles.description_wrapper}>
                    <p>15 de Agosto de 2024</p>
                    <button onClick={() => handleViewDescription('calculadora')}>Ver Mais</button>
                </div>
            </div>
            <div className={`${styles.box}`}></div>
            <Description
                isVisible={visibleDescription === 'agendamentos'}
                title='Sistema de agendamentos de Clientes'
                content='Site desenvolvido com um sistema de agendamentos para os clientes da Feitosa Barber, com foco em ser breve e direto, ele da para o cliente a opção de escolher o dia, horário e o serviço desejado para seu agendamento. Além disso, o Projeto também contém uma página separada para o barbeiro com uma tabela dos agendamentos realizados.'
                tools='HTML5, CSS3, JavaScript, Figma and Sass '
                site='https://feitosa-agendamentos.vercel.app/'
                repository='https://github.com/Guilhermeb166/Agendamento-Clientes'
                onClose={handleClose}
            />
            <Description
                isVisible={visibleDescription === 'calculadora'}
                title='Calculadora Windows'
                content='Projeto de calculadora do Windows desenvolvido com o objetivo de aperfeiçoar minhas habilidades com React adquiridas recentemente,creio que esse seja um dos principais exercícios pra praticar. Então, além de aplicar as funcionalidades e a interface da calculadora do Windows, tentei simular uma espécie de ambiente desktop, onde é possível abrir e fechar a aplicação.'
                tools=' CSS3, React js, and Sass'
                onClose={handleClose}
            />
        </div>
    )
}