import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};

Modal.setAppElement("#root");

export default function ProductsList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

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

  function showProductModal(id) {
    setIsOpen(true);
    const selected = data.find((product) => product.id === id);
    setSelectedProduct(selected);
    console.log(selectedProduct);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="plp-product__container">
      {data.map((product) => (
        <div className="plp-product">
          <Link to={`/Product/${product.id}`}>
            <ProductCard
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              onClick={() => showProductModal(product.id)}
            ></ProductCard>
          </Link>
          <button className="show-button w3-grey w3-border" onClick={() => showProductModal(product.id)}>Show</button>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {selectedProduct && (
          <div>
            <ProductCard
              img={selectedProduct.img}
              name={selectedProduct.name}
              price={selectedProduct.price}
            ></ProductCard>
            <button onClick={closeModal}>close</button>
          </div>
        )}
      </Modal>

    </div>
  );
}
