import React, { Component } from 'react'

import Chart from '../presentational/Chart.jsx'
import Editor from './Editor.jsx'
import './DesignView.css'

class DesignView extends Component {
	constructor() {
		super()
		this.state = {}
	}

	render () {
		return (
			<div className='designViewContainer'>
				<div className='chartContainer'>
					<Chart />
				</div>
				<div className='editorContainer'>
					<Editor />
				</div>
			</div>
		)
	}
} 

export default DesignView