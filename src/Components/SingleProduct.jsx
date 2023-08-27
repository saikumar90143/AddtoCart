import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import FormatPrice from "./helper/FormatPrice";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, ShowProduct } from "./redux/ProductSlice";
const SingleProduct = () => {
  const { single, isLoading,cart} = useSelector((state) => state.product);
  console.log('cart: ', cart);
  console.log("single: ", single);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ShowProduct({ id }));
    console.log("id: ", id);
  }, [id]);

  // handlecart section
  const handleCart=(id)=>{
     dispatch(AddToCart(id))
  }

  /* Checking if the product is loading. If it is loading, it will show a loader. */
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Wrapper>
        <div className="singleproduct">
          <div className="single-image">
            <img src={single?.thumbnail} alt={single?.title}/>
          </div>
          <div className="product-details">
            <h5>
              <b>Name:</b> {single?.title}
            </h5>
            <p>
              <b>Price:</b> <FormatPrice price={single?.price} />
            </p>
            <p>
              <b>Description:</b> <span>{single?.description}</span>
            </p>
            {/* <b> Colors: {single?.colors.map((clr,index)=>{
              return <button key={index} style={{backgroundColor:clr}} className='product-color'>{clr}</button>
            })}</b> */}
            <div className="addtocart">
              <Link to="/cart">
                <button className="btn" onClick={()=>handleCart(single)}>Add To Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  width: 80%;
  box-shadow: 0 0 2px gray;
  padding: 1rem;
  .singleproduct {
    display: flex;
    justify-content: space-around;
    .single-image {
      flex: 1;
      img {
        width: 300px;
        height: 400px;
        border-radius: 5px;
      }
    }
    .product-details {
      text-align: left;
      padding: 1rem;
      flex: 1;
      h5 {
        text-transform: capitalize;
      }
      p {
        span {
          letter-spacing: 1px;
        }
      }
      /* color */
      .product-color {
        border: none;
        border-radius: 50%;
        text-indent: 100%;
        width: 15px;
        height: 15px;
        margin-left: 0.5rem;
        white-space: nowrap;
        overflow: hidden;
      }
      .addtocart {
        margin-top: 0.5rem;
        .btn {
          padding: 0.4em 0.7em;
          background: none;
          border: 2px solid #fff;
          font-size: 15px;
          color: #131313;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
          border-radius: 12px;
          background-color: #ecd448;
          font-weight: bolder;
          box-shadow: 0 2px 0 2px #000;
        }

        .btn:before {
          content: "";
          position: absolute;
          width: 100px;
          height: 120%;
          background-color: #ff6700;
          top: 50%;
          transform: skewX(30deg) translate(-150%, -50%);
          transition: all 0.5s;
        }

        .btn:hover {
          background-color: #4cc9f0;
          color: #fff;
          box-shadow: 0 2px 0 2px #0d3b66;
        }

        .btn:hover::before {
          transform: skewX(30deg) translate(150%, -50%);
          transition-delay: 0.1s;
        }

        .btn:active {
          transform: scale(0.9);
        }
      }
    }
  }
`;

export default SingleProduct;
