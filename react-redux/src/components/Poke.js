import React from 'react'
import { connect } from 'react-redux';
import {fetchPokemon} from '../actions/Actions'


function PokeList(props) {
    return (
        <>
        <h2>Pokemon Data</h2>
        <button onClick={props.fetchPokemon}>Get Poke Data</button>
        <div>
            {props.pokemon.map(poke => (
                <p key={poke.name}>{poke.name}</p>
            ))}
        </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon, 
        error: state.error
    }
};

export default connect(mapStateToProps,{fetchPokemon})(PokeList);