import React, { useState } from 'react';
import Dummy from "./Dummy.json"
import UseAuth from './UseAuth';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const {setAuthValue} = UseAuth()
    const nav  = useNavigate()

    const [object, setObject] = useState( {
        username:"",
        password: "",
      })
      const submit=(e)=>{
        e.preventDefault()
        console.log(object)
        const details = {username : object.username, password : object.password}
        console.log(details)

        const val = Dummy.items.find((res) => res.username === details.username && res.password === details.password);

        console.log(val)
        if(val){
          setAuthValue(val)
          nav('/')
        }
        setObject({ username: "", password: "" })
      }
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#F5F5F5" }}>
            <div className="card p-4" style={{ width: '400px', backgroundColor: "#F6F7FC" }}>
                <h2 className="text-center mt-3 mb-3">LOGIN</h2>
                <div className='text-start mt-2'>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={object.username} className="form-control mb-3 mt-2" placeholder="Enter username" onChange={(e) => {
                setObject({ ...object, username: e.target.value })

              }} />
                </div>
                <div className='text-start mt-2'>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={object.password} id="password" className="form-control mb-3 mt-2" placeholder="Password" onChange={(e) => {
                setObject({ ...object, password: e.target.value })
               
              }}/>
                </div>
                <button className="btn btn-primary btn-block mb-3 mt-3" style={{ backgroundColor: "#fb771a", borderColor: "#fb771a" }} onClick={submit}>Login</button>
            </div>
        </div>
    )
}

export default Login;
