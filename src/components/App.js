import React, {useState, useEffect} from 'react';
import data from '../data/data.json';
import PokeList from './PokeList.js';
import PokemonDetail from './PokemonDetail.js';
import {Route, Switch} from 'react-router-dom';
import '../stylesheets/App.css';

function App() {
  const [pokemons] = useState(data);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites') || [])
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  });

  const renderPokeDetail = (routerProps) => {
    const routerpokeId = routerProps.match.params.pokeId;

    const pokeFound = pokemons.find(
      (pokemon) => pokemon.id === parseInt(routerpokeId)
    );

    if (pokeFound) {
      return <PokemonDetail pokeDetail={pokeFound} />;
    } else {
      return <p>No hay pokemones</p>;
    }
  };

  const favPokemon = (clickedPokemon) => {
    const pokemonFavorited = favorites.find((pokemon) => {
      console.log(pokemon.id, clickedPokemon);
      return pokemon.id === clickedPokemon;
    });
    console.log(pokemonFavorited);
    if (pokemonFavorited === undefined) {
      const pokemonfav = pokemons.find((pokemon) => {
        return pokemon.id === clickedPokemon;
      });
      setFavorites([...favorites, pokemonfav]);
      // localStorage.setItem('favorites', JSON.stringify(favorites));

      // setFavoriteslocal([...favorites, pokemonFavorited]);

      return;
    }
    // localStorage.setItem('favorites', JSON.stringify(favorites));
    const newFavoriters = favorites.filter(
      (pokemon) => pokemon.id !== clickedPokemon
    );
    setFavorites(newFavoriters);
    // setFavoriteslocal(newFavoriters);
  };

  return (
    <Switch>
      <Route exact path="/">
        <PokeList
          pokemons={data}
          favPokemon={favPokemon}
          favorites={favorites}
          // localFav={favoriteslocal}
        />
        ;
      </Route>

      <Route path="/pokemon/:pokeId" render={renderPokeDetail} />
    </Switch>
  );
}

export default App;
