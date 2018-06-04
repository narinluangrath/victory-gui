import React, { Component } from 'react'

class DropDown extends Component {
	constructor() {
		super()
		this.state = { isOpen : true }
		this.toggle = this.toggle.bind( this )
	}

	toggle() {
		this.setState( prevState => ({ isOpen : !prevState.isOpen}) )
	}

	render() {
		const { title, children } = this.props
		return (
			<div className='dropdown'>
				<div className='dropdownHeader' onClick={this.toggle}>
					<h2>{title}</h2>
				</div>
				{ this.state.isOpen &&  
					<div className='dropdownChildren'>
						{ children }
					</div> }
			</div>
		)
	}
}

export default DropDown
