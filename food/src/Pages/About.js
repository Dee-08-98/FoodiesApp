import React, { useEffect } from 'react';
import PagesJumbo from '../Component/Jumbo/PagesJumbo';
import AboutFoodies from '../Component/AboutFoodies/AboutFoodies';
import Info from '../Component/AboutInfo/Info';
import Services from '../Component/Services/Services';
import MasterChef from '../Component/MasterChef/MasterChef';
import Footer from '../Component/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Head from '../Component/Navbar/Head';


function About(props) {

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
            navigate('/about')  
        }

    }

    useEffect(() => {
        HomeValidation()
    }, [])

    return (
        <div>
            <Head></Head>
           <PagesJumbo title='About'></PagesJumbo> 
           <AboutFoodies></AboutFoodies>
           <Info></Info>
           <Services></Services>
           <MasterChef></MasterChef>
           <Footer></Footer>
        </div>
    );
}

export default About;