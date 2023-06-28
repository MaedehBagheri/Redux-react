import { useEffect } from "react";

import { fetchUsers } from "../Redux/user/userActions";
import {useSelector,useDispatch} from "react-redux"

function UserContainer (){


    const dispatch=useDispatch();
    const users =useSelector((state)=> state.user)
const{data,error,loading}=users;


    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    return(<div>
        {loading ? <p>loading...</p>:
        error?
        <p>{error}</p>:
        users&& data&& data.length&&(
            <div>
                <h2>users ....</h2>
                {data.map((user)=>(
                    <p key={user.id}>{user.name}</p>
                ))}
            </div>
        )
        }
    </div>)
}

export default UserContainer;