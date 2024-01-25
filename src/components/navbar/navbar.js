import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [appearExercices, setAppearExercices] = useState(false);

  const handleExercices = () => {
    setAppearExercices(!appearExercices);
  };

  return (
    <>
    <div className="class_navbar">
      <Link to="/acceuil" className="link_navbar">
        <span className="onglet">Accueil</span>
      </Link>
      
      <Link className="link_navbar">
        <span className='onglet' onClick={handleExercices}>
          Exercices
        </span>
      </Link>

      <Link to="/acceuil" className="link_navbar">
        <span className="onglet">Favoris</span>
      </Link>

      <Link to="/acceuil" className="link_navbar">
        <span className="onglet">Actualités</span>
      </Link>

      <Link to="/acceuil" className="link_navbar">
        <span className="onglet">Log Out</span>
      </Link>

      <input type="texte" placeholder="Chercher un exercice" id="recherche" />
    </div>
    {appearExercices && (
          <div className='active'>
            <p className='onglet_exercice'>Shoot</p>
            <p className='onglet_exercice'>Passe</p>
            <p className='onglet_exercice'>Dribble</p>
          </div>
        )}
    </>
  );
}
