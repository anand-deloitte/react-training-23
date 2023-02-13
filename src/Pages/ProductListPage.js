import Products from "./Products";
import "./Products.css";

const ProductListPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="tab-content">
                    <div className="tab-pane">
                        <Products />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductListPage