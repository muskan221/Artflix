import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";

const Navbar = () => {

  {/* useNavigate() is used to navigate to the page when clicked on the particular component(home,signup,about). 
    For example, when we click on the about component we want to display
    the contents of the about section. Hence we use "useNavigate"*/}
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <h3 className="Logo">Artflix</h3>

        <ul className="nav-links">

          <Link to = "/" className="home" onClick={() => navigate('/')}>
            <li>Home</li>
          </Link>

          <Link to = "/about" className="about" onClick={() => navigate('about')}>
            <li >About</li>
          </Link>

          <Link to = "/signup" className="signup" onClick={() => navigate('signup')}>
            <li>Sign Up</li>
          </Link>

          <Link to = "/cart" className="cart" onClick={() => navigate('cart')}>
            <li><BsFillCartPlusFill /></li>
          </Link>
          
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;