import React from 'react'

import './Toggle.css'

// Credit: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch
function Toggle( props ) {
	const { checked, onChange } = props
	return (
		<label className="switch">
		  <input type="checkbox" onChange={onChange} checked={checked}/>
		  <span className="slider round"></span>
		</label>
	)
}

export default Toggle