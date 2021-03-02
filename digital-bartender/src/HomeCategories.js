import React, {useState} from 'react';

import Row from 'react-bootstrap/Row';

import { FaCocktail } from 'react-icons/fa';

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

    return <div className="bkg2">
                <h1>Explore new recipes and mix it up with Mixer!</h1>
                <h5 style={{margin: '2rem 0rem'}}>Search by spirit:</h5>
                <Row>
                    <button className="col search-card" onClick={getRandom}>
                        <h4><FaCocktail /></h4>
                        <p>Vodka</p>
                    </button>
                    <button className="col search-card">
                        <h4><FaCocktail /></h4>
                        <p>Vodka</p>
                    </button>
                    <button className="col search-card">
                        <h4><FaCocktail /></h4>
                        <p>Vodka</p>
                    </button>
                    <button className="col search-card">
                        <h4><FaCocktail /></h4>
                        <p>Vodka</p>
                    </button>
                    <button className="col search-card">
                        <h4><FaCocktail /></h4>
                        <p>Vodka</p>
                    </button>
                </Row>
                <Row className="mt-4">
                    <button className="col search-card" onClick={getRandom}>
                        <h4><FaCocktail /></h4>
                        <p>Vodka</p>
                    </button>
                    <button className="col search-card">
                        <h4><FaCocktail /></h4>
                        <p>Vodka</p>
                    </button>
                    <button className="col search-card">
                        <h4><FaCocktail /></h4>
                        <p>Vodka</p>
                    </button>
                    <button className="col search-card">
                        <h4><FaCocktail /></h4>
                        <p>Vodka</p>
                    </button>
                    <button className="col search-card">
                        <h4><FaCocktail /></h4>
                        <p>Vodka</p>
                    </button>
                </Row>


            </div>
    
}

export default HomeCategories