import React from 'react';
import './about.css';
import img4 from '../images/about.jpg'
const About = () => {
    return (
        <div>
            <header>
                <section id='flex'>
                    <div class='containers'>
                        <div class='first-half'>
                            <h1>About Us</h1>
                            <p>we are a web developer company in <span>INDIA</span>.</p>
                            <p>Krinvi Technologies Pvt Ltd is a leading IT company that provides complete solutions for businesses. We specialize in website development, app development, logo design, SEO services, and UI/UX designs. Our team of skilled professionals delivers top-notch quality projects that cater to the unique needs of each client. Whether you need a robust website, a user-friendly mobile app, or a visually appealing logo design, we are here to turn your ideas into reality.</p>
                            <p> With our expertise in digital marketing, we help businesses establish a strong online presence and reach their target audience effectively. Trust Krinvi Technologies to provide comprehensive IT solutions that will take your business to new heights.</p>
                            <h1>Our Process</h1>
                            <p>we hire graduate students in our firm by an interview process which consists of mainly three rounds. After qualifiying these rounds student is eligible to do job in our firm.</p>
                        </div>
                        <div class='second-half'>
                            <img src={img4} alt=''></img>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    )
}
export default About;