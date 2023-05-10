import React, { useState, useContext } from "react";
import { Favorites } from "./favorites";
import { Context } from "../store/appContext";

export const Spells = (props) => {
  const { store, actions } = useContext(Context)
  console.log(store.SpellData,"data")
  // { characters, favorites =[], setFavorites, spells}
  
return (
  <div className="card-parent">
    {
    store?.SpellData.length > 0 ?
      store?.SpellData.map((spell, i) => {
        console.log(spell,"character?")
        return (
          <div className="cards-container" key={i}>
            
              <div className="card" >
                <img src={!spell.image ? spell.image = "https://i.pinimg.com/736x/d3/c7/a7/d3c7a758b5df1ce54f05884868037478--harry-potter-cartoon-harry-potter-things.jpg" : spell.image} alt={spell.name} onError={(e) => (e.target.src = "")} />
                <h2>Spell : </h2>
                <h2>{spell.name}</h2>
                
                

                <i onClick={() => { actions.addFavorites(spell.name) }} className="fa fa-heart"></i>
              </div>
            

          </div>
        )
      })
      : "loading"
  }
  </div>
  
)

  
};