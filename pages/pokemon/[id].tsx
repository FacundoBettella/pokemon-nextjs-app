import { FC, useState } from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { Button, Card, Container, Grid, Text } from "@nextui-org/react";

import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { pokeApi } from "../../api";
import { localFavorites } from "../../utils";

interface IProps {
    pokemon: Pokemon;
}

const PokemonPage: FC<IProps> = ({ pokemon }) => {

    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsInFavorites(!isInFavorites);
    };

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
                            <Button
                                color="gradient"
                                ghost={!isInFavorites}
                                onPress={onToggleFavorite}
                            >
                                {isInFavorites ? "Its a fav Pokemon" : "Save in favs"}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}> Sprites:</Text>

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
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const pokemon151: string[] = [...Array(151)].map(
        (value, index) => `${index + 1}`
    );

    return {
        paths: pokemon151.map((id) => ({
            params: { id: id },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as { id: string };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data,
        },
    };
};

export default PokemonPage;