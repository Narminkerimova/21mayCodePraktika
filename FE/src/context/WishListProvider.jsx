import { createContext, useState } from "react";

export const WishListContext = createContext();
function WishList({ children }) {
  const [wish, setWish] = useState([]);

  function addWish(obj) {
    const addElement = wish.find((x) => x._id === obj._id);
    if (addElement) {
      return;
    } else {
      setWish([...wish, { ...obj }]);
    }
  }

  function removeWish(id) {
    setWish(wish.filter((x) => x._id !== id));
  }

  function totalWish() {
    return wish.reduce((total, initial) => total + initial.price, 0);
  }

  function checkIsWish(obj) {
    return wish.some((x) => x._id === obj._id);
  }

  return (
    <WishListContext.Provider
      value={{ addWish, wish, removeWish, totalWish, checkIsWish }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export default WishList;
