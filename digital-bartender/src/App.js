import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Container';

import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import RecipeCard from './RecipeCard';

function App() {
  const [text, setText] = useState('')
  const[term, setTerm] = useState('')
  const [recipes, setRecipes] = useState(null)

  async function getRecipes(){
    setTerm('')
    setRecipes(null)
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?'
    url += 's=' + text
    const r = await fetch(url)
    const j = await r.json()
    if(j.drinks) {
      setRecipes(j.drinks)
      setTerm(text)
      setText('')
    }
  }

  async function getRandom(){
    setTerm('')
    setRecipes(null)
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    const r = await fetch(url)
    const j = await r.json()
    if(j.drinks) {
      setRecipes(j.drinks)
      setTerm(text)
      setText('')
    }
  }

  return ( <div>
    <div className="header">
          <h3>Digital Bartender</h3>
          <div className="searchbar">
            <p>Search drinks:</p>
            <input value={text} placeholder="drink name" onChange={e=> setText(e.target.value)} autoFocus
            onKeyPress={e=> e.key==='Enter' && getRecipes()} />
            <button className="btn-primary" disabled={!text} onClick={getRecipes}>
              Search
            </button>
            <button className="btn-secondary" onClick={getRandom}>
              <GiPerspectiveDiceSixFacesRandom /> Random
            </button>
          </div>
      </div>
      <Container fluid>

        {recipes && recipes.length===0 && <div>
          No recipes found! Try another search.
        </div>}
        
        {recipes && recipes.length>0 && <body>
          <Row>
            <Col lg={{ span: 10, offset: 1 }}>
              {term && <div>Showing results for: {term}</div>}
            </Col>
          </Row>
          
          {recipes.map(m=> 
            <Row>
              <RecipeCard
                name={m.strDrink}
                instructions={m.strInstructions}
                img={m.strDrinkThumb}
                measurements={[m.strMeasure1, m.strMeasure2, m.strMeasure3, m.strMeasure4, m.strMeasure5, m.strMeasure6]}
                ingredients={[m.strIngredient1, m.strIngredient2, m.strIngredient3, m.strIngredient4, m.strIngredient5, m.strIngredient6]}
                ingredient1={[m.strMeasure1, m.strIngredient1]}
                ingredient2={[m.strMeasure2, m.strIngredient2]}
              />
            </Row>
          )}
        </body>}
      </Container>

    </div>
    
  );
}

export default App;
