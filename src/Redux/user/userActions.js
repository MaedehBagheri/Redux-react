import {REQUEST_USER,ERROR_USER,SUCCES_USER} from "./userTypes"
import axios from "axios";
function request (){
    return{
        type:REQUEST_USER,
    }
}


function succes (users){
    return{
        type:SUCCES_USER,
        payload:users,
    }
}


function failaure (error){
    return{
        type:ERROR_USER,
        payload:error,
    }
}


export const fetchUsers =()=>{
    return function(dispatch){
        dispatch(request());

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            dispatch(succes(res.data))
        })
        .catch((err)=>{
            dispatch(failaure(err.message))
        })
    }
}