import 'bootstrap/dist/css/bootstrap.min.css';
import '../signin.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

export function Contact(){
    return(
        <>
        <div className='container-fluid bgcontact p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 mt-5'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <h1 className='text-light'>Micro</h1>

                            </div>
                            <div className='col-lg-12 mt-4'>
                                <h1 className='text-light'>loan</h1>
                            </div>

                        </div>

                    </div>
                    <div className='col-lg-1 mt-5'>&nbsp;

                    </div>
                    <div className='col-lg-9 text-light mt-5'>
                        <div className='row'>
                            <div className='col-lg-3'> 
                             <h6>All Solutions</h6>
                             <h6>micro Loans</h6>
                             <h6>micro Workplace</h6>
                             <h6>Micro App</h6>
                             <h6>Micro Cloud</h6><br/>

                             <h6>Certified Partners & Service Providers</h6>
                             <h6>Find Your Partner</h6>
                             <h6>Become a Moodle Certified Partner</h6>
                             <h6>Certified Integrations</h6>
                             

                            </div>
                            <div className='col-lg-3'> 
                             <h6>Customers</h6>
                             <h6>K-12</h6>
                             <h6>Higher Education</h6>
                             <h6>Vocational Training</h6>
                             <h6>Workplace Learning</h6>
                             <br/><br/>

                             <h6>Community</h6>
                             <h6>Community</h6>

                            </div>
                            <div className='col-lg-3'>
                             <h6>About Us</h6>
                             <h6>About Us</h6>
                             <h6>our Story</h6>
                             <h6>Open Source</h6>
                             <h6>B Corp Certified</h6> 
                             <h6>News</h6>
                             <h6>Events</h6>
                             <h6>Events</h6>

                            </div>
                            <div className='col-lg-3'> 
                             <h6>Empowering educators to improve our world.</h6>
                             <button className='bg-light p-2 mt-3  text-center ml-1 elevenbtn'>Donate →</button>
                             <button className='bg-light p-2 mt-3  text-center ml-1 elevenbtn'>shop →</button>

                            </div>
                            <hr className='bg-light bghori'/>
                            <div className='col-lg-3'><h6>Cookies Policy</h6></div>
                            <div className='col-lg-3'><h6>Privacy Notice</h6></div>
                            <div className='col-lg-3'><h6>Trademark Policy</h6></div>
                            <div className='col-lg-3'>
                                <FontAwesomeIcon icon={faLinkedin} className="contact ml-1"/>
                                <FontAwesomeIcon icon={faFacebook} className="contact ml-1" />
                                <FontAwesomeIcon icon={faTwitter} className="contact ml-1" />
                                <FontAwesomeIcon icon={faYoutube} className="contact ml-1"/>
                                <FontAwesomeIcon icon={faInstagram} className="contact ml-1"/>


                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>
        <div className='container-fluid bg-dark p-3'>
            <div className='container'>
                <div className='row text-light'>
                    <div className='col-lg-8'>
                        <p>All Products: Business loans, Working capital loans, MLC loans ,Business loans for women</p>
                    </div>
                    <div className='col-lg-4'>
                        <p>Copyright © 2023 Micro loans rights reserved</p>

                    </div>
                </div> 
            

            </div>

        </div>
        </>
    );
}