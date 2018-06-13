import React from 'react'

import './ThemeBar.css'

function ThemeBarButton( props ) {
	const { name, onClick } = props
	return (
		<button className='themebarbutton' onClick={() => onClick(name)}>
			<p>{name}</p>
		</button>
	)
}

function ThemeBar( props ) {
	const { loadTheme } = props
	return (
		<div className='themebar'>
			<p>Try a prebuilt theme...</p>
			<div className='buttons'>
				<ThemeBarButton name='Google' onClick={loadTheme}/>
				<ThemeBarButton name='Dark' onClick={loadTheme}/>
				<ThemeBarButton name='Beige' onClick={loadTheme}/>
				<ThemeBarButton name='Purple' onClick={loadTheme}/>		
				<ThemeBarButton name='Space' onClick={loadTheme}/>		
				<ThemeBarButton name='Sandy' onClick={loadTheme}/>		
				<ThemeBarButton name='Earth' onClick={loadTheme}/>																										
			</div>
		</div>
	)
}

export default ThemeBar
