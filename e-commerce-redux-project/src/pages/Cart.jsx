import styled from "styled-components";
import CartCheckoutContinueShoppingButtons from "../components/CartCheckoutContinueShoppingButtons";
import CartItem from "../components/CartItem";
import TotalPriceCart from "../components/TotalPriceCart";
import { useSelector } from "react-redux";

const Container = styled.div`
  margin: 0px 20px;
  min-height: calc(100vh - 59px - 279px);
`;

const NothingCart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  min-height: calc(100vh - 59px - 279px);
`;

const Cart = () => {
  //React-Redux getting the store
  const StateStore = useSelector((state) => state.CartItem);
  console.log("CartItem form redux store", StateStore);
  // Varaible to be used for Searial numbers to produts and key id to products
  let Sno = 0;

  return (
    <div>
      <Container>
        {StateStore.CartItems.map((item) => (
          <CartItem item={item} key={Sno} Sno={++Sno} />
        ))}
        {StateStore.CartItems.length > 0 ? (
          <div>
            <TotalPriceCart />
            <CartCheckoutContinueShoppingButtons />
          </div>
        ) : (
          <NothingCart>
            <h1>Nothing In Cart!</h1>
            <h4>Go back to add items to cart.</h4>
          </NothingCart>
        )}
      </Container>
    </div>
  );
};

export default Cart;
