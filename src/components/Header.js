import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements.js";
function Header(props) {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/newArrivals" activeStyle>
            New Arrivals
          </NavLink>
          <NavLink to="/womens" activeStyle>
            Women
          </NavLink>
          <NavLink to="/mens" activeStyle>
            Mens
          </NavLink>
          <NavLink to="/electronics" activeStyle>
            Electronics
          </NavLink>
          <NavLink to="/topSeller" activeStyle>
            Top Seller
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Header;
