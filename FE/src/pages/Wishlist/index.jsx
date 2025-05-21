import { useContext } from "react";
import { BasketContext } from "../../context/BasketProvider";
import { Link } from "react-router";
import { FaCircleInfo } from "react-icons/fa6";
import { WishListContext } from "../../context/WishListProvider";

function Wishlist() {
  const {wish,removeWish,totalWish} = useContext(WishListContext);

  if (wish.length === 0) {
    return <p>Hele wishlistinizde hecne yoxdur</p>;
  }
  return (
    <>
      <title>WishList</title>
      <h1>Total: {totalWish()}</h1>
      <div className="cards">
        {wish.map((item) => (
          <div className="card" key={item._id}>
            <div className="card_image">
              <img src={item.image} alt="product" />
            </div>
            <div className="card_title">
              <div className="card_name">{item.name}</div>
              <div className="card_price">{item.price}</div>
            </div>
            <div className="card_buttons">
              <Link to={`detail/${item._id}`}>
                <button>
                  <FaCircleInfo />
                </button>
              </Link>
              <button onClick={() => removeWish(item._id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Wishlist;
