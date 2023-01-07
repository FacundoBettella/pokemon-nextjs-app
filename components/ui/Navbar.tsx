import React from 'react'
import { Spacer, Text, Image, useTheme } from '@nextui-org/react'

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            padding: "0x 20px",
            backgroundColor: theme?.colors.accents0.value
        }}>
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png" 
                alt="app icon" 
                width={70} 
                height={70} 
            />
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>

            <Spacer css={{
                flex: 1
            }} />
            <Text color="white" h3>Favoritos</Text>
        </div>
    )
}
