import { Link } from "react-router";
import { BasketContext } from "../../context/BasketProvider";
import { useContext, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { FaBasketShopping } from "react-icons/fa6";
import "./style.css";

function Header() {
  const { basket } = useContext(BasketContext);
  const [isnavopen, setisnavopen] = useState(false)
  return (
    <header>
      <div className="container_website">
        <nav>
          <MdOutlineMenu className="menu_btn_nav" onClick={()=>{ setisnavopen(!isnavopen)}}/>
          <div className="nav_logo">Aranoz.</div>
          <ul className="nav_list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/adminadd">Admin Add</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link> {basket.length}
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
          <div className="nav_icons">
            <IoSearch />
            <GoHeart />
            <FaBasketShopping />
          </div>
        </nav>
      {isnavopen ? <nav className="hidden_nav">
          <ul>
             <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/adminadd">Admin Add</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link> {basket.length}
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
        </nav> : ""}  
      </div>
    </header>
  );
}

export default Header;
