import {Link} from "react-router-dom";

function TagCard(props){
    return(
    <div className="card3">
      <h4>Tags</h4>
      <div>
         <Link to="/travel">Travel</Link>
         <Link to="/newYork">New York</Link>
         <Link to="/london">London</Link>
         <Link to="/ikea">IKEA</Link>
    </div>
        </div>
    )
}
export default TagCard;