import React, { Component } from 'react'
import Grupo from '../../componentes/Grupo'
import Botao from '../../componentes/Botao'

export default class PessoaFisica extends Component {
    constructor(props) {
        super(props)

        this.state ={
            nome: {
                valor: '',
                erro: ''
            },
            email: {
                valor: '',
                erro: ''
            },
            cpf: {
                valor: '',
                erro: ''
            },
            dataNascimento: {
                valor: '',
                erro: ''
            },
            senha: {
                valor: '',
                erro: ''
            }
        }
    }

    handleChange = (nomeDoInput, valorDoInput, erro = '' ) => {
        console.log(erro)
        this.setState({
            [nomeDoInput]: {
                valor: valorDoInput,
                erro: erro,
            }
        })       
    }


    render() {
        console.log(this.state.nome.erro)
        return (
            <div>
                <h2>Cadastro Pessoa Fisica </h2>
                <form>
                    <Grupo erro={this.state.nome.erro}>
                        <Grupo.Legenda htmlFor={'nome'} > Nome Completo:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name={'name'}
                            placeholder={'Nome'}
                            type={'text'}
                            required={true}
                            minLength={10}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.cpf.erro}>
                        <Grupo.Legenda htmlFor={'cpf'} > CPF:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name={'cpf'}
                            placeholder={'000.000.000-00'}
                            type={'text'}
                            required={true}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.dataNascimento.erro}>
                        <Grupo.Legenda htmlFor={'nascimento'} > Data de nascimento:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name={'nascimento'}
                            placeholder={'dd/mm/aaaa'}
                            type={'text'}
                            required={true}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.email.erro}>
                        <Grupo.Legenda htmlFor={'email'} > Email:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name={'email'}
                            placeholder={'Email'}
                            type={'email'}
                            required={true}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.senha.erro}>
                        <Grupo.Legenda htmlFor={'senha'} > Senha:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name={'senha'}
                            placeholder={'Senha'}
                            type={'text'}
                            required={true}
                            minLength={8}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    
                    <Botao value={'final'} onClick={this.props.onClick} >Enviar</Botao>
                </form>
            </div>
        )
    }
    
}