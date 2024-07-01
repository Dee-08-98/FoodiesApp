import React, { useEffect } from 'react';
import Jumbo from '../Component/Jumbotron/Jumbo';
import SpecialItem from '../Component/SpecialItem/SpecialItem';
import Footer from '../Component/Footer/Footer';
import HappyCustomers from '../Component/HappyCustomers/HappyCustomers';
import { useNavigate } from 'react-router-dom';
import Head from '../Component/Navbar/Head';

function Home(props) {
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
            <Head></Head>
            <Jumbo></Jumbo>
            <SpecialItem></SpecialItem>
            <HappyCustomers></HappyCustomers>

            <Footer></Footer>

        </div>
    );
}

export default Home;