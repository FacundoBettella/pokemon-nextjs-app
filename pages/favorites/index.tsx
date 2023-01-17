import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { Card, Grid } from '@nextui-org/react';

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
          ? (

            <Grid.Container gap={2} direction='row' justify='flex-start'>
              {
                favorites.map(id => (
                  <Grid xs={6} sm={3} xl={4} key={id}>
                    <Card
                      isHoverable
                      isPressable
                      css={{ padding: 10 }}
                    >
                      <Card.Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={"100%"}
                        height={140}
                      />

                    </Card>

                  </Grid>
                ))
              }
            </Grid.Container>
          )
          : (
            <NoFavorites />
          )
      }

    </Layout>
  )
}

export default FavoritesPage;