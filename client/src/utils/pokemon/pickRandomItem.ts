import axios from 'axios';

async function pickRandomItem( array: any[], n: number ) {
	const random = array.sort( () => 0.5 - Math.random() ).slice( 0, n );

	if ( random[0] === undefined ) {
		return random[0];
	}

	return await axios.get( random[0].item.url ).then( response => {
		return response.data;
	} )
		.catch( error => {
			return error;
		} );
}

export default pickRandomItem;
