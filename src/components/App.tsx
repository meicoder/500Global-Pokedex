import { useEffect, useState } from 'react';
import { pokemonData } from '../data/PokemonData';
import {
    PokemonImage,
    PokemonSchema,
    UnpatchedPokemonSchema
} from '../types/PokemonSchema';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './layout/NavBar';
import { Content } from './layout/Content';

export const App = (): JSX.Element => {
    return (
        <div className="App">
            <NavBar />
            <div className="container">
                <Content />
            </div>
        </div>
    );
};

export default App;
