const CartItemReducer=(state = [], action)=>{
    switch(action.type){
        case "ItemAddedCart":
            return [
                ...state,action.payload
            ]
        case "ItemDeletedCart":
            return state.filter(item =>item.id !== action.payload)
        default:
            return state
    }
}
export default CartItemReducer;