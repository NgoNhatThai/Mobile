import initialState from "./initialState";

function reducer(state= initialState, action){
    switch (action.type) {
        case 'save':
            // console.log(initialState);
            // console.log(action.value);
            const newState= [...state,action.value]
            // console.log(newState);
            return newState
        default:
           return state;
    }
}

export default reducer;