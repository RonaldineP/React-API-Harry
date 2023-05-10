import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext"

import { FaHeart } from "react-icons/fa";

export const Favorites = (props) => {
  const [favorites, setFavorites] = useState(false);
  const { store, actions } = useContext(Context);
  useEffect(() => {
    if (
      store.favorites.find((x) => {
        for (let i in x) {
          if (props[i] && props[i].name === x[i].name) {
            return true;
          }
        }
      })
    ) {
      setFavorites(true);
    } else {
      setFavorites(false);
    }
  }, [store.favorites]);

return (
  <div className="favorites-container">
    <h2>Favorites</h2>
    <div className="favorites">
      {favorites.length === 0 ? (
        <p>You have no favorites.</p>
      ) : (
        favorites.map((character) => (
          <div className="favorite" key={character.id}>
            <img src={character.image} alt={character.name} onError={(e) => (e.target.src = "")} />
            <h3>{character.name}</h3>
            <button onClick={() =>actions.addFavorites(props)}>
              <FaHeart className="favorite-icon" />
              <span>Remove from favorites</span>
            </button>
          </div>
        ))
      )}
    </div>
  </div>
);
};