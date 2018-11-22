import React, { Component } from 'react'
import astronaut from './user-astronaut.png'
import globe from './globe.png'

export default class IconeTipoPessoa extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		
		const iconeSrc = this.props.icone === 'globe' ? globe : astronaut

		return (
			<a className={this.props.className}>
				<img src={iconeSrc} className='tipo-pessoa__imagem' />
				{this.props.children}
			</a>
		)
	}
}