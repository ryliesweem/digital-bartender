import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

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

  return (
    <Container fluid>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search for a drink</Form.Label>
          <Form.Control value={text} onChange={e=> setText(e.target.value)} autoFocus
          onKeyPress={e=> e.key==='Enter' && getRecipes()} />
        </Form.Group>
        <Button variant="primary" disabled={!text} onClick={getRecipes}>
          Search
        </Button>
        <Button variant="secondary" onClick={getRandom}>
          <GiPerspectiveDiceSixFacesRandom />
        </Button>

      {recipes && recipes.length===0 && <div>
        No recipes found! Try another search.
      </div>}
      
      {recipes && recipes.length>0 && <body>
        {term && <div>Showing results for: {term}</div>}
        {recipes.map(m=> 
          <div>
            <h1>{m.strDrink}</h1>
            <p>{m.strInstructions}</p>
            <img alt='' src={m.strDrinkThumb}/>
          </div>
        )}
      </body>}
    </Container>
  );
}

export default App;
