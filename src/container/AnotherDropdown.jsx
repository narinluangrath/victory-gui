import React, { Component } from 'react'
import cn from 'classnames'

import TriangleIcon from '../icons/triangle.svg'
import './AnotherDropdown.css'

class AnotherDropdown extends Component {
	constructor() {
		super()
		this.state = { open : false } 
		this.openMenu = this.openMenu.bind( this )
    this.closeMenu = this.closeMenu.bind( this )
    this.dropdownMenu = React.createRef()
	}

	openMenu( event ) {
    event.preventDefault();
		this.setState( prev => ({ open : true }), 
									() => document.addEventListener('click', this.closeMenu)
		)
	}

  closeMenu( event ) {
  	event.preventDefault()
  	if ( !this.dropdownMenu.current.contains( event.target ) ) {
	    this.setState({ open : false }, () => {
	      document.removeEventListener('click', this.closeMenu);
	    })
	  }
  }

	render() {
		const { children, title } = this.props
		const { open } = this.state

		return (
			<div className='anotherDropdown'>
				<div className={cn('header', {open})} onClick={this.openMenu}>
					<p>{title}</p>
					<TriangleIcon />
				</div>
				{ open && 
					<div 
						className='body'       
						ref={this.dropdownMenu}
					>
						{children}
					</div>
				}
			</div>
		)
	}
}

export default AnotherDropdown
