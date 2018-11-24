import React, { Component } from 'react'
import Inicial from './inicial/Inicial'
import PessoaFisica from './pessoaFisica/PessoaFisica'
import PessoaJuridica from './pessoaJuridica/PessoaJuridica'
import Final from './final/Final'

export default class Cadastro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            conteudo: undefined
        }
    }

    handleClick = e => {
        e.preventDefault()

        const clique = e.target.value

        this.setState({
            conteudo: clique
        })
    }

    

    render() {
        return (
            <div>
                {
                    this.state.conteudo === undefined &&
                    <Inicial onClick={this.handleClick}/>  
                }
                {
                    this.state.conteudo === 'PF' &&
                    <PessoaFisica onClick={this.handleClick}/>
                }
                {
                    this.state.conteudo === 'PJ' &&
                    <PessoaJuridica onClick={this.handleClick}/>
                }
                {
                    this.state.conteudo === 'final' &&
                    <Final />
                }
            </div>
        )
    }

   
}