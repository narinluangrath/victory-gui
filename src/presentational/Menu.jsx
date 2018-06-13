import React from 'react'

import './Menu.css'
import CheckIcon from '../icons/check.svg'

function MenuItem( props ) {
	const { name, selected, onChange, append } = props
	return (
		<div onClick={() => onChange(name)} className='menu-item'>
			<p>{append == undefined ? name : String(name) + append}</p>
			{selected && <CheckIcon />}
		</div>
	)
}

function Menu( props ) {
	const { items, selected, onChange, append } = props
	return (
		<div className='menu'>
			{ items.map( item => (
					<MenuItem 
						append={append}
						key={item} 
						name={item} 
						onChange={onChange} 
						selected={item===selected} 
					/> )
				)
			}
		</div>
	)
}

export default Menu
