export default function set( obj, keys, value ) {
	try {
		let pointer = obj
		const keysArr = keys.split( '.' )
		keysArr.forEach( ( key, i ) => {
			if ( i === keysArr.length - 1 ) {
				pointer[ key ] = value
			} else {
				if ( pointer[ key ] == null ) {
					pointer[ key ] = {}
				}
				pointer = pointer[ key ]
			}
		})
	} catch ( e ) {
		console.error( 'err with set util', e )
	}
}
