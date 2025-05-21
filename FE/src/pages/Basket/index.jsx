import { useContext } from "react";
import { BasketContext } from "../../context/BasketProvider";
import { Link } from "react-router";
import { FaCircleInfo } from "react-icons/fa6";

function Basket() {
  const {
    addBasket,
    basket,
    removeBasket,
    decreaseBasket,
    totalBasket,
  } = useContext(BasketContext);

  if (basket.length === 0) {
    return <p>Hele basketde hecne yoxdur</p>;
  }
  return (
    <>
      <title>Basket</title>
      <h1>Total: {totalBasket()}</h1>
      <div className="cards">
        {basket.map((item) => (
          <div className="card" key={item._id}>
            <div className="card_image">
              <img src={item.image} alt="product" />
            </div>
            <div className="card_title">
              <div className="card_name">{item.name}</div>
              <div className="card_price">{item.price}</div>
            </div>
            <div className="card_buttons">
              <button onClick={() => addBasket(item)}>+</button>
              <div className="basket_count">Count:{item.count}</div>
              <button onClick={() => decreaseBasket(item)}>-</button>
              <Link to={`detail/${item._id}`}>
                <button>
                  <FaCircleInfo />
                </button>
              </Link>
              <button onClick={() => removeBasket(item._id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Basket;
