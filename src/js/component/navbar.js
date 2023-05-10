import React, { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const [favorites, setFavorites] = useState(false);
  const { store, actions } = useContext(Context);

  useEffect(()=>{
    console.log("favorites",store.favorites)
    setFavorites(store.favorites)
  },[store.favorites])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://logos-world.net/wp-content/uploads/2020/12/Hogwarts-Symbol.png" alt="Logo" width="200" height="100" className="d-inline-block align-text-top me-2" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/demo">
                Demo
              </Link>
            </li>
          </ul>
          <div className="d-flex flex-column">
          <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          
        >
    Favorites
        </button>
          <ul className="dropdown-menu p-absolute;">
            {
              favorites.length ?(
                favorites.map((item,i)=>{
                  return(      <li
                    style={{
                      display: "flex",
                      
                      alignItems: "center",
                    }}
                    className="dropdown-item"
                    key={i}
                  >{item}</li>
                  )
                })
              ):(<li style={{
                display: "flex",
                
                alignItems: "center",
              }}>No favorites</li>)
            }

          </ul>
           
        </div>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
      </div>
      </div>
    </nav>
  );
};