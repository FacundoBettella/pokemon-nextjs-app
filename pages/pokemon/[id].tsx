import { FC, useState } from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { Button, Card, Container, Grid, Text } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { PokemonDTO } from "../../interfaces";
import { Layout } from "../../components/layouts";
import { getPokemonInfo, localFavorites } from "../../utils";

interface IProps {
    pokemon: PokemonDTO;
}

const PokemonPage: FC<IProps> = ({ pokemon }) => {
    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsInFavorites(!isInFavorites);

        if (isInFavorites) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0,
            }
        })
    };

    return (
        <Layout title={pokemon.name.toUpperCase() + " | Pokedex"}>
            <Grid.Container css={{ marginTop: "5px" }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: "30px" }}>
                        <Card.Body>
                            <Card.Image
                                src={
                                    pokemon.principalImg ||
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
                            <Container direction="row" display="flex" justify="space-between">
                                <Image
                                    src={pokemon.sprites.front_default ||
                                        "no-image.png"}
                                    alt={pokemon.name}
                                    width={100}
                                    height={150}
                                />
                                <Image
                                    src={pokemon.sprites.back_default ||
                                        "no-image.png"}
                                    alt={pokemon.name}
                                    width={100}
                                    height={150}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny ||
                                        "no-image.png"}
                                    alt={pokemon.name}
                                    width={100}
                                    height={150}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny ||
                                        "no-image.png"}
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
        // fallback: false,
        fallback: "blocking"
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as { id: string };

    const pokemon = await getPokemonInfo(id);

    if (!pokemon) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            }
        }
    }

    return {
        props: {
            pokemon: pokemon,
        },
        revalidate: 86400,
    };
};
export default PokemonPage;
