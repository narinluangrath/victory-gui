import React from 'react'

import './Header.css'
import ChartIcon from '../icons/chart.svg'
import GithubIcon from '../icons/github.svg'
import InfoIcon from '../icons/info.svg'

const Dividor = ( { space } ) => {
	const margin = space == null ? 
								 `0px 10px 0px 10px` : 
								 `0px ${space}px 0px ${space}px`
	return (
		<div className='dividor' style={{margin}} />
	)
}

const Link = ( { children, href } ) => {
	return (
		<a className='link' href={href}> 
			{children}
		</a>
	)
}

const Header = ( props ) => {
	return (
		<div className='header'>
			<div className='left'> 
				<ChartIcon fill='white' />
				<Dividor space={15} />
				<p>Victory Chart Design Studio</p>
			</div>
			<div className='right'>
				<Link href='http://github.com'>
					<GithubIcon />
					<p>Source</p>
				</Link>
				<Link href='http://www.narinluangrath.com'>
					<InfoIcon />
					<p>About</p>
				</Link>
			</div>
		</div>
	)
}

export default Header