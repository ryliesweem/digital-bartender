import React, {useState} from 'react';

import {ReactComponent as ReactLogo} from './drink.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

import RecipeCard from './RecipeCard';

import { FaCocktail } from 'react-icons/fa';
import { FaWineBottle } from 'react-icons/fa';
import { FaGlassWhiskey } from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';
import { GiGrapes } from 'react-icons/gi';
import { GiAgave } from 'react-icons/gi';

function HomeCategories() {
    const [recipes, setRecipes] = useState(null)
    
    async function getRecipes(props){
        setRecipes(null)
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?'
        url += 's=' + props
        const r = await fetch(url)
        const j = await r.json()
        if(j.drinks) {
            setRecipes(j.drinks)
            console.log(props)
            console.log(recipes)
        } 
    }

    return <div>
        <div className="dark-bkg blue">
        <Row>
            <div className="col-lg-7 align-content-center pt-md-4">
                <h1>Explore new recipes and mix it up with Mixer!</h1>
            </div>
            <div className="col-lg-3 col-8 offset-2 offset-lg-1">
                <ReactLogo style={{maxWidth: '20rem'}}/>
            </div>
        </Row>
        <h4 style={{marginBottom: '2rem', marginTop: '4rem'}}>Search by spirit:</h4>
        <Row>
            <button className="col search-card" onClick={()=> getRecipes('tequila')}>
                <h4><GiAgave /></h4>
                <p>Tequila</p>
            </button>
            <button className="col search-card" onClick={()=> getRecipes('vodka')}>
                <h4><FaCocktail /></h4>
                <p>Vodka</p>
            </button>
            <button className="col search-card" onClick={()=> getRecipes('rum')}>
                <h4><FaWineBottle /></h4>
                <p>Rum</p>
            </button>
            <button className="col search-card" onClick={()=> getRecipes('brandy')}>
                <h4><GiGrapes /></h4>
                <p>Brandy</p>
            </button>
            <button className="col search-card" onClick={()=> getRecipes('whiskey')}>
                <h4><FaGlassWhiskey /></h4>
                <p>Whiskey</p>
            </button>
            <button className="col search-card" onClick={()=> getRecipes('gin')}>
                <h4><BiDrink /></h4>
                <p>Gin</p>
            </button>
        </Row>
    </div>
</div>
            
    
}

export default HomeCategories