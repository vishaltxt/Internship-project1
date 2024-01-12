import React from 'react';
import './homepage.css';
// import About from './about';
import img1 from '../images/Frontend.jpg'
import img2 from '../images/backend.jpg'
import img3 from '../images/database.jpeg'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// export default function Homepage() {
const Homepage = () => {
    // const navigate = useNavigate();
    // const onClick = () => {
    // navigate("/about")
    // };

    // const navigate = useNavigate();
    // const shouldRedirect = true;
    // if (shouldRedirect) {
    // navigate('/login');
    // }
    return (
        <>
            <div>
                <nav id="navbar">
                    <ul>
                        <li class="item"><a href="#home">Home</a></li>
                        <li class="item"><Link to="/about">About Us</Link></li>
                        <li class="item"><Link to="/termsofuse">Terms of use</Link></li>
                        <li class="item"><Link to="/privacypolicy">Privacy policy</Link></li>
                    </ul>
                </nav>
                <section id="services-container">
                    <div id="services">
                        <div class="box">
                            <img src={img1} alt="" />
                            <h2 class="h-secondary center ">Frontend Technology</h2>
                            <p class="center">Keep in mind that the field of frontend development is dynamic, and new technologies may have emerged since then. Here are some of the key frontend technologies like Html , Css ,Javascript , React.js , Angular etc.. so these are the frontend technologies.</p>
                        </div>
                        <div class="box">
                            <img src={img2} alt="" />
                            <h2 class="h-secondary center">Backend Technology</h2>
                            <p class="center">Various backend technologies were popular for developing the server-side of web applications. Below, I'll provide an outline for an article on backend technologies. Please note that the field evolves, and new technologies may have emerged since my last update.These are some backend technologies</p>
                        </div>
                        <div class="box">
                            <img src={img3} alt="" />
                            <h2 class="h-secondary center">DataBases</h2>
                            <p class="center">A database is a structured collection of data that is organized in a way that allows for efficient storage, retrieval, and manipulation of that data. In essence, it is a systematic and organized way to store and manage information. Databases are widely used in various applications and industries to handle.</p>
                        </div>
                    </div>
                </section>
                <section id='contact'>
                    <h1 class='center'>Contact Us</h1>
                    <div id='contact-box'>
                        <div class='box'>
                            <h2 class='color'>Just say Hello !</h2>
                            <p>Let us Know more about you !</p>
                            <div class='grid'>
                                <div id='name' class='form-group'>
                                    <input type="text" name="name" id="name" placeholder="First Name" />
                                </div>
                                <div id='last' class='form-group'>
                                    <input type="text" name="name" id="name" placeholder="Last Name" />
                                </div>
                                <div id='mail' class='form-group'>
                                    <input type="email" name="name" id="name" placeholder="Mail" />
                                </div>
                                <div id='phone' class='form-group'>
                                    <input type="phone" name="name" id="name" placeholder="Phone" />
                                </div>
                            </div>
                            <div>
                                <textarea name="message" id="message" cols="40" rows="4" placeholder='Message'></textarea>
                            </div>
                            <button class='btn'>Submit</button>
                        </div>
                        <div class='box'>
                            <h1 class='color'>Contact Information</h1>
                            <div class='address'>
                                <p class='no-space'>B-4, First Floor, B-Block, sector:63</p>
                                <p class='no-space'>Noida,Uttar Pradesh 201301</p>
                                <p class='no-space'>India</p>
                                <p>Call Us : +91-987654321</p>
                                <p class='no-space'>We are open from Monday-Sataurday</p>
                                <p class='no-space'>10:00 am - 7:00 pm</p>
                            </div>
                            <h1 class='color'>Follow Us</h1>
                            <ul class='flex'>
                                <li class='item'>LinkedIn</li>
                                <li class='item'>Instagram</li>
                                <li class='item'>Facebook</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Homepage;