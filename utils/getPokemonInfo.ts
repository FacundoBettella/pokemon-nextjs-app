import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';
import { getPokemonIconType } from './getPokemonIconType';

export const getPokemonInfo = async (nameOrId: string) => {

  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    const pokemonTypes = data.types.map(
      (types) => (types.type.url = getPokemonIconType(types.type.name))
    );

    return {
      id: data.id,
      name: data.name,
      principalImg: data.sprites.other?.dream_world.front_default,
      sprites: data.sprites,
      type: pokemonTypes,
      weight: data.weight,
    };
  } catch (error) {
    return null;
  }
};
