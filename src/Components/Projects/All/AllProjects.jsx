import Description from '../Description'
import styles from './AllProjects.module.css'
import { useState, useEffect } from 'react';
import { FaCss3Alt, FaReact, FaSass, FaFigma, FaJsSquare, FaHtml5 } from 'react-icons/fa'
export default function AllProjects() {
    const [visibleDescription, setVisibleDescription] = useState(null);
    const [overlay, setOverlay] = useState(false);

    // Função para lidar com a visibilidade da descrição
    const handleViewDescription = (projectId) => {
        if (visibleDescription === projectId) {
            handleClose(); // Se já estiver visível, fecha a descrição
        } else {
            setVisibleDescription(projectId);
            document.body.style.overflow = 'hidden'; // Impede o scroll ao abrir a descrição
        }
    };

    // Função para fechar a descrição
    const handleClose = () => {
        setVisibleDescription(null);
        document.body.style.overflow = 'auto'; // Permite o scroll novamente ao fechar a descrição
    };

    useEffect(() => {
        // Limpa o estilo overflow quando o componente é desmontado
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (
        <div className={styles.allProjects_cards}>
            {visibleDescription && <div className={styles.overlay}></div>}
            {/*Aqui, o overlay só será renderizado quando visibleDescription não for null.  */}
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
            <div className={`${styles.box}`} onClick={() => handleViewDescription('x-men')}>
                <div className={styles.card_details}>
                    <img src="./img-projects/x-men.png" alt="x-men selector" />
                    <div className={styles.details}>
                        <p>X-men selector</p>
                        <p><FaCss3Alt /><FaHtml5 /><FaJsSquare /></p>
                    </div>
                </div>
                <div className={styles.description_wrapper}>
                    <p>20 de Maio de 2024</p>
                    <button onClick={() => handleViewDescription('x-men')}>Ver Mais</button>
                </div>
            </div>
            <div className={`${styles.box}`} onClick={() => handleViewDescription('mario')}>
                <div className={styles.card_details} >
                    <img src="./img-projects/mario.png" alt="jogo do mario" />
                    <div className={styles.details}>
                        <p>Jogo do Mario</p>
                        <p><FaCss3Alt /><FaHtml5 /><FaJsSquare /></p>
                    </div>
                </div>
                <div className={styles.description_wrapper}>
                    <p>24 de Julho de 2024</p>
                    <button onClick={() => handleViewDescription('mario')}>Ver Mais</button>
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
            <div className={`${styles.box}`} onClick={() => handleViewDescription('tela-login')}>
                <div className={styles.card_details} >
                    <img src="./img-projects/tela-login-react.png" alt="tela de login responsiva" />
                    <div className={styles.details}>
                        <p>Tela de Login responsiva</p>
                        <p><FaCss3Alt /><FaReact /></p>
                    </div>
                </div>
                <div className={styles.description_wrapper}>
                    <p>2 de Agosto de 2024</p>
                    <button onClick={() => handleViewDescription('tela-login')}>Ver Mais</button>
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
                site='https://calculator-react-lac.vercel.app/'
                repository='https://github.com/Guilhermeb166/Calculator-React'
                onClose={handleClose}
            />
            <Description
                isVisible={visibleDescription === 'x-men'}
                title='X-men character selector'
                content='O "Projeto Xmen" é um projeto dedicado à exploração dos personagens dos X-Men, oferecendo informações sobre seus poderes e histórias de origem. Usando o arquivo personagens.js para armazenar um array com as informações dos personagens, e no script principal fiquei substituindo essas informações conforme o usuário passa o mouse por cima de cada card. Fiz esse projeto quando estava comecando a me aprofundar mais nos estudos em javascript, e foi uma boa forma de treinamento. '
                tools='HTML5, CSS3, JavaScript'
                site='https://guilhermeb166.github.io/Projeto-Xmen/'
                repository='https://github.com/Guilhermeb166/Projeto-Xmen'
                onClose={handleClose}
            />
            <Description
                isVisible={visibleDescription === 'mario'}
                title='Jogo do Mario'
                content='O objetivo do projeto é criar um pequeno jogo do mario em 2d, em que o você aperta na tecla space ou clica na tela, para que o mario salte sobre o cano, um projeto muito bom para treinar o fundamento de kayframes do css, e muito divertido de se fazer. '
                tools='HTML5, CSS3, JavaScript'
                site='https://guilhermeb166.github.io/Jogo-do-Mario/'
                repository='https://github.com/Guilhermeb166/Jogo-do-Mario'
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
            <Description
                isVisible={visibleDescription === 'tela-login'}
                title='Tela de Login responsiva'
                content='O objetivo do projeto é criar uma tela responsiva em react, e implementei a função de mostrar senha. É um projeto simples, porém usei o projeto para treinar minhas habilidades em react que comecei a estudar no final de julho, um ótimo projeto para começar a se familiarizar com a tecnologia que quer utilizar.'
                tools='React and CSS'
                site='https://tela-de-login-react-three.vercel.app/'
                repository='https://github.com/Guilhermeb166/Tela-de-Login-React'
                onClose={handleClose}
            />
        </div>
    )
}