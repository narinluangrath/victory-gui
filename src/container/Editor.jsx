import React, { Component } from 'react'

import Selectable from '../presentational/Selectable.jsx'

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
		const index = this.state.selected === DATA ? 0 : 1
		return (
			<div className='editor'>
				<Selectable 
					fields={[DATA, THEME]} 
					selectedIndex={index} 
					changeSelected={this.changeSelected}
				/>
			</div>
		)
	}
}

export default Editor