export interface UnpatchedPokemonSchema {
    id: string;
    name: string;
    sprites: string;
}

export interface PokemonImage {
    normal?: string;
    animated?: string;
    front_default?: string;
}

export interface PokemonSchema {
    id: string;
    name: string;
    sprites: PokemonImage;
    types: PokemonType[];
}

export interface PokemonItemInList {
    name: string;
    url: string;
}

export interface PokemonCard {
    id?: string;
    name?: string;
    sprites?: PokemonImage;
}

export interface PokemonType {
    slot: number;
    type: Type;
}

export interface Type {
    name: string;
    url: string;
}

export interface PokemonVersion {
    game_index: number;
    version: Version;
}

export interface Version {
    name: string;
    url: string;
}
