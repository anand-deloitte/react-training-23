import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://63e3eea365ae4931771adf9f.mockapi.io/api/get/products/${params.id}`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
        console.log(json);
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
      <ProductCard {...data} />
    </>
  );
}
export default ProductDetails;
