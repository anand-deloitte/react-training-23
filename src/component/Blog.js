import { useState } from "react";

const Blog = (props) => {
    const [hasComment] = useState([]);
    const [comments, setComments] = useState('');
    const [isComment, setComment] = useState(0);
    const [showForm, setShowForm] = useState(false);
    let nextId = 0;

    const handleComment = () => {
        setShowForm(true);
    }
    
    const showForms = (e) => {
        e.preventDefault();
        setComment(isComment + 1);
        setShowForm(false);
        setComments('');
        hasComment.push({
            id: nextId++,
            comments: comments,
        });
    }

    return (
        <div className="blog-container" key={props.data.id}>
            <div className="blog-container__item">
                <img src={props.data.image} className="blog-img" alt="Nature" />
                <div className="blog-container__item-grp">
                    <h3><b>{props.data.title}</b></h3>
                    <h5>{props.data.subtitle} <span className="date-info">{props.data.date}</span></h5>
                </div>
                <div className="blog-container__item-grp">
                    <p>{props.data.description}</p>
                    <div className="blog-container-row">
                        <div className="read-more">
                            <p>
                                <button className="read-more-btn">
                                    <b>READ MORE »</b>
                                </button>
                            </p>
                        </div>
                        <div className="comment">
                            <p>
                                <span className="comment-item" onClick={handleComment}><b>Comments </b><span className="comment-tag">{isComment}</span></span>
                            </p>
                        </div>
                        {showForm && <form><input className="comment-ele"
                            value={comments}
                            onChange={e => setComments(e.target.value)}
                        /><button className="read-more-btn" onClick={(e) => showForms(e)}>Submit</button><ul>
                                {hasComment.map(item => (
                                    <li key={item.id}>{item.comments}</li>
                                ))}
                            </ul></form>}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Blog