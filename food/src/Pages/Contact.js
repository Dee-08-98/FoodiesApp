import React, { useEffect } from 'react';
import PagesJumbo from '../Component/Jumbo/PagesJumbo';
import ContactUs from '../Component/Contact/ContactUs';
import ContactInformation from '../Component/ContactInformation/ContactInformation';
import Footer from '../Component/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Head from '../Component/Navbar/Head';
function Contact(props) {

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
        // else{
        //     navigate('/contact')  
        // }

    }

    useEffect(() => {
        HomeValidation()
    }, [])

    return (
        <div>
            <Head></Head>
           <PagesJumbo title='Contact'></PagesJumbo>
           <ContactUs></ContactUs>
           <ContactInformation></ContactInformation>
           <Footer></Footer>
        </div>
    );
}

export default Contact;