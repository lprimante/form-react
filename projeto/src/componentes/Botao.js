import React from 'react'

export default function Botao(props) {

    return (
        <button value={props.value} onClick={props.onClick} >
            {props.children}
        </button>
    )
}