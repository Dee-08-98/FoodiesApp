import React, { useEffect, useState } from 'react';
import './MenuJumbo.css'
import { Link } from 'react-router-dom'
import '../Navbar/Head'
import { searchUser } from '../../ReduxToolkit/StoreSlice';
import { useDispatch } from 'react-redux';
function MenuJumbo(props) {
    const [val, setVal] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchUser(val))
    }, [val])
    return (
        <>
            <div className="container-fluid active   bg-primary p-5" id="parents">
                <div className="container mt-5 mb-5" id='innerContent'>
                    <h2> Feel The Difference <br /> Feel The Taste</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est temporibus nisi blanditiis id quos sit
                        saepe quae repellendus quasi maxime.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est temporibus nisi blanditiis id quos sit
                        saepe quae repellendus quasi maxime.</p>
                    <br />
                    <p id='abou'>
                        <Link to='/'><span id='hom'> Home </span></Link> <span id='abou' > / Menu </span>
                    </p>
                   
                    <input className='w-50' value={val} onChange={(e) => setVal(e.target.value)} type='text' placeholder='Search Your Favourite Item' ></input>
                </div>

            </div>
        </>
    );
}

export default MenuJumbo;