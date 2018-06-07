import React from 'react'

import './ColorPicker.css'

function ColorBox( { color, onClick } ) {
	return (
		<div 
			onClick={onClick}
			className='box' 
			style={{backgroundColor: color}} 
		/>
	)
}

function ColorPicker( props ) {

	const basicColors = [
		'#ff0000',
		'#ff4000',
		'#ff8000',
		'#ffbf00',
		'#ffff00',
		'#bfff00',
		'#80ff00',
		'#40ff00',
		'#00ff00',
		'#00ff40',
		'#00ff80',
		'#00ffbf',
		'#00ffff',
		'#00bfff',
		'#0080ff',
		'#0040ff',
		'#0000ff',
		'#4000ff',
		'#8000ff',
		'#bf00ff',
		'#ff00ff',
		'#ff00bf',
		'#ff0080',
		'#ff0040',
		'#ff0000'
	]

	return (
		<div className='colorPicker'>
			{basicColors.map(color => <ColorBox color={color}/>)}
			<div className='hex'><div className='hashtag'>#</div><input /></div>		
		</div>
	)
}

export default ColorPicker