import React, { Component } from 'react'
import Inicial from './inicial/Inicial'
import './cadastro.css'

export default class Cadastro extends Component {
	constructor(props) {
		super(props)
	}

	

	render() {
		return (
			<main>
				<section>
					<Inicial />
				</section>
			</main>
		)
	}

}