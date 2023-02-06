import Blogs from '../components/Blogs';
import blogs from "../static/data"


export default function NewYork() {
    return (
        <div>
            <h1> NewYork</h1>;
            <div className="w3-col l8 s12">
                <Blogs title={blogs.blog3.title} image={blogs.blog3.image} desc={blogs.blog3.desc} date={blogs.blog3.date} />
                <hr />
                <Blogs title={blogs.blog4.title} image={blogs.blog4.image} desc={blogs.blog4.desc} date={blogs.blog4.date} />
            </div>
        </div>
    )

}
