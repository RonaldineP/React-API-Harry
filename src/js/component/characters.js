import React, { useState, useContext } from "react";
import { Favorites } from "./favorites";
import { Context } from "../store/appContext";

export const Characters = (props) => {
  const { store, actions } = useContext(Context)
  console.log(store.CharacterData,"data")
  // { characters, favorites =[], setFavorites, spells}
  
return (
  <div className="card-parent"> 
    {
    store?.CharacterData.length > 0 ?
      store?.CharacterData.map((character, i) => {
        // console.log(character,"character?")
        return (
          <div className="cards-container" key={i}>
            
              <div className="card" >
                <img src={!character.image ? character.image = "https://e0.pxfuel.com/wallpapers/836/547/desktop-wallpaper-harry-potter-quotes-collections-large-harry-potter-christmas.jpg" : character.image} alt={character.name} onError={(e) => (e.target.src = "")} />
                <h2>{character.name}</h2>
                <p>House: {character.house}</p>
                <p>Gender: {character.gender}</p>
                <p>Year of Birth: {character.yearOfBirth}</p>

                <i onClick={() => { actions.addFavorites(character.name) }} className="fa fa-heart"></i>

              </div>
            
            </div>
          
        )
      })
      : "loading"
  }
  </div>
  
)

  
};