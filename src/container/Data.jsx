import React, { Component } from 'react'
import cn from 'classnames'

import Modal from '../presentational/Modal.jsx'
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
	constructor() {
		super() 
		this.state = { showModal : false, modalText : '' }
		this.openModal = this.openModal.bind( this )
		this.closeModal = this.closeModal.bind( this )
		this.onChangeHandler = this.onChangeHandler.bind( this )
		this.submitHandler = this.submitHandler.bind( this )
	}

	openModal() {
		this.setState( { showModal : true } )
	}

	closeModal() {
		this.setState( { showModal : false } )
	}

	onChangeHandler( event ) {
		event.preventDefault()
		const text = event.target.value 
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
			this.closeModal
		} else {
			console.error( 'invalid json' )
		}
	}

	render() {
		const { data, changeData } = this.props
		const { showModal, modalText } = this.state
		return (
			<div className='data'>
				<Modal show={showModal} onClose={this.closeModal}>
					<textarea 
						placeholder='Input JSON with shape [ { "x" : <num>, "y" : <num> } ... ]' 
						value={modalText} 
						onChange={this.onChangeHandler} 
					/>
					<button onClick={() => this.submitHandler( changeData )} />
				</Modal>
				<h2>Data Editor</h2>
				<div className='datum title'>
					<div className='x'>X</div>
					<div className='y'>Y</div>
				</div>
				{ data.map( (d, i) => <Datum x={d.x} y={d.y} key={d.x} isOdd={i%2===0} /> ).slice( 0, 10 ) }
				{ data.length > 10 && <p>{`... and ${data.length - 10} more items`}</p>}
				<div className='modal-button' onClick={this.openModal}>
					<p>Load JSON</p>
				</div>
			</div>
		)
	}
}

export default Data
