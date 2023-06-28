import { BUY_CAKE } from "./CakeTypes"

const initialState={
    numOfCake:5,
}

export const cakeReducer=(state =initialState ,action)=>{
    switch(action.type){
        case BUY_CAKE :
            return {...state,numOfCake:state.numOfCake-1}

            default: return state;
    }

}