import Post from "./Post";

function PostsCard(props) {
  const postsData=[
    {
      name:'Lorem',
      desc:'Sed mattis nunc',
      imageUrl:'images/post1.jpg'
    },
    {
      name:'Lorem',
      desc:'Sed mattis nunc',
      imageUrl:'images/post2.jpg'
    },
    {
      name:'Lorem',
      desc:'Sed mattis nunc',
      imageUrl:'images/post3.jpg'
    },
    {
      name:'Lorem',
      desc:'Sed mattis nunc',
      imageUrl:'images/post4.jpg'
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
export default PostsCard;
