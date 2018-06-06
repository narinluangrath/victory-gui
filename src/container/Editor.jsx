import React, { Component } from 'react'

import Selectable from '../presentational/Selectable.jsx'
import Theme from '../presentational/Theme.jsx'
import Data from '../presentational/Data.jsx'
import './Editor.css'

class Editor extends Component {
	constructor() {
		super()
	}
	
	render() {
		const { theme, data, chart, changeTheme, changeData, changeChart } = this.props
		return (
			<div className='editor'>
				<Theme theme={theme} changeTheme={changeTheme}/>
{/*
				<Data data={data} chart={chart} changeData={changeData} changeChart={changeChart}/>
*/}
			</div>
		)
	}
}

export default Editor