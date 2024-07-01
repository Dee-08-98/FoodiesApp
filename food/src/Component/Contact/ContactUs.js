import React, { useState } from 'react';
import axios from 'axios'
import Asset from '../Asset/b6.jpeg'
import '../Contact/ContactUs.css'
import toast from 'react-hot-toast'
function ContactUs(props) {

    const [getData, setData] = useState({
        Name: "",
        Email: "",
        ContactNo: "",
        Message: ""
    })
    const handleData = (e) => {
        setData({ ...getData, [e.target.name]: e.target.value })

    }
    const submitForm = (e) => {
        e.preventDefault()
        if (!getData.Name || !getData.Email || !getData.ContactNo || !getData.Message) {
            toast.error('Invalid Fields')
        }
        else if (getData.ContactNo.length < 10) {
            toast.error('Mobile number must be 10 character')
        }
        else {
            try {
                axios.post("http://localhost:8888/contact", getData)
                    .then((res) => {
                        console.log(res.status);
                        if (res.status == 200) {
                            toast.success('Message Send Sucessfull')
                            setData({
                                Name: "",
                                Email: "",
                                ContactNo: "",
                                Message: ""
                            })
                        }

                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } catch (error) {
                console.log('Something went wromg');
            }
        }


    }


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6' id='img'>
                        <img src={Asset}></img>
                    </div>
                    <div className='col-lg-6' id='contact'>
                        <h2 >Contact Us</h2>
                        <form>
                            <input type='text' name='Name' value={getData.Name} className='form-control  mb-4 mt-5' placeholder='Name' onChange={handleData} required='required'></input>



                            <input type='email' name='Email' value={getData.Email} className='form-control mb-4' placeholder='Email' onChange={handleData} required='required'></input>

                            <input type='number' name='ContactNo' value={getData.ContactNo} className='form-control mb-4' placeholder='Contact' onChange={handleData} required='required'></input>



                            <textarea class="form-control" name='Message' value={getData.Message} placeholder="Write Message" onChange={handleData} rows="5" required='required' >
                            </textarea>
                            <button className='btn btn-danger mt-4' id='msg' onClick={submitForm}>Send Message</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;


