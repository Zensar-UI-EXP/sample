import { TOGGLE_FILTER, SET_ACTIVE } from "./action";

const initState   =  {
    open: false,
    active: [1,4,5]
}

export  function filterReducer(state=initState, action){
    switch(action.type){

        case TOGGLE_FILTER:
            return {
                ...state,
                open: !state.open,
            };

        case SET_ACTIVE:
            return {
                ...state,
                active: action.payload,
            };

        default:
            return state;
    }
}