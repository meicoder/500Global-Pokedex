import { useEffect, useState } from 'react';
import { PokemonItem } from './PokemonItem';
import axios from 'axios';
import { PokemonItemInList } from '../../types/PokemonSchema';
import { Navigation } from '../layout/Navigation';
import { pokemonData } from '../../data/PokemonData';
import { SearchBox } from '../layout/SearchBox';

interface PokemonListProps {
    onCardClick: (pokemonName: string) => void;
}

export const PokemonList = ({ onCardClick }: PokemonListProps) => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [pokemons, setPokemons] = useState<PokemonItemInList[]>([]);
    const [nextPage, setNextPage] = useState(undefined);
    const [previousPage, setPreviousPage] = useState(undefined);
    const [pokemonsInCache, setpokemonsInCache] = useState<PokemonItemInList[]>(
        []
    );

    useEffect(() => {
        const getPokemons = async () => {
            const response = await axios(url);
            setPokemons(response.data.results);
            setNextPage(response.data.next && response.data.next);
            setPreviousPage(response.data.previous && response.data.previous);
        };
        getPokemons();
    }, [url]);

    useEffect(() => {
        setpokemonsInCache(pokemonData);
    }, []);

    const handleInputChange = (inputValue: string) => {
        const searchedPokemons = pokemonsInCache
            .filter((pokemon: PokemonItemInList) => {
                return (
                    pokemon.name &&
                    pokemon.name
                        .toLowerCase()
                        .includes(inputValue.toLocaleLowerCase())
                );
            })
            .slice(0, 20);
        setPokemons(searchedPokemons);
    };

    return (
        <>
            {pokemons ? (
                <div className="row">
                    <div className="row">
                        <SearchBox onInputChange={handleInputChange} />
                    </div>
                    <div className="row">
                        {pokemons.map((pokemon: PokemonItemInList) => {
                            return (
                                pokemon.name && (
                                    <PokemonItem
                                        key={pokemon.name}
                                        name={pokemon.name}
                                        url={pokemon.url}
                                        onCardClick={onCardClick}
                                    />
                                )
                            );
                        })}
                    </div>
                </div>
            ) : (
                <h2>Cargando</h2>
            )}
            <Navigation
                nextPage={nextPage}
                previousPage={previousPage}
                updateUrl={setUrl}
            />
        </>
    );
};
