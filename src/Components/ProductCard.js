import { Link } from "react-router-dom";

function ProductCard(props) {
  const { name, id, desc, price } = props;
  return (
    <div className="plp-card">
      <Link to={`/productDetails/${id}`}>
        <img src="/images/Prod.jpg" alt="posts" />
        <p>{name}</p>
        <p>{desc}</p>
        <p>${price}</p>
      </Link>

      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
    </div>
  );
}
export default ProductCard;
