import React from 'react'
import './address.css'

const Address = () => {
    return (
        <div id='address'>
            <h2>Basic Details</h2>
            <section class='address-section'>
                <div class='flex1'>
                    <div class="form-group">
                        <label for="name">First Name: </label>
                        <input class='input-address' type="text" name="name" id="name" />
                    </div>
                    <div class="form-group">
                        <label for="name">Last Name: </label>
                        <input class='input-address' type="text" name="name" id="name" />
                    </div>
                </div>
                <div class='flex1'>
                    <div class="form-group">
                        <label for="name">Email: </label>
                        <input class='input-address' type="email" name="name" id="name" />
                    </div>
                    <div class="form-group">
                        <label for="name">Phone Number: </label>
                        <input class='input-address' type="number" name="name" id="name" />
                    </div>
                </div>
                <div class='flex1'>
                    <div class="form-group">
                        <label for="name">Country: </label>
                        <input class='input-address' type="text" name="name" id="name" />
                    </div>
                    <div class="form-group">
                        <label for="name">City: </label>
                        <input class='input-address' type="text" name="name" id="name" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="name">Street Address: </label>
                    <input type="text" name="name" id="name" />
                </div>
                <div class='flex1'>
                    <div class="form-group">
                        <label for="name">Area: </label>
                        <input class='input-address' type="text" name="name" id="name" />
                    </div>
                    <div class="form-group">
                        <label for="name">Pin Code: </label>
                        <input class='input-address' type="Number" name="name" id="name" />
                    </div>
                </div>
            </section>
            <button class='bttn'>Submit</button>
        </div>
    )
}
export default Address;