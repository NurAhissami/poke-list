import React from 'react';

const Pokemon = (props) => {
  const pokeType = props.type.map((type, index) => {
    return (
      <li className="PokemonTypes" key={index}>
        {type}
      </li>
    );
  });
  return (
    <section>
      <article className="ListPokemon">
        <img src={props.url} alt={props.name}></img>
        <h3>{props.name}</h3>
        <ul className="ulTypes">{pokeType}</ul>
      </article>
    </section>
  );
};

export default Pokemon;
