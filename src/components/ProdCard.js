import { Link } from "react-router-dom";
import { useState } from "react";
import ReactModal from "react-modal";
function ProdCard(props) {
  const { name, id, desc, price } = props;
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => setShowPopup(false);
  const handleShow = () => setShowPopup(true);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "12px",
      width: "500px",
    },
  };
  return (
    <div div className="plp-card">
      <Link to={`/productDetails/${id}`}>
        <img src="/images/product1.jpg" alt="products" />
        <p className="name">{name}</p>
        <p className="desc">{desc}</p>
        <p className="price">${price}</p>
      </Link>
      <button onClick={handleShow}>Show Product</button>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>

      <ReactModal
        isOpen={showPopup}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <div className="plp-modal">
          <img src="/images/product1.jpg" alt="products" />
          <div>
            <p className="name">{name}</p>
            <p className="desc">{desc}</p>
            <p className="price">${price}</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </div>
        <Link to={`/productDetails/${id}`} className="anc">
          Click here to open Product Details Page
        </Link>
      </ReactModal>
    </div>
  );
}
export default ProdCard;
