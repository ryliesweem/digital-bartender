import React, {useState} from 'react';

import Row from 'react-bootstrap/Row';

import { FaCocktail } from 'react-icons/fa';
import { FaWineBottle } from 'react-icons/fa';
import { FaGlassWhiskey } from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';
import { GiGrapes } from 'react-icons/gi';
import { GiAgave } from 'react-icons/gi';

function HomeCategories() {
    const [recipes, setRecipes] = useState(null)

    async function getRandom(){
        setRecipes(null)
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        const r = await fetch(url)
        const j = await r.json()
        if(j.drinks) {
          setRecipes(j.drinks)
        }
      }

    return <div className="dark-bkg yellow">
            <h4 style={{marginBottom: '2rem'}}>Search by spirit:</h4>
            <Row>
                <button className="col search-card">
                    <h4><GiAgave /></h4>
                    <p>Tequila</p>
                </button>
                <button className="col search-card" onClick={getRandom}>
                    <h4><FaCocktail /></h4>
                    <p>Vodka</p>
                </button>
                <button className="col search-card">
                    <h4><FaWineBottle /></h4>
                    <p>Rum</p>
                </button>
                <button className="col search-card">
                    <h4><GiGrapes /></h4>
                    <p>Brandy</p>
                </button>
                <button className="col search-card">
                    <h4><FaGlassWhiskey /></h4>
                    <p>Whiskey</p>
                </button>
                <button className="col search-card">
                    <h4><BiDrink /></h4>
                    <p>Gin</p>
                </button>
            </Row>
        </div>
    
}

export default HomeCategories