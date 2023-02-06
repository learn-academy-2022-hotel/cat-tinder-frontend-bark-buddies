import React from 'react'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import dogLogo from "../assets/dogLogo.png"


const Header = () => {
    return(
      
        <Nav className="header-nav">
    <div className="Logo">
        <NavItem>
          <NavLink to="/dogindex">
            <img
              src={dogLogo}
              alt="Dog Tinder logo with outline of Dog"
              className="Dog-logo"
              />
          </NavLink>
        </NavItem>
    </div>        
    <div className="NavBar">
        <NavItem>
        <NavLink to="/dogindex" className="nav-link">
            Meet the Dogs
        </NavLink>
        </NavItem>
        <NavItem>
        <NavLink to="/dognew" className="nav-link">
            Add a New Dog
        </NavLink>
        </NavItem>
        <NavItem>
            <a
                target="blank"
                href="https://www.aspca.org/adopt-pet/adoptable-dogs-your-local-shelter"
                className="nav-link"
            >
                Adopt a Dog!
            </a>

        </NavItem>
    </div>
        </Nav>

    )
}



export default Header;