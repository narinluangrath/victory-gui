import React from 'react'

import './Menu.css'
import CheckIcon from '../icons/check.svg'

function MenuItem( props ) {
	const { name, selected } = props
	return (
		<div className='menu-item'>
			<p>{name}</p>
			{selected && <CheckIcon />}
		</div>
	)
}

function Menu( props ) {
	const { items } = props
	return (
		<div className='menu'>
			{items.map( item => <MenuItem name={item} selected={true} />)}
		</div>
	)
}

export default Menu
