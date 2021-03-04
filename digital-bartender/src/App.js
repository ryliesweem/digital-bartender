import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, {useState} from 'react';
import {ReactComponent as ReactLogo} from './drink.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Container';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import RecipeCard from './RecipeCard';
import Landing from './Landing';
import HomeCategories from './HomeCategories';
import WeeklyDrink from "./WeeklyDrink";

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
  return ( <Router>

    <div className="header">
          <Link to="/"><h3>Mixer</h3></Link>
          <div className="searchbar">
            <input value={text} placeholder="search drinks" onChange={e=> setText(e.target.value)} autoFocus
            onKeyPress={e=> e.key==='Enter' && getRecipes()} />
            <Link to="/recipes"><button className="btn-1" disabled={!text} onClick={getRecipes}>
              Search
            </button></Link>
          </div>
          <div className="random-btn">
            <Link to="/recipes"><button className="btn-2" onClick={getRandom}>
              <GiPerspectiveDiceSixFacesRandom /> Random
            </button></Link>
          </div>
      </div>

      <Switch>
          <Route path="/recipes">
            <Recipes recipes={recipes} term={term} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
  );
}
export default App;
function Home() {
  return <Container fluid>
      <Landing />
      <HomeCategories />
      <WeeklyDrink />
    </Container>;
}
function Recipes(props) {
  const {recipes} = props
  const {term} = props

  return <div>
    {recipes && recipes.length===0 && <body>
      No recipes found! Try another search.
    </body>}
    {recipes && recipes.length>0 && <body className="dark-bkg pink">
      <Row>
        <Col lg={{ span: 10, offset: 1 }}>
          <h1>Recipes</h1>
          {term && <div style={{color: 'white'}}>Showing results for: <strong>{term}</strong></div>}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {recipes.map(m=> 
              <RecipeCard
                name={m.strDrink}
                instructions={m.strInstructions}
                img={m.strDrinkThumb}
                measurements={[m.strMeasure1, m.strMeasure2, m.strMeasure3, m.strMeasure4, m.strMeasure5, m.strMeasure6]}
                ingredients={[m.strIngredient1, m.strIngredient2, m.strIngredient3, m.strIngredient4, m.strIngredient5, m.strIngredient6]}
              />
          )}
        </Col>
      </Row>
    </body>}
  </div>;
}