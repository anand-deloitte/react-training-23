import React, { useState, useEffect } from "react";
import TileGrid from "./ProductTileCard";
import "./ProductTile.css";

const ProductTile = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://63e8da2d4f3c6aa6e7c3e0c0.mockapi.io/plpLayout")
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
        <div className="plp-cards">
            {data.map((item) =>
                <TileGrid products={item}></TileGrid>
            )}
        </div>
    );
};

export default ProductTile;