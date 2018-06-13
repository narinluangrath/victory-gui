import React from 'react'

import './Settings.css'
import Toggle from './Toggle.jsx'

function Settings( props ) {

	const { enableZoom, toggleZoom, enableTooltips, toggleTooltips, enablePoints, togglePoints } = props 

	return (
		<div className='settings'>
			<h2>Settings</h2>
			<div className='toggle-container'>
				<div><p>Enable Zoom</p></div>
				<Toggle checked={enableZoom} onChange={toggleZoom} />
			</div>
			<div className='toggle-container'>
				<div><p>Enable Tooltips</p></div>
				<Toggle checked={enableTooltips} onChange={toggleTooltips} />
			</div>		
			<div className='toggle-container'>
				<div><p>Show Points</p></div>
				<Toggle checked={enablePoints} onChange={togglePoints} />
			</div>	
		</div>
	)
}

export default Settings
