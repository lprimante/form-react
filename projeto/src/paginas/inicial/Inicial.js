import React, { Component } from 'react'
import Logo from '../../componentes/logo/Logo'
import IconeTipoPessoa from '../../componentes/iconeTipoPessoa/IconeTipoPessoa'

import './inicial.css'

export default function Inicial(props) {
	return (
		<div className='pag-inicial'>
			<Logo className='pag-inicial__logo' />
			<h1 className='pag-inicial__titulo'>Você ainda não possue uma conta? Cadastre-se!</h1>
			<div className='tipo-pessoa'>
				<IconeTipoPessoa className={'tipo-pessoa__icone-pf'} icone={'astronaut'}>
					<p className='tipo-pessoa__texto'>Pessoa Física</p>
				</IconeTipoPessoa>
				<IconeTipoPessoa className={'tipo-pessoa__icone-pj'} icone={'globe'}>
					<p className='tipo-pessoa__texto'>Pessoa Jurídica</p>
				</IconeTipoPessoa>
			</div>
		</div>
	)
}
