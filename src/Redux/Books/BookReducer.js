import { BUY_BOOK } from "./BookTypes";


const initialState={
    numOfBook:15,
}

export const bookReducer=(state =initialState ,action)=>{
    switch(action.type){
        case BUY_BOOK :
            return {...state,numOfBook:state.numOfBook- action.payload}

            default: return state;
    }

}