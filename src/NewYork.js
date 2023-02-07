import 'bootstrap/dist/css/bootstrap.min.css';  
import {Card, Button} from 'react-bootstrap';
import card2 from './assets/images/card2.PNG';
import { Link } from "react-router-dom";

function NewYorkData(props) {
    return (
        <Card className='bt-card'>
            <Card.Img src={card2} height="200" />  
            <Card.Body>  
                <Card.Title>{props.data.card2.title}</Card.Title> 
                <Card.Subtitle>{props.data.card2.subtitle}</Card.Subtitle> 
                <Card.Text>  
                {props.data.card2.body}
                </Card.Text>  
                <Button variant="primary">{props.data.card2.readMore}</Button>  
            </Card.Body>  
        </Card> 
    );
}

export default NewYorkData;