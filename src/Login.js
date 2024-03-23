import Header from './Header';
import react,{useEffect,useState} from 'react';
import {useNavigate } from 'react-router-dom'
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate() 
    useEffect(()=>{
        if(localStorage.getItem("user-Info")){
            navigate("/Add")
        }
    },[])

    async function loginUser(){
    let item={email,password}
    console.warn(email,password)
    let result = await fetch("http://localhost:5000/register",{
        method:"Post",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(item)
    })
    result=await result.json()
    localStorage.setItem("user-Info",JSON.stringify(result))
    navigate("/Add")
    console.log("hhhhhhh")
}
    
    return (
        <div>
             <Header />
            <div className="col-sm-6 offset-sm-3">
            <h1>Login Page</h1>
            <input type="text" value={email} placeholder='Enter Email Address'  onChange={(e)=>setEmail(e.target.value )}  className="form-control" /> <br></br>
            <input type="text" value={password} placeholder='Enter Password'  onChange={(e)=>setPassword(e.target.value )}  className="form-control" /> <br></br>
            <button onClick={loginUser} className="btn btn-primary">Login</button>
         
        </div>

        </div>
    )
}

export default Login;