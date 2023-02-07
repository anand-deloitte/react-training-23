function NavProps(props){
    return(
        <div>
          <center>
            <h1>This is {props.page} Page</h1>
            <img src={props.imgUrl} alt="" />
            </center>
        </div>
    )
}
export default NavProps