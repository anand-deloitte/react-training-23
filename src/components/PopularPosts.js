import Post from "./Post";

function PopularPosts(props) {
  const postsData=[
    {
      name:'Lorem',
      desc:'Sed mattis nunc',
      imageUrl:'images/gondol.jpg'
    },
    {
      name:'Lorem',
      desc:'Sed mattis nunc',
      imageUrl:'images/rock.jpg'
    },
    {
      name:'Lorem',
      desc:'Sed mattis nunc',
      imageUrl:'images/skies.jpg'
    },
    {
      name:'Lorem',
      desc:'Sed mattis nunc',
      imageUrl:'images/workshop.jpg'
    }
  ]; 
  return (
    <div className="card2">
      <h4>Popular Posts</h4>
      <ul>
        {postsData.map(post=> <Post {...post}/>)}
      </ul>
    </div>
  );
}
export default PopularPosts;
