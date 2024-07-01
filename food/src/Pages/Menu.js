import React, { useEffect } from 'react';
import Footer from '../Component/Footer/Footer';
import List from '../Component/Product';
import '../Pages/Menu.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../ReduxToolkit/StoreSlice';
import MenuJumbo from '../Component/MenuJumbo/MenuJumbo';
import { useNavigate } from 'react-router-dom';
import Head from '../Component/Navbar/Head';


function Menu() {

    const [trending, setTrending] = useState(List)
    const { searchData } = useSelector(state => state.allCart)

    const filtercate = (x) => {
        const fltcat = List.filter((pro) => {
            return pro.category === x
        })
        setTrending(fltcat)
    }

    const dispatch = useDispatch()



    // *********************

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
            navigate('/menu')  
        }

    }

    useEffect(() => {
        HomeValidation()
    }, [])

    // ************************



    return (
        <>
        <Head></Head>
            <MenuJumbo></MenuJumbo>

            <div className='container' id='menu'>
                <div className='row'>
                    <div className='col-lg-12 text-center' id='menubutton'>
                        <button className='btn mb-2 mx-2' onClick={() => filtercate('breakFast')}>Breakfast</button>
                        <button className='btn mb-2 mx-2' onClick={() => filtercate('lunch')}>Lunch</button>
                        <button className='btn mb-2 mx-2' onClick={() => filtercate('dinner')}>Dinner</button>
                        <button className='btn mb-2 mx-2' onClick={() => filtercate('drinks')}>Drinks</button>
                        <button className='btn mb-2 mx-2' onClick={() => filtercate('dessert')}>Dessert</button>
                        <button className='btn mb-2 mx-2' onClick={() => filtercate('sweets')}>Sweets</button>
                        <button className='btn mb-2 mx-2' onClick={() => filtercate('wine')}>Wine</button>

                    </div>

                    {
                        trending && trending.filter((item) => {
                            if (searchData.length === 0) {
                                return item;
                            }
                            else {
                                return item.title.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())
                            }
                        }).map((items, i) => {
                                return (
                                    <>
                                        <div className='col-lg-4 col-md-6 col-sm-6' key={i}>

                                            <div className='ads' id='ads'>
                                                <img src={items.image}></img>
                                            </div>
                                            <div className='bds'>
                                                <h6>{items.title}</h6>
                                                <p>{items.about}</p>
                                                <h5> <span style={{ color: 'black', fontWeight: '700' }}>Rs :- </span> {items.price} /</h5>

                                                <button className='mb-5 ' onClick={() => dispatch(add(items))} id='btn'>Add to Cart</button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                    }

                </div >
            </div >
            <Footer></Footer>


        </>
    );
}

export default Menu;