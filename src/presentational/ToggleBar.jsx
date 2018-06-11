import React from 'react'

import Toggle from './Toggle.jsx'
import AnotherDropdown from '../container/AnotherDropdown.jsx'
import ColorPicker from './ColorPicker.jsx'
import CheckIcon from '../icons/check.svg'
import './ToggleBar.css'

function Item( props ) {
	const { selected, title, onClick, id } = props 
	return (
		<div id={id} className='another-menu-item' onClick={onClick}>
			<p>{title}</p>
			{ selected && <CheckIcon /> }
		</div>
	)
}

const interpolationTypes = [
	"basis",
	"cardinal",
	"catmullRom",
	"linear",
	"monotoneX",
	"monotoneY",
	"natural",
	"step",
	"stepAfter",
	"stepBefore"
]

function Toggles( props ) {
	
	const { 
		enableZoom, 
		toggleZoom, 
		interpolation, 
		changeInterpolation, 
		changeBackground, 
		backgroundColor, 
		enableTooltips, 
		toggleTooltips, 
		enablePoints,
		togglePoints, } = props

	return (
		<div className='toggles'>
			<div className='toggles-item'>
				<AnotherDropdown title='Interpolation'>
					{	interpolationTypes.map( name => (
						<Item 
							key={name}
							id={name}
							title={name} 
							selected={interpolation===name} 
							onClick={() => changeInterpolation(name)} 
						/>
					))}
				</AnotherDropdown>
			</div>
			<div className='toggles-item'>
				<AnotherDropdown title='Background Color'>
					<ColorPicker onChange={changeBackground} value={backgroundColor}/>
				</AnotherDropdown>
			</div>
			<div className='toggles-item'>
				<div style={{paddingLeft: '10px'}}><p>Enable Zoom</p></div>
				<Toggle checked={enableZoom} onChange={toggleZoom} />
			</div>
			<div className='toggles-item'>
				<div style={{paddingLeft: '10px'}}><p>Enable Tooltips</p></div>
				<Toggle checked={enableTooltips} onChange={toggleTooltips} />
			</div>		
			<div className='toggles-item'>
				<div style={{paddingLeft: '10px'}}><p>Enable Points</p></div>
				<Toggle checked={enablePoints} onChange={togglePoints} />
			</div>						
		</div>
	)
}

export default Toggles
