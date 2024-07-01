import React, { useEffect, useState, } from 'react';
import Footer from '../Component/Footer/Footer';
// import { data } from '../Component/Specialities/Specialities';
import '../Pages/Cart.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, remove } from '../ReduxToolkit/StoreSlice';
import Head from '../Component/Navbar/Head';

function Cart() {

    // *********************Authenticate

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
            navigate('/cart')  
        }

    }

    useEffect(() => {
        HomeValidation()
    }, [])

// *************************

    const {cart,totalPrice} = useSelector(state => state.allCart)
    const dispatch = useDispatch()

    return (
        <div>

            <Head></Head>

            {
                cart == 0 ?
                    <>
                        <div className="container" id='shopcon'>
                            <div className="a">
                                <h2 id='shop'>
                                    Your Shopping Cart is Empty.
                                </h2>
                                <Link to='/menu'> <button className='shopbtn '> Shop Now </button></Link>
                            </div>
                        </div>
                    </>
                    :
                    <div className="container">
                        <div className="row">
                            {
                                cart.map((itm) => {
                                    return (
                                        <>
                                        
                                            <div className="container" key={itm.id}>
                                                <div className="row" id='sec'>
                                                    <div className="col-lg-12">
                                                        <img src={itm.image} alt="..." />

                                                        <span className='title'>{itm.title}</span>
                                                        <span className='title'>{itm.quantity}</span>

                                                        <span className='butn'>
                                                            <button className='minus' onClick={() => dispatch(decreaseQuantity(itm.id))}>-</button>
                                                            <button className='plus' onClick={() => dispatch(increaseQuantity(itm.id))}>+</button>

                                                        </span>
                                                        <span className='price'> <span style={{ color: 'green' }}> Rs. </span>{itm.price*itm.quantity}</span>
                                                        <Link><span className=' fa fa-remove' style={{ color: 'red', fontWeight: '900' }} onClick={() => dispatch(remove(itm.id))}></span></Link>
                                                    </div>


                                                </div>

                                            </div>


                                        </>
                                    )
                                })
                            }
                            <hr className='mt-5'></hr>
                            <div className="col-lg-12 " id='total'>
                                <span className='pt-5'> Total Price :- {cart.map((item)=> item.price*item.quantity).reduce((a,b)=>a+b)}  Only / </span>
                            </div>
                            <div className="col-lg-12 " id='Total'>
                                <Link to='/address'> <button > Next... </button> </Link>
                            </div>
                            <div className="col-lg-12 mt-3 " id='Total2'>
                                <Link to='/menu'> <button  > Shop_More.. </button> </Link>
                            </div>

                        </div>
                    </div>

            }

            <Footer></Footer>

        </div >

    );
}

export default Cart;