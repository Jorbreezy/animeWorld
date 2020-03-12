import React, { Component } from "react";

const Nav = ({ updateType, getByName }) => (
  <header id="header">
    <div className="navItem">
      <button
        className="choice"
        onClick={() => {
          updateType("Anime");
        }}
      >
        Anime
      </button>
    </div>
    <div className="navItem">
      <input className="search" placeholder="Search" onChange={(e) => { getByName(e.target.value) }}></input>
    </div>
    <div className="navItem">
      <button
        className="choice"
        onClick={() => {
          updateType("Manga");
        }}
      >
        Manga
      </button>
    </div>
  </header>
);

export default Nav;
