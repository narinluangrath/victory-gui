import React from 'react'

import './Menu.css'
import CheckIcon from '../icons/check.svg'

function MenuItem( props ) {
	const { name, selected, onChange } = props
	return (
		<div onClick={() => onChange(name)} className='menu-item'>
			<p>{name}</p>
			{selected && <CheckIcon />}
		</div>
	)
}

function Menu( props ) {
	const { items, selected, onChange } = props
	return (
		<div className='menu'>
			{items.map( item => <MenuItem name={item} onChange={onChange} selected={item===selected} />)}
		</div>
	)
}

export default Menu
