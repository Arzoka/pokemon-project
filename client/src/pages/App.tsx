import { useState, useEffect } from 'react';
import getRandomEncounter from '../helpers/pokemon/getRandomEncounter';
import { IRandomPokemonEncounter } from '../@types/CustomPokemonTypes/Encounters/RandomEncounter';
import PokemonSprite from '../components/pokemon-sprite/index.tsx';
import getPokeballs from '../helpers/pokeballs/getPokeballs.ts';
import { IReceivedPokeball } from '../@types/CustomPokemonTypes/Pokeballs/IPokeball.ts';
import PokeballSelector from '../components/pokeball-selector/index.tsx';

function App() {
  const [encounter, setEncounter] = useState<IRandomPokemonEncounter | null>(null);
  const [pokeballs, setPokeballs] = useState<IReceivedPokeball[]>([]);
  const [currentPokeball, setCurrentPokeball] = useState<IReceivedPokeball | null>(null);
  const [attemptingCatch, setAttemptingCatch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(encounter);
  }, [encounter]);

  useEffect(() => {
    (async () => {
      const pokeballs = await getPokeballs();
      if (pokeballs) {
        setPokeballs(pokeballs);
        setCurrentPokeball(pokeballs[0]);
      }
    })();
  }, []);


  if (loading) {
    return (<h1>Loading...</h1>);
  }

  return (
    <>
      { encounter ? (
        <PokemonSprite
          pokemon={ encounter }
          attemptingCatch={ attemptingCatch }
          pokeball={ currentPokeball }
        />
      ) : null }

      <button onClick={
        async () => {
          const randomEncounter = await getRandomEncounter(setLoading);
          if (randomEncounter) {
            setEncounter(randomEncounter);
          }
        } }>
        Get random encounter
      </button>
      {
        pokeballs && encounter ? (
          <PokeballSelector pokeballs={ pokeballs }
            currentPokeball={ currentPokeball }
            setCurrentPokeball={ setCurrentPokeball }
            attemptingCatch={ attemptingCatch }
            setAttemptingCatch={ setAttemptingCatch }
            encounter={ encounter }
          />
        ) : null
      }
      <button onClick={() => {
      console.log(encounter)
      }}>
        Log encounter
      </button>
    </>
  );
}

export default App;
