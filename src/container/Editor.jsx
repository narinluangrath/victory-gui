import React, { Component } from 'react'

import Selectable from '../presentational/Selectable.jsx'
import Theme from '../presentational/Theme.jsx'
import Data from '../presentational/Data.jsx'
import './Editor.css'

const DATA = 'Data'
const THEME = 'Theme'

class Editor extends Component {
	constructor() {
		super()
		this.state = { selected : THEME }
		this.changeSelected = this.changeSelected.bind( this )
	}

	changeSelected( newSelected ) {
		this.setState( { selected : newSelected } )
	}
	
	render() {
		const { theme, data, chart, changeTheme, changeData, changeChart } = this.props
		const index = this.state.selected === DATA ? 0 : 1
		return (
			<div className='editor'>
				<Selectable 
					fields={[DATA, THEME]} 
					selectedIndex={index} 
					changeSelected={this.changeSelected}
				/>
				{ this.state.selected === THEME ? 
					<Theme theme={theme} changeTheme={changeTheme}/> : 
					<Data data={data} chart={chart} changeData={changeData} changeChart={changeChart}/>}
			</div>
		)
	}
}

export default Editor