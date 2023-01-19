export const getPokemonIconType = (type: string): string => {
  switch (type) {
    case 'normal':
      return '/icon-types/normal.svg';
    case 'fighting':
      return '/icon-types/fighting.svg';
    case 'flying':
      return '/icon-types/flying.svg';
    case 'poison':
      return '/icon-types/poison.svg';
    case 'ground':
      return '/icon-types/ground.svg';
    case 'rock':
      return '/icon-types/rock.svg';
    case 'bug':
      return '/icon-types/bug.svg';
    case 'ghost':
      return '/icon-types/ghost.svg';
    case 'fire':
      return '/icon-types/fire.svg';
    case 'water':
      return '/icon-types/water.svg';
    case 'grass':
      return '/icon-types/grass.svg';
    case 'electric':
      return '/icon-types/electric.svg';
    case 'psychic':
      return '/icon-types/psychic.svg';
    case 'ice':
      return '/icon-types/ice.svg';
    case 'dragon':
      return '/icon-types/dragon.svg';
    case 'fairy':
      return '/icon-types/fairy.svg';
    case 'dark':
      return '/icon-types/dark.svg';
    case 'steel':
      return '/icon-types/steel.svg';

    default:
      return '/icon-types/normal.svg';
  }
};
