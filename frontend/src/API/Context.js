import React, { createContext, useState, useEffect } from "react";

export const CartContent = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [total, setTotal] = useState();
  const [tax, setTax] = useState(10);
  const [subTotal, setSubTotal] = useState();
  const [amt, setAmt] = useState("");

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <CartContent.Provider value={{ cart, setCart,activeIndex, setActiveIndex, total, setTotal, tax, setTax, subTotal, setSubTotal,amt, setAmt}}>
      {children}
    </CartContent.Provider>
  );
};

export default Context;
