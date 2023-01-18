import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import FavoritesPokemons from '../../components/pokemon/FavoritesPokemons';

import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setFavorites(localFavorites.pokemons());
  }, [])

  return (
    <Layout title='Favs - Pokemons'>
      {
        favorites.length > 0
          ? <FavoritesPokemons pokemons={favorites} />
          : <NoFavorites />
      }
    </Layout>
  )
}

export default FavoritesPage;