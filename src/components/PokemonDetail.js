import React from 'react';
import {Link} from 'react-router-dom';

const PokemonDetail = (props) => {
  const pokeType = props.pokeDetail.types.map((type, index) => {
    return (
      <li className="PokemonTypes" key={index}>
        {type}
      </li>
    );
  });

  return (
    <div className="cardNew">
      <Link to="/">
        <div className="divContainer">
          <small className="back">Volver</small>
        </div>
      </Link>
      <article className="pokemonCardDetail">
        <p className="titlepoke"> Has seleccionado a {props.pokeDetail.name}</p>
        <img src={props.pokeDetail.url} alt={props.pokeDetail.name}></img>
        <h3>{props.pokeDetail.name}</h3>
        <ul className="ulTypes">{pokeType}</ul>
      </article>
    </div>
  );
};

export default PokemonDetail;
