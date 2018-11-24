import React from 'react'
import Botao from '../../componentes/Botao'

export default function Inicial(props) {

    return(
        <div>
            <h1> Escolha qual tipo de cadastro: </h1>
            <Botao value={'PF'} onClick={props.onClick}>
                Pessoa Física
            </Botao>
            <Botao value={'PJ'} onClick={props.onClick}>
                Pessoa Juridica
            </Botao>
        </div>
    )
}