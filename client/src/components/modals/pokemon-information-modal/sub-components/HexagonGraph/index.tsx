import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { FC } from 'react';
import { IEVs } from '../../../../../@types/CustomPokemonTypes/stats/EVs.ts';
import { IIVs } from '../../../../../@types/CustomPokemonTypes/stats/IVs.ts';
import objectToArray from '../../../../../utils/objectToArray.ts';

function formatDataForChart( EVs: IEVs | undefined, IVs: IIVs | undefined ) {
	if ( !EVs || !IVs ) {
		return [];
	}

	const EVsArray = objectToArray( EVs );
	const IVsArray = objectToArray( IVs );

	return EVsArray.map( ( [key, value] ) => {
		return {
			stat: key,
			EV: value,
			IV: IVsArray.find( ( [ivKey] ) => ivKey === key )?.[1],
			max: 255,
		};
	} );
}

const HexagonGraph: FC<{
	EVs: IEVs | undefined,
	IVs: IIVs | undefined,
}> = ( {
	EVs,
	IVs,
} ) => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart cx="50%" cy="50%" outerRadius="80%" data={ formatDataForChart( EVs, IVs ) }>
				<PolarGrid style={ { fill: '#ffffff50' } } enableBackground={ 'show' } stroke={ '#00000040' } />
				<PolarRadiusAxis domain={ [0, 255] } visibility={ 'hidden' } />
				<PolarAngleAxis dataKey="stat" />
				<Radar name="EVs" dataKey="EV" fill="#64e890" color={ '#000' } fillOpacity={ 0.8 } />
				<Radar max={ 31 } name="IVs" dataKey="IV" fill="#73ffff" fillOpacity={ 0.8 } />
			</RadarChart>
		</ResponsiveContainer> );
};

export default HexagonGraph;
