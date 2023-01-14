import { GetStaticProps } from "next";
import { FC } from "react"
import { Layout } from "../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { pokeApi } from "../api";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: FC<Props> = ({ pokemons }) => {

  return (
    <Layout title="Listado de Pókemons">
      <ul>
        {
          pokemons.map((poke, i) => (
            <li key={i + poke.name}>
              {poke.id} - {poke.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))


  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
