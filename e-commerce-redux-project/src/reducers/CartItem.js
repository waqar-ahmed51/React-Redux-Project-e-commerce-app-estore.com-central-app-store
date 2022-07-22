//Centralized State (Rdux Store) for all compoments in the application.
const InitialState = {
  CartItems: [],
  TotalCartItems: 0,
  totalPriceCartItems:0,
};
const CartItemReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "ItemAddedCart":{
      // Check if Item already in Cart so prevent it adding again to cart
    let addFlag = true;
    for (const item of state.CartItems) {
      // console.log(item.id);
      if (item.id === action.payload.id) { 
        addFlag = false;
      }
    }
    if (addFlag) {
      //Getting the quanity of all Items in cart and storing to TotalCartItems
      let TotalCartIterator=0;
      for(const item of state.CartItems){
        // Getting previous total items in cart;
        TotalCartIterator=TotalCartIterator+item.quantity;
      }
      //For new prodcut added to cart;
      ++TotalCartIterator;
      return {
        // returning a copy of orignal state
        ...state, //spreading the original state
        CartItems: [...state.CartItems, action.payload], // new CartItem array
        // Updating the cart total quantity
        TotalCartItems:TotalCartIterator,
        totalPriceCartItems:state.totalPriceCartItems+action.payload.price,
      }
    } else {
      console.log("Item already in Cart!---------");
    };
    return state;
    }
    
    case "ItemDeletedCart":{
      const itemquantity=action.payload.quantity;

      return {
        // returning a copy of orignal state
        ...state, //copying the original state
        CartItems: state.CartItems.filter((todo) => todo.id !== action.payload.id),
        TotalCartItems:state.TotalCartItems-itemquantity,
        totalPriceCartItems:state.totalPriceCartItems-action.payload.priceQuantity,
      };
    }
      
    case "IncreaseQuantity": {
      //Getting the quanity of all Items in cart and storing to TotalCartItems
      let TotalCartIterator=0;
      for(const item of state.CartItems){
        // Getting previous total items in cart;
        TotalCartIterator=TotalCartIterator+item.quantity;
      }
      //For new prodcut added to cart
      ++TotalCartIterator;
      
      const index = state.CartItems.findIndex(
        (CartItem) => CartItem.id === action.payload
      ); //finding index of the item                                                                      
      const newArray = [...state.CartItems]; //making a new array
      newArray[index].quantity++; //changing value in the new array
      // Updating the price with quantity
      newArray[index].priceQuantity=newArray[index].price*newArray[index].quantity;
      console.log("newArray-------- ",newArray[index].price);
      return {
        ...state, //copying the orignal state
        CartItems: newArray, //reassingning CartItem to new array
        TotalCartItems:TotalCartIterator,
        totalPriceCartItems:state.totalPriceCartItems+newArray[index].price,
      };
    }
    case "DecreaseQuantity": {
      //Getting the quanity of all Items in cart and storing to TotalCartItems
      let TotalCartIterator=0;
      for(const item of state.CartItems){
        // Getting previous total items in cart;
        TotalCartIterator=TotalCartIterator+item.quantity;
      }
      //For new prodcut added to cart;
      
      const index = state.CartItems.findIndex(
        (CartItem) => CartItem.id === action.payload
      ); //finding index of the item                                                                      
      const newArray = [...state.CartItems]; //making a new array
      newArray[index].quantity--; //changing value in the new array
      //Preventing quantity to be zero or negative;
      const qunatity = newArray[index].quantity;
      if (qunatity < 1) {
        newArray[index].quantity = 1;
      }else{
        --TotalCartIterator;
      }
      // Updating the price with quantity
      newArray[index].priceQuantity=newArray[index].price*newArray[index].quantity;
      return {
        ...state, //copying the orignal state
        CartItems: newArray, //reassingning CartItem to new array
        TotalCartItems:TotalCartIterator,
        totalPriceCartItems:state.totalPriceCartItems-newArray[index].price,
      };
    }
    default:
      return state;
  }
};
export default CartItemReducer;
