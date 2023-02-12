import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function TileGrid(props) {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
            <div className="product-tile">
                <div className="img-container">
                    <img className="img" src={props.products.img} alt="alt"></img>
                </div>
                <div className="tilebody-container">
                    <button onClick={handleShow} className="show-product">Show</button>
                    {props.products.id}
                    <div className="pdp-link">
                    <Link to={`pdp/${props.products.id}`}>{props.products.name}</Link>
                    </div>
                    <div className="price">${props.products.price}</div>
                </div>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.products.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="img-container">
                            <img className="img" src={props.products.img} alt="alt"></img>
                        </div>
                        <div className="tilebody-container">
                            {props.products.id}
                            <div className="pdp-link">
                                {props.products.name}
                            </div>
                            <div className="price">${props.products.price}</div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
    );
}

export default TileGrid;