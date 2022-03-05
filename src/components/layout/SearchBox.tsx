import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Type } from '../../types/PokemonSchema';
import axios from 'axios';

const StyledInput = styled.input`
    border: none;
    padding: 15px;
    width: 250px;
    border: 1px solid #120136;
    margin: 15px;
    display: inline-block;
`;

const StyledSelect = styled.select`
    border: none;
    padding: 15px;
    width: 150px;
    border: 1px solid #120136;
    margin: 15px;
    display: inline-block;
`;

interface SearchBoxProps {
    onInputChange: (inputValue: string) => void;
    setTypeSelected: (typeSelected: string) => void;
}

export const SearchBox = ({
    onInputChange,
    setTypeSelected
}: SearchBoxProps) => {
    const [types, setTypes] = useState<Type[]>([]);
    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTypeSelected(e.target.value);
    };

    useEffect(() => {
        const getTypes = async () => {
            const response = await axios('https://pokeapi.co/api/v2/type');
            setTypes(response.data.results);
        };
        getTypes();
    }, []);
    return (
        <>
            <StyledInput
                onChange={(e) => {
                    onInputChange(e.target.value);
                }}
                className="search"
                type="search"
                placeholder="Type the pokemon name"
            />
            <StyledSelect name="types" onChange={handleTypeChange}>
                {types.map((type: Type) => {
                    return (
                        <option key={type.name} value={type.name}>
                            {type.name}
                        </option>
                    );
                })}
            </StyledSelect>
        </>
    );
};
