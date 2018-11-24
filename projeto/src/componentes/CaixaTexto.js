import React from 'react'

export default function CaixaTexto(props) {
    function valida(e){
        console.log("input: ", e.target)
        console.log("name: ", e.target.name)
        console.log("value: ", e.target.value)

        const nome = e.target.name
        const valor = e.target.value
        
        
        if (props.required && valor.trim() === '') {
            props.onChange(nome, valor, "Campo obrigatório")
            return
        }

        if (props.minLength && valor.length < props.minLength) {
            props.onChange(nome, valor, `Digite pelo menos ${props.minLength} caracteres`)
            return 
        }
        
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (props.type === 'email' && !regexEmail.test(valor)) {
            props.onChange(nome, valor, "Digite um email válido")
            return
        }

        const regexCpf = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/
        if(props.name === 'cpf' && !regexCpf.test(valor)) {
            props.onChange(nome, valor, "Digite um CPF válido")
            return
        }
        
        const regexData = /((\d{2})|(\d))\/((\d{2})|(\d))\/((\d{4})|(\d{2}))/ 
        if(props.name === 'nascimento' && !regexData.test(valor)) {
            props.onChange(nome, valor, "Digite uma data válida")
            return
        }
        
        const regexCep = /[0-9]{5}-[0-9]{3}/
        if(props.name === 'cep' && !regexCep.test(valor)) {
            props.onChange(nome, valor, "Digite um CEP válido")
            return
        }

        const regexCnpj = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/
        if(props.name === 'cnpj' && !regexCnpj.test(valor)) {
            props.onChange(nome, valor, "Digite um CNPJ válido")
            return
        }

        props.onChange(nome, valor)
    }


    return (
        <input
            className="caixa-texto" 
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onChange={valida}
            required={props.required}
        />
    )
}