import { Spacer, Text, Image, useTheme, Link } from '@nextui-org/react'

export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                padding: "0x 20px",
                backgroundColor: theme?.colors.accents0.value
            }}>
            <Link href={"/"}>
                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
                    alt="app icon"
                    width={70}
                    height={70}
                />
                <Text color="white" h2>P</Text>
                <Text color="white" h3>okemon</Text>
            </Link>


            <Spacer css={{
                flex: 1
            }} />
            <Link href={"/favorites"}>
                <Text css={{paddingRight: 30}} color="white" h3>Favoritos</Text>
            </Link>
        </div>
    )
}
