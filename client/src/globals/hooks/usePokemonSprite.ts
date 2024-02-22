import { useContext, useEffect } from 'react';
import { EncounterContext } from '../contexts/EncounterContext.tsx';

interface UsePokemonSpriteProps {
	setPlayingAudio: (playing: boolean) => void;
	setPlayingShinyAudio: (playing: boolean) => void;
}

const usePokemonSprite = (props: UsePokemonSpriteProps) => {
	const {
		Encounter: pokemon,
		attemptingCatch,
	} = useContext(EncounterContext);
	const {
		setPlayingAudio,
		setPlayingShinyAudio,
	} = props;

	useEffect(() => {
		if (pokemon?.cry && !pokemon?.caught && !attemptingCatch) {
			const audio = new Audio(pokemon?.cry);
			audio.addEventListener('ended', () => {
				setPlayingAudio(false);
				if (pokemon?.shiny) {
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
