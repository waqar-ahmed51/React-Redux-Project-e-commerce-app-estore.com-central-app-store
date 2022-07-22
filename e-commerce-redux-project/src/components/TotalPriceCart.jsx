import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const TotalTitle = styled.h1`
  color: #3e3e3e;
  border-right: 1px solid black;
  padding-right: 20px;
  font-size: 25px;
`;
const TotalPrice = styled.h1`
  margin-left: 20px;
`;

const TotalItems = styled.h1`
  flex: 8;
  font-size: 20px;
`;

const TotalPriceContainer = styled.div`
  background-color: #e7e6e6;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  &:hover {
    background-color: black;
    transition: all 0.5s ease;
  }
  &:hover ${TotalTitle} {
    border-right: 1px solid white;
    color: white;
  }
  &:hover ${TotalPrice} {
    color: white;
  }
  &:hover ${TotalItems} {
    color: white;
  }
`;
const TotalPriceCart = () => {
  //React-Redux getting the store
  const StateStore = useSelector((state) => state.CartItem);
  return (
    <TotalPriceContainer>
      <TotalItems>
        ( {StateStore.TotalCartItems} item
        {StateStore.TotalCartItems > 1 ? "s" : ""} )
      </TotalItems>
      <TotalTitle>Total </TotalTitle>
      <TotalPrice>{StateStore.totalPriceCartItems} PKR</TotalPrice>
    </TotalPriceContainer>
  );
};

export default TotalPriceCart;
