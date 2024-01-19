import React from 'react'
import './profile.css'
import img8 from '../images/prifilepic.jpeg'
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <>
            <div class="display">
                <div id="profile-main" >
                    <container id="profile-nav">
                        <h2>Profile Page</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Profile</li>
                            <li>Blog</li>
                        </ul>
                    </container>
                </div>
                <container>
                    <section class="level">
                        <div>
                            <img class="imgg" src={img8} alt="" />
                        </div>
                        <button class="btttn">edit profile picture</button>
                        <section class="displayy">
                            <section class='cardd'>
                                <div>
                                    <p>General</p>
                                </div>
                                <div>
                                    <p><Link to="/editprofile">Edit Profile</Link></p>
                                </div>
                                <div>
                                    <p><Link to="/forgot">Forgot Password</Link></p>
                                </div>
                                <div>
                                    <p>Payment Method</p>
                                </div>
                                <div>
                                    <p>Delete account</p>
                                </div>
                            </section>
                            <section class="gapp">
                                <div>
                                    <label for="name">First Name: </label>
                                    <input class="inp" type="text" name="name" id="name" />
                                </div>
                                <div>
                                    <label for="name">Email: </label>
                                    <input class="inp" type="mail" name="name" id="name" />
                                </div>
                                <div>
                                    <label for="name">Bio: </label>
                                    <input class="inp" type="Bio" name="name" id="name" />
                                </div>
                                <div>
                                    <label for="name">Location: </label>
                                    <input class="inp" type="location" name="name" id="name" />
                                </div>
                                <div>
                                    <button class="button1">Save</button>
                                    <button class="button2">Cancel</button>
                                </div>
                            </section>
                        </section>
                    </section>
                </container>
            </div>
            <div>
                {/* <h2>Profile Page</h2> */}
                {/* <p>Name: {user.name}</p> */}
                {/* <p>Email: {user.email}</p> */}
                {/* <Link to="/editprofile">Edit Profile</Link> */}
            </div>
        </>
    )
}
export default Profile;
