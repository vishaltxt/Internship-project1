import React from 'react'

const Forgotvianumber = () => {
    return (
        <>
            <div>
                <h1 class='forgot-heading'>Forgot Password</h1>
            </div>
            <section class="forgot-card">
                <label for="name">Phone Number: </label>
                <input class="inp" type="number" name="name" id="name" />
                <button>Send otp</button>
                {/* <p><a href="/">Forgot via Mobile Number </a> </p> */}
            </section>
        </>
    )
}
export default Forgotvianumber;
