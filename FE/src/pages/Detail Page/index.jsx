import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { RequestContext } from "../../context/RequestProvider";
import { FaShoppingBasket } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

function DetailPage() {
  const { url } = useContext(RequestContext);
  const { id } = useParams();
  const [detail, setDetail] = useState({})

  async function getElementById(url, id) {
    try {
      const res = await fetch(url + id);
      const data = await res.json();
      setDetail(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getElementById(url,id);
  }, []);

  return (
    <>
      <title>Detail Page</title>
      <div className="cards">
        <div className="card" key={detail._id}>
          <div className="card_image">
            <img src={detail.image} alt="product" />
          </div>
          <div className="card_title">
            <div className="card_name">{detail.name}</div>
            <div className="card_price">{detail.price}</div>
          </div>
          <div className="card_buttons">
            <button>
              <FaShoppingBasket />
            </button>
            <button>
              <FaHeart />
            </button>
            <button>
              <FaCircleInfo />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
