import React, { useEffect } from 'react';
import Log from '../Component/Login/Log'
import { useNavigate } from 'react-router-dom';
function Login(props) {

    const navigate = useNavigate()
    const HomeValidation = async () => {
        const token = localStorage.getItem('token')
        const res = await fetch('http://localhost:8888/Home/valid', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            }
        })
        const result = await res.json()
        // console.log(result.sucess);
        // console.log(result.userData.payloadOfToken.userName);
        // console.log(result.userData.payloadOfToken.userEmail.userEmail);
        if (!result.sucess) {
            navigate('/login')
        }
        else{
            navigate('/')  
        }

    }

    useEffect(() => {
        HomeValidation()
    }, [])

    
    return (
        <div>
         
           <Log></Log>
           </div>
    
    );
}

export default Login;