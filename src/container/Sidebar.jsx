import React, { Component } from 'react'
import cn from 'classnames'

import Settings from '../presentational/Settings.jsx'
import Data from './Data.jsx'
import SettingsIcon from '../icons/settings.svg'
import DataIcon from '../icons/data.svg'
import './Sidebar.css'

class Sidebar extends Component {
	constructor() {
		super()
		this.state = { open : false, selected : undefined }
		this.openSidebar = this.openSidebar.bind( this )
		this.closeSidebar = this.closeSidebar.bind( this )
    this.setSelected = this.setSelected.bind( this )	
    this.sidebar = React.createRef()	
	}

	openSidebar() {
		this.setState( prev => ({ open : true }), () => document.addEventListener( 'click', this.closeSidebar ) )
	}

	closeSidebar() {
		if ( !this.sidebar.current.contains( event.target ) ) {
			this.setState( { open : false , selected : undefined }, () => document.removeEventListener( 'click', this.closeSidebar ) )
		}
	}

	setSelected( name ) {
		this.setState( { selected : name } )
	}

	render() {
		const { data, changeData, enableZoom, toggleZoom, enableTooltips, toggleTooltips, enablePoints, togglePoints } = this.props
		const { open, selected } = this.state

		const settingsProps = {
			enableZoom, 
			toggleZoom, 
			enableTooltips, 
			toggleTooltips, 
			enablePoints, 
			togglePoints 
		}

		const renderContent = selected === 'Settings' ? <Settings { ...settingsProps } /> : 
													selected === 'Data' ? <Data data={data} changeData={changeData} /> :
													null

		return (
			<div className='sidebar-placeholder'>
				<div className={cn('sidebar',{open})} ref={this.sidebar}>
					<div className='icons'>
						<div className={cn('icon',{active: selected==='Settings'})} onClick={() => {this.openSidebar(); this.setSelected('Settings')}}>
							<SettingsIcon />
							<p>Settings</p>
						</div>
						<div className={cn('icon',{active: selected==='Data'})} onClick={() => {this.openSidebar(); this.setSelected('Data')}}>
							<DataIcon />
							<p>Data</p>
						</div>											
					</div>
					{ open && 
					<div className='content'>
						{ renderContent }
					</div>
					}
				</div>
			</div>
		)
	}
}

export default Sidebar
