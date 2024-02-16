import { IRandomPokemonEncounter } from '../../@types/CustomPokemonTypes/Encounters/RandomEncounter';
import { useEffect, useState } from 'react';
import { IReceivedPokeball } from '../../@types/CustomPokemonTypes/Pokeballs/IPokeball.ts';

const PokemonSprite = ({
	pokemon,
	attemptingCatch,
	pokeball,
}: {
	pokemon: IRandomPokemonEncounter
	attemptingCatch: boolean
	pokeball: IReceivedPokeball | null
}) => {
	const [playingAudio, setPlayingAudio] = useState(false);
	const [playingShinyAudio, setPlayingShinyAudio] = useState(false);
	useEffect(() => {
		if (pokemon.cry && !pokemon.caught && !attemptingCatch) {
			const audio = new Audio(pokemon.cry);
			audio.addEventListener('ended', () => {
				setPlayingAudio(false);
				if (pokemon.shiny) {
					const shinyAudio = new Audio('resources/pokemon/ShinySparkleSound.ogg');
					shinyAudio.addEventListener('ended', () => {
						setPlayingShinyAudio(false);
					});
					shinyAudio.play()
						.then(() => {
							setPlayingShinyAudio(true);
						}, (err) => console.log('Error playing audio:', err));
				}
			});
			audio.play()
				.then(() => {
					setPlayingAudio(true);
				}, (err) => console.log('Error playing audio:', err));
		}
	}, []);


	if (pokemon.caught) {
		return null;
	}

	return (
		<div
			style={ {
				position: 'relative',
				width: '5em',
				aspectRatio: 1 / 1,
			} }
		>
			{ playingShinyAudio ? (
				<img
					style={ {
						position: 'absolute',
						inset: 0,
						width: '100%',
						objectFit: 'contain',
						translate: `0 ${ playingAudio ? '-5%' : '0' }`,
						transition: 'translate 0.05s ease-in-out',
					} }
					src={ 'resources/pokemon/ShinySparkleAnimation.gif' }
					alt={ 'Shiny sparkle' }
				/>
			) : null }
			{ attemptingCatch && pokeball ? (
				<img
					style={ {
						position: 'absolute',
						inset: 0,
						width: '100%',
						objectFit: 'contain',
						translate: `0 ${ playingAudio ? '-5%' : '0' }`,
						transition: 'translate 0.05s ease-in-out',
					} }
					src={ pokeball.sprite }
					alt={ `sprite showing catch attempt on ${ pokemon.name } using ${ pokeball.name }` }
				/>
			) : (
				<img
					style={ {
						position: 'absolute',
						inset: 0,
						width: '100%',
						objectFit: 'contain',
						translate: `0 ${ playingAudio ? '-5%' : '0' }`,
						transition: 'translate 0.05s ease-in-out',
					} }
					src={ pokemon.shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default }
					alt={ pokemon.name }
				/>
			) }
			{ pokemon.held_item && !attemptingCatch ? (
				<img
					style={ {
						position: 'absolute',
						width: '50%',
						bottom: 0,
						right: 0,
					} }
					src={ pokemon.held_item?.sprites?.default }
					alt={ pokemon.held_item.name }
				/>
			) : null }
		</div>
	);
};

export default PokemonSprite;
