import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Services = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <div className="plp-header">
        <h1>{props.page}</h1>
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="plp">
        <div className="row">
          {data.map((prod) => (
            <ProductCard {...prod} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
