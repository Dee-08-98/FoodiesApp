import React, { useEffect } from 'react';
import Sign from '../Component/SignUp/Sign'
import { useNavigate } from 'react-router-dom';
function Signup(props) {

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
            navigate('/signup')
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
            
           <Sign></Sign>
        </div>
    );
}

export default Signup;