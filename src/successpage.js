import React from 'react';
import './successpage.css';
import img9 from './images/successpagelogo.png';

const Successpage = () => {
    return (
        <>
            <div id="success-bg">
                <div id="success-id">
                    <img className="success-img" src={img9} alt="/" />
                    <p>Success</p>
                </div>
                <div class="success">you logged in successfully!</div>
            </div>
        </>
    );
};
export default Successpage;
