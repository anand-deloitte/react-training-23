import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container, Card, Col, Button} from 'react-bootstrap';
import card1 from './assets/images/card1.PNG';

function LondonData(props) {
    return (
        <Card className='bt-card'>  
            <Card.Img src={card1} height="200" />  
            <Card.Body>  
                <Card.Title>{props.data.card1.title}</Card.Title> 
                <Card.Subtitle>{props.data.card1.subtitle}</Card.Subtitle> 
                <Card.Text>  
                {props.data.card1.body}
                </Card.Text>  
                <Button variant="primary">{props.data.card1.readMore}</Button>  
            </Card.Body>  
        </Card> 
    );
}

export default LondonData;