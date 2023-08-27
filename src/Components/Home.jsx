import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./redux/ProductSlice";
import Loader from "./Loader";
const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);
  
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Wrapper>
        <h3>Products</h3>
        <div className="home">
          {products.length>0&&products?.map((product, index) => {
            return <Products key={index} product={product} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .home {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.5rem;
  }
`;

export default Home;
