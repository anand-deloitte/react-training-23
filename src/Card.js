import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container, Card, Col, Button} from 'react-bootstrap';
import card1 from './assets/images/card1.PNG';
import card2 from './assets/images/card2.PNG';
import card3 from './assets/images/card3.PNG';
import './Card.css';
import Counter from './Counter';
import { Link } from "react-router-dom";

function BodyShorthandExample(props) {
  return (
    <Container>
        <div className='col-8 card-parent'>
            <Card className='bt-card'>  
                <Card.Img src={card1} height="200" />  
                <Card.Body>  
                    <Card.Title>{props.data.card1.title}</Card.Title> 
                    <Card.Subtitle>{props.data.card1.subtitle}</Card.Subtitle> 
                    <Card.Text>  
                    {props.data.card1.body}
                    </Card.Text>
                    <div className='button-parent'>
                        <Button variant="primary">{props.data.card1.readMore}</Button>
                    </div> 
                    <Counter />                 
                </Card.Body>  
            </Card> 

            <Card className='bt-card'>
                <Card.Img src={card2} height="200" />  
                <Card.Body>  
                    <Card.Title>{props.data.card2.title}</Card.Title> 
                    <Card.Subtitle>{props.data.card2.subtitle}</Card.Subtitle> 
                    <Card.Text>  
                    {props.data.card2.body}
                    </Card.Text> 
                    <div className='button-parent'>
                        <Button variant="primary">{props.data.card2.readMore}</Button> 
                    </div> 
                    <Counter />
                </Card.Body>  
            </Card> 

            <Card className='bt-card'>
                <Card.Header>Tags</Card.Header>
                <Card.Body className='tag-body'>
                    <Link to="/newyork" className='tag-link'>New York</Link>
                    <Link to="/london" className='tag-link'>London</Link>
                    <Link to="/delhi" className='tag-link'>Delhi</Link>
                </Card.Body>  
            </Card> 
        </div>

        <div className='card-parent col-4'>
            <Card className='bt-card'>
                <Card.Img src={card3} height="200" />  
                <Card.Body>  
                    <Card.Title>{props.data.card3.title}</Card.Title>  
                    <Card.Subtitle>{props.data.card3.subtitle}</Card.Subtitle>
                    <Card.Text>  
                    {props.data.card3.body}
                    </Card.Text>  
                    <div className='button-parent'>
                        <Button variant="primary">{props.data.card3.readMore}</Button>  
                    </div>
                    <Counter />
                </Card.Body>  
            </Card> 

            <Card className='bt-card'>
                <Card.Header>Popular Posts</Card.Header> 
                <Card.Body className='post-body'>  
                    <ul className='post-ul'>
                        <li className='post-li'>Lorem</li>
                        <li className='post-li'>Ipsum</li>
                        <li className='post-li'>Domet</li>
                    </ul>
                </Card.Body>  
            </Card> 
        </div>
    </Container>
    );
}

export default BodyShorthandExample;