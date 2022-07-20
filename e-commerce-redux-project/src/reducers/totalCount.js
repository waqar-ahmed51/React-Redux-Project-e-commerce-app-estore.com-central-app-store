const totalCount = (state = 10, action) => { 
    switch(action.type){
        case 'number':
            return state+"Total Count";
        default:
            return state;
    }
}

export default totalCount;