import {useSelector,useDispatch} from "react-redux"
import {buyCake} from "../Redux/cake/CakeActions"


const CakeContainer =(props)=>{
const numOfCake= useSelector((state) => state.cake.numOfCake)
const dispatch= useDispatch();
    return (
        <>
        <h3>Cake:{numOfCake}</h3>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </>
    )
}


export default CakeContainer;