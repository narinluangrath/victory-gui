import React, { Component, Fragment } from 'react'

import Header from '../presentational/Header.jsx'
import DesignView from './DesignView.jsx'
import CodeView from '../presentational/CodeView.jsx'
import './App.css'

// constants for state variables
const DESIGN = 'DESIGN'
const CODE = 'CODE'

class App extends Component {

	constructor( props ) {
		super( props )
		this.state = { 
			view : DESIGN 
		}
	}

	switchView() {
		this.setState( prevState => {
			const newView = prevState.view === DESIGN ? CODE : DESIGN
			return { view : newView }
		})
	}

	render() {
		return (
			<div className='appContainer'>
				<Header />
{/*				<div className='main'>
					{ this.state.view === DESIGN ? 
		 				<DesignView /> : <CodeView />
					}
				</div>
*/}
			</div>
		)
	}
}

export default App