import React from 'react'

import Toggle from './Toggle.jsx'
import AnotherDropdown from '../container/AnotherDropdown.jsx'
import ColorPicker from './ColorPicker.jsx'
import CheckIcon from '../icons/check.svg'
import './Toggles.css'

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
	const { enableZoom, toggleZoom, interpolation, changeInterpolation, changeBackground, backgroundColor } = props

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
					<ColorPicker onChange={() => {}} value={'#123445'}/>
				</AnotherDropdown>
			</div>
			<div className='toggles-item'>
				<div style={{paddingLeft: '10px'}}><p>Enable Zoom</p></div>
				<Toggle checked={enableZoom} onChange={toggleZoom} />
			</div>
		</div>
	)
}

export default Toggles
