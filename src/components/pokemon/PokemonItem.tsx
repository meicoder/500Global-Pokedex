import { useEffect, useState } from 'react';
import styled from 'styled-components';

const NameStyled = styled.h5`
    font-size: 18px;
    color: black;
    text-align: center;
`;

const CardHeaderStyled = styled.div`
    font-size: 18px;
    color: black;
`;

const CardStyled = styled.div`
    cursor: pointer;
    transition: transform 0.25s ease-out;
    &:hover {
        transform: scale(1.05);
    }
`;

interface PokemonItemProps {
    name: string;
    url: string;
    onCardClick: (pokemonId: string) => void;
}

interface IPokemonItem {
    name: string;
    imageUrl: string;
    pokemonIndex: string;
}

export const PokemonItem = (props: PokemonItemProps) => {
    const { name, url, onCardClick } = props;
    const [pokemon, setPokemon] = useState<IPokemonItem>({
        name: name,
        imageUrl: '',
        pokemonIndex: ''
    });
    const [favs, setFavs] = useState<string[]>([]);
    const [imageLoading, setImageLoading] = useState<boolean>(true);
    const [toManyReq, setToManyReq] = useState<boolean>(false);

    useEffect(() => {
        const pokemonUrlArray = url.split('/');
        const pokemonIndex = pokemonUrlArray[pokemonUrlArray.length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
        setPokemon({
            ...pokemon,
            imageUrl,
            pokemonIndex
        });
        const saved = localStorage.getItem('fav');
        saved && setFavs(JSON.parse(saved));
    }, []);

    const updateLocalStorage = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        pokemonId: string
    ) => {
        e.preventDefault();
        const saved = localStorage.getItem('fav');
        if (!saved) {
            localStorage.setItem('fav', JSON.stringify([pokemonId]));
            setFavs([pokemonId]);
        } else {
            let initialValue: string[] = JSON.parse(saved);
            if (initialValue.includes(pokemonId)) {
                initialValue = initialValue.filter((id) => id !== pokemonId);
            } else {
                initialValue.push(pokemonId);
            }
            localStorage.setItem('fav', JSON.stringify(initialValue));
            setFavs(initialValue);
        }
    };

    return (
        <CardStyled className="col-md-4 col-sm-6 mb-5">
            <div className="card text-white bg-warning border-dark">
                <CardHeaderStyled className="card-header d-flex justify-content-between">
                    <div>
                        <h3>{pokemon.pokemonIndex}</h3>
                    </div>
                    <div>
                        <button
                            onClick={(e) => {
                                updateLocalStorage(e, pokemon.pokemonIndex);
                            }}
                            className="btn btn-primary"
                        >
                            {favs.includes(pokemon.pokemonIndex)
                                ? 'UnFav'
                                : 'Fav'}
                        </button>
                    </div>
                </CardHeaderStyled>
                <div
                    onClick={() => {
                        onCardClick(pokemon.pokemonIndex);
                    }}
                    className="card-body"
                >
                    <img
                        src={pokemon.imageUrl}
                        className="card-img-top"
                        onLoad={() => {
                            setImageLoading(false);
                        }}
                        onError={() => {
                            setToManyReq(true);
                        }}
                        alt={pokemon.name}
                    />
                    <NameStyled className="card-title">
                        {pokemon.name.charAt(0).toUpperCase() +
                            pokemon.name.slice(1)}
                    </NameStyled>
                </div>
            </div>
        </CardStyled>
    );
};
