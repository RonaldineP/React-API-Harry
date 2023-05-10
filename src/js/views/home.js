import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Context } from "../store/appContext";
import { Spells } from "../component/spells";

export const Home = () => {
  const {store,actions}=useContext(Context)
  

console.log(store.SpellData,"Spells data")


 
  return (
    <div className="home">
      <div className="banner">
      <h1>Welcome to my Harry Potter API</h1>
      </div>
	
   <Characters CharacterData={store?.CharacterData} />
      <Spells SpellsData={store?.SpellData}/>
  
      
      </div>
   
  );
};