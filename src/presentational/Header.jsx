import React from 'react'

import './Header.css'
import ChartIcon from '../icons/chart.svg'

const Dividor = ( props ) => {
	const { space } = props 
	const margin = space == null ? 
								 `0px 10px 0px 10px` : 
								 `0px ${space}px 0px ${space}px`
	return (
		<div style={{width: 0, height: '20px', margin, borderRight: '1px solid rgba(255, 255, 255, 0.3)'}} />
	)
}

const Header = ( props ) => {
	return (
		<div className='header'> 
			<ChartIcon fill='white' />
			<Dividor space={15} />
			<p>Victory Chart Design Studio</p>
		</div>
	)
}

export default Header