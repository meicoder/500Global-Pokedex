import styled from 'styled-components';
import { Type } from '../../types/PokemonSchema';

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
    types: Type[];
}

export const SearchBox = ({ onInputChange, types }: SearchBoxProps) => {
    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
    };
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
