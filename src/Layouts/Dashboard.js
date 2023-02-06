import Blog from "../component/Blog";
import Intro from "../component/Intro";
import {blogData, blogTwoData, introData} from "../component/Constants";

const Dashboard = () => {
    return (
        <>
        <div className="w3-row">
            <Blog data={blogData}/>
            <Intro data={introData}/>
            <Blog data={blogTwoData}/>
      </div>
        </>
    )
}

export default Dashboard