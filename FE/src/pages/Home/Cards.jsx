import React, { useContext } from "react";
import { RequestContext } from "../../context/RequestProvider";
import { FaShoppingBasket } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
import { Link } from "react-router";
import { FaHeartBroken } from "react-icons/fa";
import "./style.css";
import { BasketContext } from "../../context/BasketProvider";
import { WishListContext } from "../../context/WishListProvider";

function Cards() {
  const { product } = useContext(RequestContext);
  const { addBasket, checkIsBasket, removeBasket } = useContext(BasketContext);
  const { addWish, checkIsWish, removeWish } = useContext(WishListContext);
  return (
    <>
      <div className="cards">
        {product.map((item) => (
          <div className="card" key={item._id}>
            <div className="card_image">
              <img src={item.image} alt="product" />
            </div>
            <div className="card_title">
              <div className="card_name">{item.name}</div>
              <div className="card_price">{item.price}</div>
            </div>
            <div className="card_buttons">
              {checkIsBasket(item) ? (
                <button onClick={() => removeBasket(item._id)}>
                  <IoBagRemove />
                </button>
              ) : (
                <button onClick={() => addBasket(item)}>
                  <FaShoppingBasket />
                </button>
              )}
              {checkIsWish(item) ? (
                <button onClick={() => removeWish(item._id)}><FaHeartBroken /></button>
              ) : (
                <button onClick={() => addWish(item)}>
                  <FaHeart />
                </button>
              )}

              <Link to={`/detail/${item._id}`}>
                <button>
                  <FaCircleInfo />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
