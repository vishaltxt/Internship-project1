import React from 'react'
import './forgot.css'

const Forgot = () => {
    return (
        <>
            <div>
                <h1 class='forgot-heading'>Forgot Password</h1>
            </div>
            <section class="forgot-card">
                <label for="name">Email Address: </label>
                <input class="inp" type="mail" name="name" id="name" />
                <button>Send Reset Code</button>
                <p><a href="/forgotvianumber">Forgot via Mobile Number </a> </p>
            </section>
        </>
    )
}

export default Forgot;
