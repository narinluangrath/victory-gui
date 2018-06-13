import React from 'react'

import './Modal.css'
import CloseIcon from '../icons/x.svg'

function Modal( props ) {
	const { children, show, onClose } = props
	if ( !show ) {
		return null
	}

	return (
		<div className='modal'>
			<div className='modal-content'>
				<button className='close-icon' onClick={onClose}>
					<CloseIcon />
				</button>
				{ children }
			</div>
		</div>
	)
}

export default Modal
