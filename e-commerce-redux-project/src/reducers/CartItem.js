const CartItemReducer=(state = 0, action)=>{
    switch(action.type){
        case "ItemAddedCart":
            return state+1
        case "ItemDeletedCart":
            return state-1
        default:
            return state
    }
}
export default CartItemReducer;