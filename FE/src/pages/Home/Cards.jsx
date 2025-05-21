import React, { useContext } from 'react'
import { RequestContext } from '../../context/RequestProvider'
import { FaShoppingBasket } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import {Link} from "react-router"
import "./style.css"

function Cards() {
    const {product} = useContext(RequestContext)
  return (
    <>
    <div className="cards">
        {
            product.map((item)=>(
                <div className="card" key={item._id}>
                    <div className="card_image">
                        <img src={item.image} alt="product" />
                    </div>
                    <div className="card_title">
                        <div className="card_name">{item.name}</div>
                        <div className="card_price">{item.price}</div>
                    </div>
                    <div className="card_buttons">
                        <button><FaShoppingBasket /></button>
                        <button><FaHeart /></button>
                        <Link to={`detail/${item._id}`}>
                        <button><FaCircleInfo /></button>
                        </Link>
                    </div>
                </div>
            ))
        }
    </div>
    
    
    </>
  )
}

export default Cards
