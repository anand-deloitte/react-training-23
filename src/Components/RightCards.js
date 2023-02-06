import PostCard from "./PostCard"
import Tags from "./Tags"

function RightCards (props){
 return (
    <div>
<div className="container">
    <img src={props.image} alt="" />
    <div className="container-heading">
        <h4><b>{props.name}</b></h4>
        <p>
            {props.content}
        </p>
    </div>

</div>
<PostCard />
<Tags/> 
</div>
 );

}

export default RightCards;