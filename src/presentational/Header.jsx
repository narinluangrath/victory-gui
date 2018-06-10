import React from 'react'

import './Header.css'
import ChartIcon from '../icons/chart.svg'
import GithubIcon from '../icons/github.svg'
import InfoIcon from '../icons/info.svg'

const Divider = ( { space } ) => {
	const margin = space == null ? 
								 `0px 10px 0px 10px` : 
								 `0px ${space}px 0px ${space}px`
	return (
		<div className='divider' style={{margin}} />
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
				<Divider space={15} />
				<h1>Victory Chart Design Studio</h1>
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