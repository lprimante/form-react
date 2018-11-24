import React, { Component } from 'react'
import Grupo from '../../componentes/Grupo'
import Botao from '../../componentes/Botao'

export default class PessoaJuridica extends Component {
    constructor(props) {
        super(props)

        this.state ={
            razaoSocial: {
                valor: '',
                erro: ''
            },
            email: {
                valor: '',
                erro: ''
            },
            cnpj: {
                valor: '',
                erro: ''
            },
            cep: {
                valor: '',
                erro: ''
            },
            senha: {
                valor: '',
                erro: ''
            }  
        }
    }


    render() {
        return (
            <div>
                <h2>Cadastro Pessoa Juridica</h2>
                <form>
                    <Grupo erro={this.state.razaoSocial.erro}>
                        <Grupo.Legenda htmlFor={'razao-social'} > Razão Social:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name={'razao-social'}
                            placeholder={'Razão Social'}
                            type={'text'}
                            required={true}
                            minLength={10}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.cnpj.erro}>
                        <Grupo.Legenda htmlFor={'cnpj'} > CNPJ:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name={'cnpj'}
                            placeholder={'CNPJ'}
                            type={'text'}
                            required={true}
                            minLength={10}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.cep.erro}>
                        <Grupo.Legenda htmlFor={'cep'} > CEP:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name={'cep'}
                            placeholder={'000'}
                            type={'text'}
                            required={true}
                            minLength={10}
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.email.erro}>
                        <Grupo.Legenda htmlFor={'email'} > Email:</Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            name={'email'}
                            placeholder={'Email'}
                            type={'text'}
                            required={true}
                            minLength={10}
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