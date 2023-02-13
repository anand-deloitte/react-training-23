import { useState } from "react";
import ReactModal from "react-modal";
function ProductCard(props) {
  const { name, id, img, price } = props;
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
    <div div className="plp-tile col-4">
        <p>{name}</p>
        <p>${price}</p>
      <img src={img} height="200px" widgh="200px" />
      <br />
      <button className="btn btn-primary" onClick={handleShow}>SHOW</button>

      <ReactModal
        isOpen={showPopup}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <div className="plp-modal">
          <img src={img} height="300px" widgh="300px" />
          <div>
            <p className="name">{name}</p>
            <p className="desc">{id}</p>
            <p className="price">${price}</p>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
export default ProductCard;