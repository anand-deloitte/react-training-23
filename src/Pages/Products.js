import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom";
import Refinement from "./Refinement";
import Modal from "react-modal";

Modal.setAppElement("#root");

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

const Products = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        setLoading(true);
        // sample get call for get product by id
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

    const showModal = (id) => {
        setIsOpen(true);
        const selected = data.find((product) => product.id === id);
        setSelectedProduct(selected);
        console.log(selectedProduct);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className="product-grid-header row">
                <div className="product-count">
                    <span>{data.length} Results</span>
                </div>
                <div className="filter">
                    <select className="filter-opt">
                        <option className="best-match">
                            Best Matches
                        </option>
                        <option className="low-high">
                            Price Low to High
                        </option>
                    </select>
                </div>
            </div>
            <div className="row">
                <Refinement />
                <div className="product-grid">
                    {data.map((item, index) => (<>
                        <div className="products-list" key={index}>
                            <Link to={`/Product/${item.id}`} className="product-columns">
                                <ProductCard
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    price={item.price} onClick={() => showModal(item.id)} />
                            </Link>
                            <button className="show-btn" onClick={() => showModal(item.id)} >Show</button>
                        </div>
                    </>))}
                </div>
                <Modal isOpen={isOpen} style={customStyles}>
                    {selectedProduct && (
                        <div className="modal-container">
                            <ProductCard
                                img={selectedProduct.img}
                                name={selectedProduct.name}
                                price={selectedProduct.price}
                            />
                            <button onClick={closeModal}>close</button>
                        </div>
                    )}
                </Modal>
            </div>
        </>
    )
}

export default Products