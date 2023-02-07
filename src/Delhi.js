import 'bootstrap/dist/css/bootstrap.min.css';  
import {Card, Button} from 'react-bootstrap';
import card3 from './assets/images/card3.PNG';

function DelhiData(props) {
    return (
        <Card className='bt-card'>
            <Card.Img src={card3} height="200" />  
            <Card.Body>  
                <Card.Title>{props.data.card3.title}</Card.Title>  
                <Card.Subtitle>{props.data.card3.subtitle}</Card.Subtitle>
                <Card.Text>  
                {props.data.card3.body}
                </Card.Text>  
                <Button variant="primary">{props.data.card3.readMore}</Button>  
            </Card.Body>  
        </Card> 
    );
}

export default DelhiData;