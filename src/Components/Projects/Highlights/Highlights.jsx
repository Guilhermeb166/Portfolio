
import { useState, useEffect } from 'react';
import styles from './Highlights.module.css'
import { FaCss3Alt, FaReact, FaSass, FaFigma, FaJsSquare, FaHtml5 } from 'react-icons/fa'
import Description from '../Description/Description';
export default function Highlights() {
    const [visibleDescription, setVisibleDescription] = useState(null);

    // Função para lidar com a visibilidade da descrição
    const handleViewDescription = (projectId) => {
        if (visibleDescription === projectId) {
            handleClose(); // Se já estiver visível, fecha a descrição
        } else {
            setVisibleDescription(projectId);
            document.body.style.overflow = 'hidden'; // Impede o scroll ao abrir a descrição
            document.documentElement.style.overflow = 'hidden'; // Adiciona ao <html>
        }
    };

    // Função para fechar a descrição
    const handleClose = () => {
        setVisibleDescription(null);
        document.body.style.overflow = 'auto'; // Permite o scroll novamente ao fechar a descrição
        document.documentElement.style.overflow = 'auto'; // Remove do <html>
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
            <div className={`${styles.box}`} onClick={() => handleViewDescription('pokedex')}>
                <div className={styles.card_details}>
                    <img src="./img-projects/pokedex.png" alt="pokedex" />
                    <div className={styles.details}>
                        <p>Pokédex</p>
                        <p><FaHtml5 /><FaCss3Alt /><FaJsSquare /></p>
                    </div>
                </div>
                <div className={styles.description_wrapper}>
                    <p>20 de Agosto de 2024</p>
                    <button onClick={() => handleViewDescription('pokedex')}>Ver Mais</button>
                </div>
            </div>

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
                site='https://feitosa-agendamentos.vercel.app/'
                repository='https://github.com/Guilhermeb166/Agendamento-Clientes'
                onClose={handleClose}
            />
            <Description
                isVisible={visibleDescription === 'pokedex'}
                title='Projeto pokédex'
                content='Um projeto com o objetivo de utilizar a API do pokemon, e fazer uma pokedex com as informações da API. Acredito que foi uma ótima experiência para eu conhecer mais sobre APIs e sobre como utilizar o fetch no javascript, um projeto simples, porém contribuiu bastante para a minha experiência com Javascript.'
                tools=' CSS3, React js, and Sass'
                site='https://guilhermeb166.github.io/Pokedex/'
                repository='https://github.com/Guilhermeb166/Pokedex'
                onClose={handleClose}
            />
        </div>
    )
}