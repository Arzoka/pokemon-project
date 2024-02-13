import calculatePokemonCatch from './algorithms/calculatePokemonCatch.ts';
import { IRandomPokemonEncounter } from '../../@types/CustomPokemonTypes/Encounters/RandomEncounter.ts';
import { IReceivedPokeball } from '../../@types/CustomPokemonTypes/Pokeballs/IPokeball.ts';
import React from 'react';

function attemptCatch(
  encounter: IRandomPokemonEncounter,
  pokeball: IReceivedPokeball,
  setAttemptingCatch: React.Dispatch<React.SetStateAction<boolean>>,
  setCurrentEncounter: React.Dispatch<React.SetStateAction<boolean>>
) {
  const catchTime = Math.random() * 3000 + 1000;

  setAttemptingCatch(true);
  const caught = calculatePokemonCatch(encounter, pokeball);
  setTimeout(() => {
    setAttemptingCatch(false);
    encounter.caught = caught;
    if (caught) {
      alert('Succesfully caught ' + encounter.name + '!');
      setCurrentEncounter(false);
    }
  }, catchTime);

}

export default attemptCatch;
