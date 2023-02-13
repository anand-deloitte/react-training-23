import img from "../assets/samsung-tv.jpg";

const ProductCard = (props) => {
    const { name, id, price } = props;
    return (
        <>
            <div className="product-columns-data">
                <div className="product">
                    <div className="product-tile">
                        <div className="img-container">
                            <a href={`/Product/${id}`}>
                                <img src={img} alt={name} className="tile-img" />
                            </a>
                        </div>
                        <div className="tile-body">
                            <div className="product-name">
                                <a href={`/Product/${id}`} className="name-link">{name}</a>
                            </div>
                            <div className="product-price">
                                <span>
                                    <span className="sales">
                                        <span className="sales-value">${price}</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard