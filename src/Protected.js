import Header from './Header';
import react,{useEffect} from 'react';
import {useNavigate } from 'react-router-dom'
function Protected(props) {
  let Cmp=props.Cmp
  const navigate=useNavigate() 
    useEffect(()=>{
        if(!localStorage.getItem("user-Info")){
            navigate("/Register")
        }
    },[])
    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default Protected;