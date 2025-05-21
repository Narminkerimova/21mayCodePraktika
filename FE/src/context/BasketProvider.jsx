import { createContext, useState } from "react";

export const BasketContext = createContext();
function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  function addBasket(obj) {
    const addElement = basket.find((x) => x._id === obj._id);
    if (addElement) {
      addElement.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...obj, count: 1 }]);
    }
  }

  function removeBasket(id) {
    setBasket(basket.filter((x) => x._id !== id));
  }

  function decreaseBasket(obj) {
    const addElement = basket.find((x) => x._id === obj._id);
    if (addElement.count === 1) {
      return
    } else {
      addElement.count--;
      setBasket([...basket]);
    }
  }

   function totalBasket() {
   return basket.reduce((total,initial)=>total+(initial.count*initial.price),0) }


   function checkIsBasket(obj) {
    return basket.some(x=>x._id===obj._id)
   }
  return (
    <BasketContext.Provider value={{ addBasket, basket, removeBasket,decreaseBasket,totalBasket,checkIsBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
