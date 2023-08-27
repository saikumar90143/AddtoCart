import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import FormatPrice from "./helper/FormatPrice";
import { AddToCart,decreaseCartItem,getTotal,RemoveCartItem } from "./redux/ProductSlice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate=useNavigate()
  const { loading, cart ,cartTotal,cartItemQuantity} = useSelector((state) => state.product);
  console.log('cartItemQuantity: ', cartItemQuantity);
  console.log('cartTotal: ', cartTotal);
  console.log("cart: ", cart);
  const dispatch = useDispatch();

  const handleIncrease=(quantity)=>{
    dispatch(AddToCart(quantity))
  }

  const handleDecrease=(Decrese)=>{
    dispatch(decreaseCartItem(Decrese))
  }

  if(cart.length<=0){
   navigate('/')
  }

  const handleRemove=(item)=>{
    dispatch(RemoveCartItem(item))
  }

  useEffect(()=>{
     dispatch(getTotal())
  },[cart,dispatch])
  return (
    <>
      <Wrapper>
        <section className="cart">
         {loading&&<h2>Loading...</h2>}
          {cart?.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <div className="item">

                <img src={item?.thumbnail} alt={item?.title} />
                <button onClick={()=>handleRemove(item)}>Remove Item</button>
                </div>
                <b>
                  <FormatPrice price={item?.price} />
                </b>
                <p>
                  <button onClick={() => handleDecrease(item.id)}>-</button>{" "}
                <strong>
                   {item?.cartQuantity}
                  </strong> 
                  <button onClick={() => handleIncrease(item)}>+</button>
                </p>
                <b>
                  <FormatPrice price={item?.price * item?.cartQuantity} />
                </b>
              </div>
            );
          })}
        </section>
        <hr/>
        <div className="total">
          <p><strong>TOTAL:</strong> ₹{cartTotal}</p>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  width: 100%;
  .cart {
    gap: 2rem;
    .cart-item {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2rem;
      button{
        padding: 4px 6px;
      }
      .item{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      img {
        width: 80px;
      }
    }
  }

  .total{
   
   float: right;
   margin-right: 7rem;
  }
`;

export default Cart;
