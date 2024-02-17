import { useEffect } from 'react';
import { IRandomPokemonEncounter } from '../../@types/CustomPokemonTypes/Encounters/RandomEncounter.ts';

interface UsePokemonSpriteProps {
	pokemon: IRandomPokemonEncounter;
	attemptingCatch: boolean;
	setPlayingAudio: (playing: boolean) => void;
	setPlayingShinyAudio: (playing: boolean) => void;
}

const usePokemonSprite = (props: UsePokemonSpriteProps) => {
	const {
		pokemon,
		attemptingCatch,
		setPlayingAudio,
		setPlayingShinyAudio,
	} = props;
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
};

export default usePokemonSprite;
