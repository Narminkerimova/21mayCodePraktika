import {Link} from "react-router"
function Header() {
  return (
       <nav>
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
            <Link to="/basket">Basket</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Header
