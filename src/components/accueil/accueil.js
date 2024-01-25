import React from 'react'
import './accueil.css'
import { Link } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'

export default function Accueil () {
    return(
        <div className='global_accueil'>
            <Header />
            <Navbar />
            <div>    
                <p className='texte_accueil'>Bienvenue sur ce site de fans de Basket-ball. </p>
                <p className='texte_accueil'>Ici se partagent des entrainements pour progresser entre passionés et pour tout niveaux</p>
                <br></br>

                <p id='que_travailler'>Que voulez vous travailler ?</p>
                <br></br>

                <div className='type_de_choix'>

                    <Link to='/shoot' className='style_liens'>
                        <p>Shoot</p>
                        <span>Des exercices pour augmenter vos chances de réussites au tir, de près comme de loin</span>
                    </Link>

                    <Link to='/passe' className='style_liens'>
                        <p>Passe</p>
                        <span>Des entrainements pour des passes plus précises, plus puissantes</span>
                    </Link>

                    <Link to='/dribble' className='style_liens'>
                        <p>Dribble</p>
                        <span>Pour améliorer votre handle et passer vos adversaires plus facilement, ou même créer de l'espace afin de shooter</span>
                    </Link>
                    
                </div>
                <Footer />
            </div>
        </div>
    )
}