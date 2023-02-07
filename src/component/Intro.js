import workshop from "../assets/workshop.jpg";
import gondol from "../assets/gondol.jpg";
import skies from "../assets/skies.jpg";
import rock from "../assets/rock.jpg";

const Intro = (props) => {
    return (
        <div className="intro-container">
            <div className="intro-container__item">
                <img src={props.data.image} className="intro-img" alt="Avatar" />
                <div className="intro-container__item-grp">
                    <h4><b>{props.data.title}</b></h4>
                    <p>{props.data.description}</p>
                </div>
            </div>
            <hr />
            <div className="intro-container__posts">
                <div className="popular-posts-title">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="popular-posts-list">
                    <li className="list-one">
                        <img src={workshop} alt="" className="list-img" />
                        <span className="list-title">Lorem</span><br />
                        <span className="list-desc">Sed mattis nunc</span>
                    </li>
                    <li className="list-two">
                        <img src={gondol} alt="" className="list-img" />
                        <span className="list-title">Lorem</span><br />
                        <span className="list-desc">Sed mattis nunc</span>
                    </li>
                    <li className="list-three">
                        <img src={skies} alt="" className="list-img" />
                        <span className="list-title">Lorem</span><br />
                        <span className="list-desc">Sed mattis nunc</span>
                    </li>
                    <li className="list-four">
                        <img src={rock} alt="" className="list-img" />
                        <span className="list-title">Lorem</span><br />
                        <span className="list-desc">Sed mattis nunc</span>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="intro-container__tags">
                <div className="popular-posts-title">
                    <h4>Tags</h4>
                </div>
                <div className="tags-data">
                    <p className="tags">
                        <span className="tags-info first-tag">Travel</span>
                        <span className="tags-info">New York</span>
                        <span className="tags-info">London</span>
                        <span className="tags-info">IKEA</span>
                        <span className="tags-info">NORWAY</span>
                        <span className="tags-info">DIY</span>
                        <span className="tags-info">Ideas</span>
                        <span className="tags-info">Baby</span>
                        <span className="tags-info">Family</span>
                        <span className="tags-info">News</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro