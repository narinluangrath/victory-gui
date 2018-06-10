import React, { Component } from 'react'
import cn from 'classnames'

import ArrowIcon from '../icons/arrow.svg'
import './Dropdown.css'

class Dropdown extends Component {
	constructor() {
		super()
		this.state = { open : true }
		this.toggle = this.toggle.bind( this )
	}

	toggle() {
		this.setState( prevState => ({ open : !prevState.open}) )
	}

	render() {
		const { title, children } = this.props
		const { open } = this.state
		return (
			<div className={cn('dd',{open})}>
				<div className='dd-header' onClick={this.toggle}>
					<ArrowIcon />
					<h2>{title}</h2>
				</div>
				<div className='dd-children'>
					{children}
				</div>
			</div>
		)
	}
}

export default Dropdown
