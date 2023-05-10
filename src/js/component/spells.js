import React, { useState, useContext } from "react";
import { Favorites } from "./favorites";
import { Context } from "../store/appContext";

export const Spells = (props) => {
  const { store, actions } = useContext(Context)
  console.log(store.SpellData,"data")
  // { characters, favorites =[], setFavorites, spells}
  
return (
  <div className="card-parent d-inline-flex ">
    {
    store?.SpellData.length > 0 ?
      store?.SpellData.map((spell, i) => {
        console.log(spell,"character?")
        return (
          <div className="cards-container" key={i}>
            <div className="cards ">
              <div className="card" >
                <img src={!spell.image ? spell.image = "https://www.printablee.com/postpic/2011/02/harry-potter-printable-spell-book_129891.jpg" : spell.image} alt={spell.name} onError={(e) => (e.target.src = "")} />
                <h2>{spell.name}</h2>
                <p>House: {spell.description}</p>
                

                <i onClick={() => { actions.addFavorites(spell.name) }} className="fa fa-heart"></i>
              </div>
            </div>

          </div>
        )
      })
      : "loading"
  }
  </div>
  
)

  
};