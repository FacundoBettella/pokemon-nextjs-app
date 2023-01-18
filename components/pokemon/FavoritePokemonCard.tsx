import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface IProp {
    id: number;
}

const FavoritePokemonCard: FC<IProp> = ({ id }) => {
    const router = useRouter();

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${id}`)
    }

    return (
        <Grid xs={6} sm={3} xl={4} key={id}>
            <Card
                isHoverable
                isPressable
                css={{ padding: 10 }}
                onPress={onFavoriteClicked}
            >
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={"100%"}
                    height={140}
                />

            </Card>
        </Grid>
    )
}

export default FavoritePokemonCard