export interface PokemonDTO {
  id: number;
  name: string;
  principalImg: string | null;
  sprites: Sprites;
  type: PokemonType;
  weight: string;
}

interface Sprites {
  front_default: string | null;
  back_default: string;
  front_shiny: string | null;
  back_shiny: string | null;
}

interface PokemonType {
  map(arg0: (poke: any) => JSX.Element): import("react").ReactNode;
  types: TypeElement[];
}

interface TypeElement {
  slot: number;
  type: TypeType;
}

interface TypeType {
  name: string;
  url: string;
}
