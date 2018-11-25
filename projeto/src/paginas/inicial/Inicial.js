import React from 'react'
import Botao from '../../componentes/formulario/Botao'
import Astronaut from '../../imagens/astronaut.png'
import Globe from '../../imagens/globe.png'

export default function Inicial(props) {

    return(
        <div className='pagina'>
            <h1> Escolha qual tipo de cadastro: </h1>
            <div className='pagina__botao'>
                <Botao value={'PF'} onClick={props.onClick}>
                <img className="navbar-logo" src={Astronaut} alt="Astronaut icon" />
                    Pessoa Física
                </Botao>
                <Botao value={'PJ'} onClick={props.onClick}>
                <img className="navbar-logo" src={Globe} alt="Globe icon" />
                    Pessoa Juridica
                </Botao>
            </div>
        </div>
    )
}