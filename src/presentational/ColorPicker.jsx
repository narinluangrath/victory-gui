import React from 'react'
import cn from 'classnames'

import TransparentIcon from '../icons/transparent.svg'
import './ColorPicker.css'

function Color( { color, onClick, selected } ) {
	return (
		<div 
			onClick={onClick}
			className={cn('color',{selected})} 
			style={{backgroundColor: color}} 
		/>
	)
}

function ColorPicker( props ) {

	const { value='#', onChange } = props

	const template = [
		'#ff0000', '#ff4000', '#ff8000',
		'#ffbf00', '#ffff00', '#bfff00',
		'#80ff00', '#40ff00', '#00ff00',
		'#00ff40', '#00ff80', '#00ffbf', 
		'#00ffff', '#00bfff', '#0080ff',
		'#0040ff', '#0000ff', '#4000ff',
		'#8000ff', '#bf00ff', '#ff00ff',
		'#ff00bf', '#ff0080', '#ff0040',
		'#000000', '#404040', '#FFFFFF',
	]

	function handleInputChange( event ) {
		const text = (event.target.value).trim().replace( '#', '' )
		if ( text.length <= 6) {
			onChange( `#${text}` )
		}
	}

	return (
		<div className='colorPicker'>
			<div className='colors'>
				{ template.map(color => ( 
						<Color 
							key={color} 
							selected={value===color} 
							color={color} 
							onClick={() => onChange(color)}
						/> )
				) }
				<div className={cn('transparent color', {selected:value==='transparent'})} onClick={() => onChange('transparent')}>
					<TransparentIcon />
				</div>
			</div>
			<div className='hex'>
				<div className='hashtag'>#</div>
				<input value={value.split('#')[1] || ''} onChange={handleInputChange}/>
			</div>		
		</div>
	)
}

export default ColorPicker