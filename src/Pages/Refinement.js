const Refinement = () => {
    return (
        <div className="refinement-bar">
            <div className="reset-bar">
                <div className="secondary-bar">
                    <button className="reset">Reset</button>
                </div>
                <div className="category">
                    <div className="refinements">
                        <div className="refinement-cat">
                            <div className="header">
                                <h2>Category</h2>
                            </div>
                            <div className="cat-body">
                                <ul className="content-val">
                                    <li className="cat-list">
                                        <button><input type="checkbox" id="electronics" name="electronics" value="electronics" />
                                            <label for="electronics"> Electronics</label></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="refinement-price">
                            <div className="header">
                                <h2>Price</h2>
                            </div>
                        </div>
                        <div className="refinement-brand">
                            <div className="header">
                                <h2>Brand</h2>
                            </div>
                        </div>
                        <div className="refinement-size">
                            <div className="header">
                                <h2>Size</h2>
                            </div>
                        </div>
                        <div className="refinement-type">
                            <div className="header">
                                <h2>Type</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Refinement