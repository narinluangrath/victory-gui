import React, { Component } from 'react'
import cn from 'classnames'

import MenuIcon from '../icons/menu.svg'
import DataSidebar from '../presentational/DataSidebar.jsx'
import './Data.css'

class Data extends Component {
	constructor() {
		super()
		this.state = { open : false }
		this.openSidebar = this.openSidebar.bind( this )
		this.closeSidebar = this.closeSidebar.bind( this )
    this.sidebar = React.createRef()		
	}

	openSidebar() {
		this.setState( prev => ({ open : !prev.open }), () => document.addEventListener( 'click', this.closeSidebar ) )
	}

	closeSidebar() {
		if ( !this.sidebar.current.contains( event.target ) ) {
			this.setState( { open : false }, () => document.removeEventListener( 'click', this.closeSidebar ) )
		}
	}

	render() {
		const { data } = this.props
		const { open } = this.state

		return (
			<div className='data'>
				<div className={cn('sidebar',{open})} ref={this.sidebar}>
					<div className='menu-icon' onClick={this.openSidebar}>
						<MenuIcon />
					</div>
					{ open && <DataSidebar data={data} /> }
				</div>
			</div>
		)
	}
}

export default Data
