import {Link} from "react-router-dom";

function TagCard(props){
    return(
    <div className="card3">
      <h4>Tags</h4>
      <div>
         <Link to="/travel">Travel</Link>
         <Link to="/food">Food</Link>
         <Link to="/family">Family</Link>
         <Link to="/dance">Dance</Link>
    </div>
        </div>
    )
}
export default TagCard;