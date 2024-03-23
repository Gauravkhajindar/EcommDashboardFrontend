import react,{useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import Header from './Header';
function Register() {

    useEffect(()=>{
        if(localStorage.getItem("user-Info")){
            navigate("/Add")
        }
    },[])
   

    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate()

   async function signUp(){
        let item={fname,lname,email,phone,password}
        console.warn(fname,lname,email,phone,password)
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
        <> <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" value={fname} placeholder='Enter First Name' onChange={(e)=>setFname(e.target.value )}  className="form-control" /> <br></br>
            <input type="text" value={lname} placeholder='Enter Last Name'  onChange={(e)=>setLname(e.target.value)}  className="form-control" /> <br></br>
            <input type="text" value={email} placeholder='Enter Email Address'  onChange={(e)=>setEmail(e.target.value )}  className="form-control" /> <br></br>
            <input type="text" value={phone} placeholder='Enter Mobile Number' onChange={(e)=>setPhone(e.target.value )}  className="form-control" /> <br></br>
            <input type="text" value={password} placeholder='Enter Password'  onChange={(e)=>setPassword(e.target.value )}  className="form-control" /> <br></br>
            <button onClick={signUp} className="btn btn-primary">Sign up</button>
         
        </div>
        </>
    )
}

export default Register;