import React, { Component } from 'react'
import cn from 'classnames'

import TriangleIcon from '../icons/triangle.svg'
import './AnotherDropdown.css'

class AnotherDropdown extends Component {
	constructor() {
		super()
		this.state = { open : false } 
		this.toggle = this.toggle.bind( this )
    this.closeMenu = this.closeMenu.bind( this );
	}

	toggle(event) {
    event.preventDefault();
		this.setState( prev => ({ open : !prev.open}), 
									() => document.addEventListener('click', this.closeMenu)
		)
	}

  closeMenu() {
    this.setState({ open: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

	render() {
		const { children, title } = this.props
		const { open } = this.state

		return (
			<div className='anotherDropdown'>
				<div className={cn('testing', 'header',{open})} onClick={this.toggle}>
					<p>{title}</p>
					<TriangleIcon />
				</div>
				{ open && 
				<div className='body'>
				{children}
				</div>
				}
			</div>
		)
	}
}

export default AnotherDropdown
