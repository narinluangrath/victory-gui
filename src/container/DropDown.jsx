import React, { Component } from 'react'
import cn from 'classnames'

import ArrowIcon from '../icons/arrow.svg'
import './Dropdown.css'

class DropDown extends Component {
	constructor() {
		super()
		this.state = { open : true }
		this.toggle = this.toggle.bind( this )
	}

	toggle() {
		this.setState( prevState => ({ open : !prevState.open}) )
	}

	render() {
		const { title, children, childrenHeight } = this.props
		const { open } = this.state
		const height = open ? `${childrenHeight*(children.length)}px` : '0px'
		return (
			<div className={cn('dd',{open})}>
				<div className='dd-header' onClick={this.toggle}>
					<ArrowIcon />
					{title}
				</div>
				<div className='dd-children'>
					{children}
				</div>
			</div>
		)
	}
}

export default DropDown
