import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from "next";
import Image from 'next/image';
import { Card, Container, Grid, Text } from '@nextui-org/react';

import { pokeApi } from '../../api';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { Layout } from '../../components/layouts';

interface IProps {
    pokemon: Pokemon;
}

const PokemonByNamePage: FC<IProps> = ({ pokemon }) => {
    return (
        <Layout title={pokemon.name.toUpperCase() + " | Pokedex"}>
            <Grid.Container css={{ marginTop: "5px" }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: "30px" }}>
                        <Card.Body>
                            <Card.Image
                                src={
                                    pokemon.sprites.other?.dream_world.front_default ||
                                    "no-image.png"
                                }
                                alt={pokemon.name}
                                width="100%"
                                height={140}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header
                            css={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <Text h1 transform="capitalize">
                                {pokemon.name}
                            </Text>
                        </Card.Header>
                        <Card.Body>
                            <Container direction="row" display="flex" justify="space-between">
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={150}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={150}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={150}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={150}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

    const pokemonNames: string[] = data.results.map(poke => `${poke.name}`);

    return {
        paths: pokemonNames.map((name) => ({
            params: { name: name },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { name } = context.params as { name: string };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`)

    return {
        props: {
            pokemon: data
        }
    }

}
export default PokemonByNamePage;