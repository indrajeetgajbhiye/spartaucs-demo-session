import { SoldToActions, SoldToActionTypes } from "./sold-to.actions";


const initialState = {
    selectedSoldTo : null,
    soldTos : []
}

export function soldToReducer(state = initialState, action: SoldToActions){
    switch(action.type){
        case SoldToActionTypes.ADD_SOLD_TO_SUCCESS:
            return { ...state, selectedSoldTo: action.payload};
        // leaving it for exercise
        case SoldToActionTypes.GET_SOLD_TOS_SUCCESS:
            return { ...state, soldTos: action.payload}
        default:
            return state;
    }
}

