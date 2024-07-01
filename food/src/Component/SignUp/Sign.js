import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../SignUp/Sign.css'
import axios from 'axios';
import toast from 'react-hot-toast';

function Sign(props) {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [sign, setSign] = useState({
        userName: '',
        userEmail: '',
        Password: '',
        confPassword: ''

    })
    const navigate = useNavigate()
    const handleClick = () => {
        setShow(!show)
    }
    const handleClick2 = () => {
        setShow2(!show2)
    }

    const submitHandler = (e) => {
        setSign({ ...sign, [e.target.name]: e.target.value })
    }

    const sendData = (e) => {
        e.preventDefault()
        
       try {
        if (!sign.userName || !sign.userEmail || !sign.Password || !sign.confPassword) {
            toast.error('Some Fields are missing')
        }
        else{
            if (sign.Password.length >= 6 && sign.confPassword.length >= 6) {
                if (sign.Password === sign.confPassword) {
                    axios.post('http://localhost:8888/register', sign)
                        .then((res) => {
                            if (res.data.sucess) {
                                toast.success(res.data.message)
                                setSign({
                                    userName: '',
                                    userEmail: '',
                                    Password: '',
                                    confPassword: ''
                                })
                                navigate('/login')
                            }

                        })
                        .catch((err) => {
                            console.log(err);
                        })

                }
                else{
                    toast.error('Password and confirm Password must be equal')  
                }
            }
            else{
                toast.error('Password and confirm Password must be 6 character')  
            }

        }
       } catch (error) {
        console.log(error);
       }
        
       
    }
    return (
        <div id='bg'>
            <div className='container pt-5' >
                <div className='row'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4 p-5 ' id='contnr'>
                        <h2 className='signn d-flex justify-content-center'>SIGN UP</h2>

                        <form onSubmit={sendData}>

                            <div className='form-group'>
                                <label>User Name</label>
                                <input type='text' className='form-control ' id='one2' name='userName' value={sign.userName} onChange={submitHandler} ></input>
                            </div>
                            <div className='form-group mt-2'>
                                <label>Email</label>
                                <input type='email' className='form-control ' id='one3' name='userEmail' value={sign.userEmail} onChange={submitHandler}  ></input>
                            </div>
                            <div className='form-group mt-2'>
                                <label>Password</label>
                                <input type={show ? 'text' : 'password'} className='form-control ' id='one4' name='Password' value={sign.Password} onChange={submitHandler} ></input>
                                <Link to=''><p id='show1' onClick={handleClick}>{show ? 'Hide' : 'Show'}</p></Link>

                            </div>
                            <div className='form-group mt-2'>
                                <label> Confirm Password</label>
                                <input type={show2 ? 'text' : 'password'} className='form-control ' id='one5' name='confPassword' value={sign.confPassword} onChange={submitHandler} ></input>
                                <Link><span id='show2' className='pt-0' onClick={handleClick2}>{show2 ? 'Hide' : 'Show'}</span></Link>
                            </div>

                            <div class="col-12 mt-5">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                                    <label class="form-check-label text-white" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>

                                </div>
                            </div>

                            <button type='submit' className='btn btn-success mt-4 w-100' id='sign'>
                                SIGN UP NOW
                            </button>

                        </form>
                        <p className='mt-4'>Have an Account ? <Link to='/login'><a className='text-warning text-decoration-underline' >Login Here</a></Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sign;