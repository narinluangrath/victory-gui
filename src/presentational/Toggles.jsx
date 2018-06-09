import React from 'react'

import Toggle from './Toggle.jsx'
import AnotherDropdown from '../container/AnotherDropdown.jsx'
import CheckIcon from '../icons/check.svg'
import './Toggles.css'

function Item( props ) {
	const { selected, title, onClick } = props 
	return (
		<div className='another-menu-item' onClick={onClick}>
			<p>{title}</p>
			{ selected && <CheckIcon /> }
		</div>
	)
}

function Toggles( props ) {
	const { enableZoom, toggleZoom } = props
	return (
		<div className='toggles'>
			<div className='toggles-item'>
				<p>Enable Zoom</p>
				<Toggle checked={enableZoom} onChange={toggleZoom} />
			</div>
			<div className='toggles-item'>
				<AnotherDropdown title='Interpolation'>
					<Item title='Linear' selected/>
					<Item title='Natural' />
				</AnotherDropdown>
			</div>
		</div>
	)
}

export default Toggles
