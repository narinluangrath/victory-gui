import React from 'react'
import classNames from 'classnames'

import './Selectable.css'

function Item( props ) {
	const { field, selected, changeSelected } = props
	const name = classNames( 'item', { selected } ) 
	return ( 
		<button type='button' className={name} onClick={() => changeSelected(field)}>
			{field}
		</button>
	) 
}

function Selectable( props ) {
	const { fields, selectedIndex, changeSelected } = props
	const helper = (fld, i) => (
		<Item
			key={fld} 
			changeSelected={changeSelected} 
			field={fld} 
			selected={i==selectedIndex} 
		/>
	)

	return (
		<div className='selectable'>
			{ fields.map( helper ) }
		</div>
	)
}

export default Selectable