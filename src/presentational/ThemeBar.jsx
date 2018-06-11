import React from 'react'

import './ThemeBar.css'

function ThemeBarButton( props ) {
	const { name, onClick } = props
	return (
		<div className='themebarbutton' onClick={() => onClick(name)}>
			<p>{name}</p>
		</div>
	)
}

function ThemeBar( props ) {
	const { loadTheme } = props
	return (
		<div className='themebar'>
			<p>Load a prebuilt theme : </p>
			<ThemeBarButton name='Google' onClick={loadTheme}/>
			<ThemeBarButton name='Dark' onClick={loadTheme}/>
			<ThemeBarButton name='Beige' onClick={loadTheme}/>
			<ThemeBarButton name='Purple' onClick={loadTheme}/>									
		</div>
	)
}

export default ThemeBar
