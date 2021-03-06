import React, { Component } from 'react'
import cn from 'classnames'
import AceEditor from 'react-ace'
import brace from 'brace'
import 'brace/mode/json'
import 'brace/theme/monokai'

import Modal from '../presentational/Modal.jsx'
import Toggle from '../presentational/Toggle.jsx'
import './Data.css'


function Datum( props ) {
	const { x, y, isOdd } = props
	return (
		<div className={cn('datum',{isOdd})}>
			<div className='x'>{x}</div>
			<div className='y'>{y}</div>
		</div>
	)
}

class Data extends Component {
	constructor( props ) {
		super( props ) 
		this.state = { 
			showModal : false, 
			modalText : JSON.stringify( this.props.data, null, 2 ),
			validationText : '',
		}
		this.openModal = this.openModal.bind( this )
		this.closeModal = this.closeModal.bind( this )
		this.onChangeHandler = this.onChangeHandler.bind( this )
		this.submitHandler = this.submitHandler.bind( this )
	}

	componentWillReceiveProps( props ) {
		this.setState( { modalText : JSON.stringify( props.data, null, 2 ) } )
	}

	openModal() {
		this.setState( { showModal : true } )
	}

	closeModal() {
		this.setState( { showModal : false } )
	}

	onChangeHandler( text ) {
		this.setState( { modalText : text } )
	}

	validateJson( text ) {
		try {
			const json = JSON.parse( text )
			return json
		} catch (e) {
			return false
		}
	}

	submitHandler( changeData ) {
		const json = this.validateJson( this.state.modalText )
		if ( json ) {
			changeData( json )
			this.setState( { validationText : 'Save successful' }, () => setTimeout( () => this.setState( { validationText : '' } ), 3000 ) )
			this.closeModal
		} else {
			this.setState( { validationText : 'Invalid JSON' } )
		}
	}

	render() {
		const { data, changeData, isTimeseries, toggleTimeseries } = this.props
		const { showModal, modalText, validationText } = this.state
		return (
			<div className='data'>

				<Modal show={showModal} onClose={this.closeModal}>
			    <AceEditor
			      mode="json"
			      theme="monokai"
			      name="ace-editor"
			      value={modalText}
			      onChange={this.onChangeHandler}
			      showPrintMargin={false}
	          editorProps={{$blockScrolling: true}}
			    />
					<div className='footer-modal'>
						<p>{validationText}</p>
						<button className='button-modal' onClick={() => this.submitHandler( changeData )}> 
							<p>Save Data</p>
						</button>
					</div>
				</Modal>

				<h2>Data Editor</h2>
				<div className='toggle-container'>
					<div><p>Timeseries</p></div>
					<Toggle checked={isTimeseries} onChange={toggleTimeseries} />
				</div>			
				<div className='datum title'>
					<div className='x'>X</div>
					<div className='y'>Y</div>
				</div>
				{ data.map( (d, i) => <Datum x={isTimeseries ? (new Date(d.x)).toLocaleDateString() : d.x} y={d.y} key={d.x} isOdd={i%2===0} /> ).slice( 0, 10 ) }
				{ data.length > 10 && <p>{`... and ${data.length - 10} more items`}</p>}
				<div className='button' onClick={this.openModal}>
					<p>Edit JSON</p>
				</div>
			</div>
		)
	}
}

export default Data
