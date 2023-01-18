import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import FavoritePokemonCard from './FavoritePokemonCard';

interface IProps {
    pokemons: number[];
}

const FavoritesPokemons: FC<IProps> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                pokemons.map((id, index) => (
                    <FavoritePokemonCard  key={id + index} id={id} />
                ))
            }
        </Grid.Container>
    )
}

export default FavoritesPokemons