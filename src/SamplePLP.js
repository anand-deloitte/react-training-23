import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container, Card, Nav, Button, Modal} from 'react-bootstrap';
import './SamplePLP.css';

const Services = () => {
const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const [isOpen, setIsOpen] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);

useEffect(() => {
setLoading(true);
fetch("https://63e22e07ad0093bf29c9980e.mockapi.io/teststore/plp")
    .then((res) => res.json())
    .then((res) => {
    setData(res);
    setLoading(false);
    })
    .catch((err) => {
    setError(err);
    setLoading(false);
    });
}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;
if (!data) return null;

const showModal = (item) => {
setIsOpen(true);
setSelectedProduct(item);
}

const closeModal = () => {
setIsOpen(false);
}
return (
    
    <div>
        <h1>Products</h1>
        <Container>
            <Nav className="col-2 left-nav">
                <ul className="nav-bar">Categories
                    <li>Men</li>
                    <li>Women</li>
                    <li>Children</li>
                </ul>
            </Nav>
            <div className="d-flex prod-container col-10">
                {data.map(item => (
                    <>
                    <Card className='product-card col-3'>
                        <Card.Img src={item.img} height="200" width="200" />  
                        <Card.Body>  
                            <Card.Title>{item.name}</Card.Title>  
                            <Card.Subtitle>Price: $ {item.price}</Card.Subtitle> 
                            <Button variant="primary" className="quickView" onClick={() => showModal(item)}>View product</Button>  
                        </Card.Body>  
                    </Card>
                    </>
                ))}
            </div>
        </Container>
        
        <Modal show={isOpen}>
            {selectedProduct && (
                <>
                    <Modal.Dialog>
                        <Modal.Header closeButton onClick={closeModal}>
                        <Modal.Title>{selectedProduct.name}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                        <img src={selectedProduct.img} alt='test' />
                            <p className="price">Price: $ {selectedProduct.price}</p>
                        </Modal.Body>
                    </Modal.Dialog>
                </>
            )}
        </Modal>
    </div>
);
};

export default Services;