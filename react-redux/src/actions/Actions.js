import axios from 'axios'
import {connect} from 'react-redux'

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILED = 'FETCH_POKEMON_FAILED';

export const fetchPokemon = (props) => dispatch => {
    dispatch({ type: FETCH_POKEMON_START });
    axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then((res) => {
            dispatch({
                type: FETCH_POKEMON_SUCCESS,
                payload: res.data.results
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCH_POKEMON_FAILED,payload: err.response})
        })
}

const mapStateToProps = state => {
    return {
        url: state.url
    }
}

export default connect(mapStateToProps,{})(fetchPokemon)