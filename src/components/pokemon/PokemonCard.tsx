import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    PokemonSchema,
    PokemonType,
    PokemonVersion
} from '../../types/PokemonSchema';
import styled from 'styled-components';

const CardImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`;

interface PokemonCardProps {
    pokemonId: string | undefined;
}

export const PokemonCard = ({ pokemonId }: PokemonCardProps) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const [pokemon, setPokemon] = useState<PokemonSchema | undefined>(
        undefined
    );
    const [pokemonTypes, setPokemonTypes] = useState<string[]>([]);
    const [pokemonVersions, setPokemonVersions] = useState<string[]>([]);
    useEffect(() => {
        const getPokemon = async (pokemonId: string) => {
            const response = await axios(`${url}${pokemonId}`);
            setPokemon(response.data);
            const pokemonTypes = response.data.types.map(
                (pokemonType: PokemonType) => {
                    return pokemonType.type.name;
                }
            );
            setPokemonTypes(pokemonTypes);
            const pokemonVersions = response.data.game_indices.map(
                (version: PokemonVersion) => {
                    return version.version.name;
                }
            );
            setPokemonVersions(pokemonVersions);
        };
        pokemonId && getPokemon(pokemonId);
    }, [pokemonId]);

    return (
        <>
            {pokemon ? (
                <div className="card">
                    <div className="card-header text-center fs-2">
                        {pokemon.name.charAt(0).toUpperCase() +
                            pokemon.name.slice(1)}
                    </div>
                    <CardImage
                        src={pokemon.sprites.front_default}
                        className="card-img-top "
                        alt={`pokemon-${pokemon.name}`}
                    />

                    <div className="card-body">
                        <div className="d-flex">
                            <span>Type:</span>
                            {pokemonTypes.map((type: string) => {
                                return (
                                    <span
                                        key={type}
                                        className="badge rounded-pill bg-primary m-1"
                                    >
                                        {type}
                                    </span>
                                );
                            })}
                        </div>

                        <p>Versions:</p>
                        {pokemonVersions.map((version: string) => {
                            return (
                                <span
                                    key={version}
                                    className="badge rounded-pill bg-primary m-1"
                                >
                                    {version}
                                </span>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="shadow-lg p-3 mb-5 bg-body rounded">
                    Select a Pokemon
                </div>
            )}
        </>
    );
};
