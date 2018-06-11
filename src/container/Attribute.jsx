import React, { Component } from 'react'
import cn from 'classnames'

import './Attribute.css'

class Attribute extends Component {
	constructor() {
		super( )
		this.state = { open : false }
		this.openMenu = this.openMenu.bind( this )
    this.closeMenu = this.closeMenu.bind( this )
    this.dropdownMenu = React.createRef()
	}

	openMenu( event ) {
    event.preventDefault()
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
		const { name, value, children } = this.props
		const { open } = this.state
		return (
			<div className='attr'>
				<div className={cn('attr-header',{open})} onClick={this.openMenu}>
					<div className='attr-name'>{name}</div>
					<div className='attr-value'>{value}</div>
				</div>
				{ open && 
					<div className='attr-children' ref={this.dropdownMenu}>
						{children}
					</div>
				}
			</div>
		)
	}
}

export default Attribute
