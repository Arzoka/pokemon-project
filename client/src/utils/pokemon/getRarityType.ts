import axios from 'axios';

async function getRarityType( speciesURL: string ) {
	return await axios.get( speciesURL )
		.then( ( response ) => {
			if ( response.data.is_legendary ) {
				return 'legendary';
			}
			if ( response.data.is_mythical ) {
				return 'mythical';
			}
			if ( response.data.is_baby ) {
				return 'baby';
			}

			return 'regular';
		} )
		.catch( error => {
			return error;
		} );
}

export default getRarityType;
