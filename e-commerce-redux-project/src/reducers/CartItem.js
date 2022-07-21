const CartItemReducer=(state = [], action)=>{
    switch(action.type){
        case "ItemAddedCart":
            return [
                ...state,action.payload
            ]
        case "ItemDeletedCart":
            return state.filter(item =>item.id !==action.payload.id)
        default:
            return state
    }
}
export default CartItemReducer;