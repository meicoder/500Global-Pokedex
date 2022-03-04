import { PokemonList } from '../pokemon/PokemonList';
import styled from 'styled-components';
import { useState } from 'react';
import { PokemonCard } from '../pokemon/PokemonCard';

const RowStyled = styled.div`
    background-color: #f40552;
    border: 10px solid #f40552;
    border-radius: 12px;
`;

const ColStyled = styled.div`
    background-color: rgba(252, 126, 47, 0.6);
    border: 5px solid #f40552;
    border-radius: 12px;
    height: 70vh;
    overflow-y: scroll;
`;

export const Content = () => {
    const [pokemonSelectedId, setPokemonSelectedId] = useState<
        string | undefined
    >(undefined);
    const handleClick = (pokemonId: string) => {
        setPokemonSelectedId(pokemonId);
    };

    return (
        <>
            <RowStyled className="row">
                <ColStyled className="col-md-7 ">
                    <PokemonList onCardClick={handleClick} />
                </ColStyled>
                <ColStyled className="col-md-5">
                    <PokemonCard pokemonId={pokemonSelectedId} />
                </ColStyled>
            </RowStyled>
        </>
    );
};
