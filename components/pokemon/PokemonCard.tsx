import { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";

interface IProps {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<IProps> = ({ pokemon }) => {

    const router = useRouter();

    const handlePokemonRoute = () => {
        router.push(`/pokemon/${pokemon.id}`);
    }

    return (
        <Grid xs={6} sm={3} xl={2} key={pokemon.id + pokemon.name}>
            <Card
                isHoverable
                onClickCapture={handlePokemonRoute}
                css={{
                    cursor: "pointer"
                }}
            >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={pokemon.img} width="100%" height={140} />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text>#{pokemon.id}</Text>
                        <Text transform="capitalize">{pokemon.name}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};
