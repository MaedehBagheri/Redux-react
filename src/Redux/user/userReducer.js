import { ERROR_USER, REQUEST_USER, SUCCES_USER } from "./userTypes";

const initialState={
    loading:false,
    data:[],
    error:"",
}

export const reducer =(state =initialState,action)=>{

    switch(action.type){
        case REQUEST_USER:
    return{...state,loading:true}
        case SUCCES_USER:
            return{...state,loading:false,error:"",data:action.payload}
case ERROR_USER:
    return{...state,loading:false,data:[],error:action.payload}
            default:
                return state;
    }
}
