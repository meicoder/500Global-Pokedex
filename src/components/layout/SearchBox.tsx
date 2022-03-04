import styled from 'styled-components';

const StyledInput = styled.input`
    border: none;
    padding: 15px;
    width: 250px;
    border: 1px solid #120136;
    margin: 15px;
`;

interface SearchBoxProps {
    onInputChange: (inputValue: string) => void;
}

export const SearchBox = ({ onInputChange }: SearchBoxProps) => {
    return (
        <StyledInput
            onChange={(e) => {
                onInputChange(e.target.value);
            }}
            className="search"
            type="search"
            placeholder="Type the pokemon name"
        />
    );
};
