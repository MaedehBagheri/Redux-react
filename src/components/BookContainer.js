import {useSelector,useDispatch} from "react-redux"
import {buyBook} from "../Redux/Books/BookAction";
import { useState } from "react";


const CakeContainer =(props)=>{
    const[numbers,setNumbers]=useState(0)

const numOfBook= useSelector((state) => state.book.numOfBook)
const dispatch= useDispatch();
    return (
        <>
        <h3>Cake:{numOfBook}</h3>
        <input type="text" onChange={(e)=> setNumbers(e.target.value)}/>
        <button onClick={()=>dispatch(buyBook(numbers))}>Buy {numbers}Book</button>
        </>
    )
}


export default CakeContainer;