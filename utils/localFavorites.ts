/* eslint-disable import/no-anonymous-default-export */

const toggleFavorite = (id: number) => {
  console.log('toggleFavorite llamado');

  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  /* Para que no intente ejecutar window.localStorage en el lado del servidor (node) */
  if (typeof window === 'undefined') return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default { toggleFavorite, existInFavorites, pokemons };
