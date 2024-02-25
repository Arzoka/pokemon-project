import { FC } from 'react';
import objectToArray from '../../../../../utils/objectToArray.ts';

const PokemonStats: FC<{
	stats: {
		hp: number,
		atk: number,
		def: number,
		spA: number,
		spD: number,
		spd: number
	} | undefined
}> = ( { stats } ) => {
	const statsarray = stats ? objectToArray( stats ) : null;
	console.log( statsarray );
	return (
		<div style={ { width: '100%' } }>
			{ statsarray ? statsarray.map( ( key ) => (
				<div style={ {
					display: 'flex',
					background: '#ccc',
					color: 'black',
				} } key={ key }>
					<h3>{ key[0] }</h3>
					<p>{ key[1] }</p>
				</div> ) ) : null }
		</div> );
};

export default PokemonStats;
