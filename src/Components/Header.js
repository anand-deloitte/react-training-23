import {  Link } from 'react-router-dom';


function Header(){
    return(
    <div>
    <nav class="navbar">
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/blog2">Blog2</Link></li>
    <li><Link to="/blog3">Blog3</Link></li>
    </ul>
</nav>
</div>
    );
}

export default Header;