import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Footer from "../Blogs/Components/Footer/Footer";
import ProductCard from "./ProductCard";

function ProductDetail(products) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
    let { productId } = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(`https://63e22e07ad0093bf29c9980e.mockapi.io/teststore/plp/${productId}`)
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

    return (<>
      <div>
        <h1>Product Detail Page</h1>
        <p>Product ID: {productId}</p>
        <ProductCard img={data.img} name={data.name} price={data.price}/>
      </div>
      <Footer/></>
    );
  }
  
export default ProductDetail;
