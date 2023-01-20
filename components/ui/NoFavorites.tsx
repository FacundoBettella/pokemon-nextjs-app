import { Container, Text } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container
        css={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 100px)", /* height Calculado */
          alignItems: "center",
          justifyContent: "center"

        }}
      >
        <Text h1>
          No Favs
        </Text>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
          alt="poke"
          width={150}
          height={150}
          style={{
            opacity: 0.7
          }}
        />
      </Container>
  )
}
