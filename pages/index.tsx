import { StyledButton } from "@nextui-org/react";
import { FC } from "react"
import { Layout } from "../components/layouts";

const HomePage: FC = () => {
  return (
    <Layout title="Listado de Pókemons">
      <StyledButton color="gradient">
        Hola mundo
      </StyledButton>
    </Layout>
  )
}

export default HomePage;
