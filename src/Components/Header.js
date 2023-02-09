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
            Womens
          </NavLink>
          <NavLink to="/mens" activeStyle>
            Mens
          </NavLink>
          <NavLink to="/electronics" activeStyle>
            Electronics
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Header;
