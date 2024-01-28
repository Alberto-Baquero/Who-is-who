import React from "react";
import './Playercard.css';
const PlayerCard = ({character}) => {
  return (
    <div className="thePlayerCard">
      <h2>personajes</h2>
      <ul>
        <li>
        <h3>Name: {character.name}</h3>
        <p>Hair: {character.hair}</p>
        <p>Skin: {character.skin}</p>
        <p>Beard: {character.beard}</p>
        <p>Eyes Color:{character.eyesColor}</p>
        <p>Earrings:{character.earring}</p>
        </li>
        
        </ul></div>
  );
};

export default PlayerCard