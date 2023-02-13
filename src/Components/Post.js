function Post(props) {
    const {imageUrl, name, desc} = props;
    return (

          <li>
            <img src={imageUrl} alt="posts" />
            <div>
              <span>{name}</span>
              <br />
              <span>{desc}</span>
            </div>
          </li>
    );
  }
  export default Post;