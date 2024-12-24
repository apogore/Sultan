// CartHeader.jsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import products from "@/public/mini-card/product.json"; 
import { getCartData } from '@shared/function/getCardData';
import "./header-cart.scss"; 

const CartHeader = () => {
    const [totalPrice, setTotalPrice] = useState(0);
  
    useEffect(() => {
      const cartData = getCartData();
  
      const calculateTotalPrice = () => {
        return Object.entries(cartData).reduce((total, [id, amount]) => {
          const product = products.find((p) => p.id === Number(id));
          if (product) {
            return total + product.price * amount;
          }
          return total;
        }, 0);
      };
  
      setTotalPrice(calculateTotalPrice());
    }, []);
  
    return (
      <div className="header-cart">
        <img src="/icons/cart-icon.svg" alt="Корзина" width={50} height={38} />
        <Link href="/shared/cart">
          <div>
            <p className="header-signature">Корзина</p>
            <p>
              <span className="bold-text">{totalPrice.toFixed(2)} ₸</span>
            </p>
          </div>
        </Link>
      </div>
    );
};

export default CartHeader;
