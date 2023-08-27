import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "./helper/FormatPrice";
const Products = ({product}) => {

  return (
    <>
      <Wrapper>
        <div className="products">
          <div className="image">
            <img src={product?.thumbnail} alt={product?.title} loading="lazy" />
          </div>
          <div className="product-details">
            <h5>{product?.title}</h5>
            <p>
              <FormatPrice price={product?.price} />
            </p>
            <b style={{textTransform:"capitalize"}}>{product?.brand}</b>
          </div>
          <div className="button">
            <Link to={`/singleproduct/${product.id}`}>
              <button>
                <div className="default-btn">
                  <svg
                    className="css-i6dzq1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    strokeWidth="2"
                    stroke="#FFF"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle r="3" cy="12" cx="12"></circle>
                  </svg>
                  <span>Quick View</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .products {
    box-shadow: 0 0 2px gray;
    padding: 10px;
    .image {
      img {
        width: 250px;
        height: 250px;
        object-fit: cover;
      }
    }

    .product-details {
      text-align: left;
      b {
        font-weight: 600;
        color:gray;
      }
      h5{
        text-transform: capitalize;
      }
    }
    .button {
        margin-top: 0.5rem;
      button {
        position: relative;
        overflow: hidden;
        outline: none;
        cursor: pointer;
        border-radius: 50px;
        background-color: hsl(255deg 50% 40%);
        border: solid 2px hsl(50deg 100% 50%);
        font-family: inherit;
      }

      .default-btn {
        background-color: hsl(255deg 50% 40%);
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        transition: all 0.3s ease;
        width: 150px;
      }

      .default-btn span {
        color: hsl(0, 0%, 100%);
      }

      .hover-btn span {
        color: hsl(50deg 100% 50%);
      }
    }
  }
`;
export default Products;
