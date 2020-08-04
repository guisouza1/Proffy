import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
    <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/40372843?s=460&u=25e5a73d5b5895c605cb4e04259addce633c320b&v=4" alt="Guilherme"/>
            <div>
                <strong>Guilherme M Souza</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tenologias de química avançada.
            <br /><br/>
            Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas ja passaram por minhas inumeras explosões.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 210</strong>
            </p>
            <button>
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem