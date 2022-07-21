import {
  // FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductInfoGeneral = styled.div`
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #000000;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProductTitle = styled.h3`
  color: white;
`;
const MainFeatures = styled.h3`
  font-size: 11px;
  color: white;
  margin: 2px;
`;
const ProductPrice = styled.h3`
  color: white;
  font-size: 13px;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  margin: 5px;
  height: 350px;
  background-color: #e6e6e6;
  position: relative;
  min-width: 300px;
  max-width: 300px;
  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${ProductTitle} {
    transition: all 0.3s ease;
    transform: scale(1.3);
    color: black;
  }
  &:hover ${MainFeatures} {
    transition: all 0.3s ease;
    transform: scale(1.3);
    color: black;
  }
  &:hover ${ProductPrice} {
    transition: all 0.3s ease;
    transform: scale(1.3);
    color: black;
  }
  &:hover ${ProductInfoGeneral} {
    transition: all 0.5s ease;
    background-color: white;
    border: 1px solid black;
    /* background-color: transparent; */
  }
`;

const Image = styled.img`
  height: 85%;
  width: 100%;
  /* padding-bottom: 100px; */
  object-fit: cover;
  position: absolute;
  top: 0;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  /* border-radius: 50%; */
  border: 1px solid black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid white;
    background-color: #000000;
    color: white;
    transform: scale(1.4);
  }
`;

const Product = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Image src={items.img} />
      <ProductInfoGeneral>
        <ProductTitle>{items.title}</ProductTitle>
        <MainFeatures>{items["Main Features"]}</MainFeatures>
        <ProductPrice>{items.price} PKR</ProductPrice>
      </ProductInfoGeneral>
      <Info>
        {/* <Icon onClick={() => props.addItemCart(item)}> */}
        <Icon
          onClick={() =>
            dispatch({
              type: "ItemAddedCart",
              payload: items,
            })
          }
        >
          <ShoppingCartOutlined />
        </Icon>
        <Link to={"/productview/" + items.id} className="CustomRouterLink">
          <Icon>
            <SearchOutlined />
          </Icon>
        </Link>
      </Info>
    </Container>
  );
};

export default Product;
