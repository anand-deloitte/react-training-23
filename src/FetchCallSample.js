import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Services = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(false);
  const [price, setPrice] = useState(false);
  const [name, setName] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (name, image, price) => {
    setShow(true);
    setImage(image);
    setPrice(price);
    setName(name);
  }

  useEffect(() => {
    setLoading(true);
    // https://63e22e07ad0093bf29c9980e.mockapi.io/teststore/plp/1  // sample get call for get product by id
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

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="row">
      <div className="col">
      <img className="tile-image"
      src={image} />
      </div>
      <div className="col">
      <div>{name}</div>
      <div>{price}</div>
      </div>
      </div>

      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
      Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
      Save Changes
      </Button>
      </Modal.Footer>
    </Modal>
      <h1>Data:</h1>
      <div className="row">
        <div className="produt-grid" aria-hidden="false">
            {data.map((tile) => {
                return (
                  <div className="col-3">
                    <div className="product" data-pid="samsung-hl72a650M">
                      <div className="product-tile">
                          <div className="image-container">
                              <a href="/s/RefArch/electronics/televisions/projection/samsung-hl72a650M.html?lang=en_US">
                                  <img className="tile-image"
                                      src={tile.img} />
                              </a>
                                <Button variant="primary" onClick={() => handleShow(tile.name, tile.img, tile.price)} >
                                  QuickShop
                                </Button>
                          </div>
                          <div className="tile-body">
                              <div className="pdp-link">
                                  <a className="link"
                                      href="/s/RefArch/electronics/televisions/projection/samsung-hl72a650M.html?lang=en_US">{tile.name}</a>
                              </div>
                              <div className="price">
                                  <span>
                                      <span className="sales">
                                          <span className="value" content="2249.99">
                                              {tile.price}
                                          </span>
                                      </span>
                                  </span>
                              </div>
                              <div className="row tile-body-footer">
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>  
              );
          })}
        </div>
      </div>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Services;
