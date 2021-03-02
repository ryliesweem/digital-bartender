import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function RecipeCard(props) {
    const ingredients = props.ingredients;
    const listIngredients = ingredients.map((ingredient) =>
        <li className="strong">{ingredient}</li>
    );

    const measurements = props.measurements;
    const listMeasurements = measurements.map((measurement) =>
        <li>{measurement}</li>
    );

    return <Row className="bkg1">
                <Col md={3}>
                    <img src={props.img} alt='' />
                </Col>
                <Col md={9}>
                    <h2>{props.name}</h2>
                    <div className="ingredients">
                        <ul>
                            {listMeasurements}
                        </ul>
                        <ul>
                            {listIngredients}
                        </ul>
                    </div>
                    <p>{props.instructions}</p>
                </Col>
            </Row>
    
}

export default RecipeCard