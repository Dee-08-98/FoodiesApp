import React from 'react';
import '../Footer/Footer.css'
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <>
            <div className='container-fluid ' id='foodFooter'>
                <div className='row'  id='fotr4'>
                    <div className='col-lg-6 col-md-6 col-sm-6 mb-5'id='fotr'>
                        <h3><em>Address</em></h3>
                        <p>
                           <em> Lorem ipsum dolor sit amet consectetur adipisicing elitlorem Lorem ipsum dolor sit.</em>
                        </p>
                        <h6><i className="fa fa-home"></i> <em>Badarpur Border Near toll plaza besides Bharat Petroleum</em></h6>
                        <h6><i className="fa fa-phone"></i><em> +1222 4545 / +91 8709345623</em></h6>
                        <h6><i className="fa fa-envelope-open"></i> <em>Foodies108@gmail.com</em></h6>

                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 mb-5' id='fotr1'>
                        <h3><em>Open Hours</em></h3>
                        <p id='fotrp'>
                           <em> Lorem ipsum dolor sit amet consectetur adipisicing elitlorem Lorem ipsum dolor sit.</em>
                        </p>
                        <h6> <span><em>Monday - Friday</em></span><em> :- 08 AM - 11 PM </em></h6>
                        <h6> <span><em>Saturday - Sunday</em></span><em> :- 09 AM - 02 PM</em></h6>
                        <h6><span><em>Free Home Delivery</em></span><em> :- In Radius of 5 Km</em> </h6>

                    </div>
                    <div className='col-lg-12' id='fotr2'>
                        <h2><em><span>Stay</span>Connected</em></h2>
                        <div class="row">
                            <div class="footer">
                                <p>
                                   <Link> <i className="fa fa-facebook mx-3" id='fa1'></i></Link>
                                    <Link><i className="fa fa-instagram mx-3" id='fa2'></i></Link>
                                  <Link><i className="fa fa-twitter mx-3"id='fa3'></i></Link>
                                   
                                   <Link> <i className="fa fa-whatsapp"id='fa4'></i></Link>
                                </p>
                            </div>
                            <h5 className="fa fa-copyright" id="copy"> All Copyright Reserved Foodies </h5>

                            <h6 id='footerDesign'><em>Designed and Developed By :- Deepak Kumar</em> </h6><br />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;