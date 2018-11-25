import React from 'react'
import Legenda from './Legenda'
import CaixaTexto from './CaixaTexto'

function Grupo(props) {
    console.log(props.erro, 'erro retorna')
    return (
        <div>
            {props.children}
            {props.erro && (
                <p>
                    {props.erro}
                </p>
            )}
        </div>
    )
}

Grupo.Legenda = Legenda
Grupo.CaixaTexto = CaixaTexto

export default Grupo
