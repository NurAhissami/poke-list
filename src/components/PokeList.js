import React from 'react';

import {Link} from 'react-router-dom';
import Pokemon from './Pokemon';
import logo from '../images/logo-pokemon.png';

const PokeList = (props) => {
  const favorites = props.favorites.map((favorite, id) => {
    return (
      <li key={id} onClick={props.clickFavorites} className="listFav">
        <img src={favorite.url} alt={favorite.name} />
      </li>
    );
  });
  const pokemon = props.pokemons.map((pokemon, id) => {
    const ifFav = props.favorites.find(
      (favorite) => favorite.id === pokemon.id
    );
    return (
      <li key={id} className="listPokemon">
        <button
          id={pokemon.id}
          onClick={() => props.favPokemon(pokemon.id)}
          className="favoritesHeart"
        >
          <i className={ifFav ? 'fas fa-lg fa-heart' : 'far fa-heart'}></i>
        </button>
        <Link to={`./pokemon/${pokemon.id}`}>
          <Pokemon
            id={pokemon.id}
            name={pokemon.name}
            url={pokemon.url}
            type={pokemon.types}
          />
        </Link>
      </li>
    );
  });
  return (
    <div>
      <div className="container-img">
        <img className="image-logo" src={logo} alt="logo" />
      </div>
      <div className="containerAll">
        <ul className="ulList">{pokemon}</ul>
        <div className="Favorites">
          <h3 className="titleFav">lista de favoritos</h3>
          <ul>{favorites}</ul>
        </div>
      </div>
    </div>
  );
};
export default PokeList;
